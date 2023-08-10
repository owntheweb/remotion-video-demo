import {staticFile} from 'remotion';
import {useCallback, useEffect, useState} from 'react';
import {useVideoConfig} from 'remotion';
import {getAudioDurationInSeconds} from '@remotion/media-utils';

const useNarratedDuration = (
	narrationAudioFile: string,
	framePaddingBefore: number,
	framePaddingAfter: number
) => {
	const {fps} = useVideoConfig();
	const [durationFrames, setDurationFrames] = useState(0);

	const getDurationFrames = useCallback(async () => {
		try {
			const duration = await getAudioDurationInSeconds(
				staticFile(narrationAudioFile)
			);
			const durationInFrames =
				duration * fps + framePaddingBefore + framePaddingAfter;
			setDurationFrames(durationInFrames);
		} catch (err) {
			console.log(err);
		}
	}, [narrationAudioFile, fps, framePaddingBefore, framePaddingAfter]);

	useEffect(() => {
		getDurationFrames();
	}, [getDurationFrames]);

	return durationFrames;
};

export {useNarratedDuration};
