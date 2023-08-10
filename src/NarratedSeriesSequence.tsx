// 🔥 Series component does not like me doing this with a lot of ugly work-around to make it work-ish.
// Keeping for reference as I get started here. Will remove if it doesn't work out. See:
// https://stackoverflow.com/questions/76872538/in-react-and-typescript-why-is-my-returned-series-sequence-erroring-as-type/76872878

import React, {useCallback, useEffect, useState} from 'react';
import {Audio, staticFile, Series, useVideoConfig} from 'remotion';
import {getAudioDurationInSeconds} from '@remotion/media-utils';

// TODO: I thought about using a zod schema here like the cool kids at Remotion, yet interface seems to be
// enough for this, not so data heavy. What does the Remotion/React community think about this?
export interface NarratedSeriesSequenceProps {
	narrationAudioFile: string;
	children: JSX.Element;
	framePaddingBefore?: number;
	framePaddingAfter?: number;
}

/**
 * Time a sequence dynamically based on narration audio length. Add optional padding before
 * and after the narration begins. This gives more flexibility and time savings when needing
 * to make use of several narration-based sequences and when making revisions to
 * narration recordings.
 */
export const NarratedSeriesSequence: React.FC<NarratedSeriesSequenceProps> = ({
	narrationAudioFile,
	framePaddingBefore = 0,
	framePaddingAfter = 0,
	children,
}: NarratedSeriesSequenceProps) => {
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
	}, [narrationAudioFile, framePaddingBefore, framePaddingAfter, fps]);

	// Get narration audio frames
	useEffect(() => {
		getDurationFrames();
	}, [getDurationFrames]);

	if (durationFrames === 0) {
		return null;
	}

	return (
		<Series.Sequence durationInFrames={durationFrames}>
			{children}
		</Series.Sequence>
	);
};
