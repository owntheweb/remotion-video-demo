import {Audio, Sequence} from 'remotion';
import {
	AbsoluteFill,
	Series,
	staticFile,
	useVideoConfig,
	Video,
} from 'remotion';
import {BackgroundAudio} from './BackgroundAudio';
import {ReactElement, useCallback, useEffect, useMemo, useState} from 'react';
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import {Weather} from './sequence/Weather/Weather';
import {ReactAndRemotion} from './sequence/ReactAndRemotion/ReactAndRemotion';
import {FamiliarTools} from './sequence/FamiliarTools/FamiliarTools';
import {TitleScreen} from './sequence/TitleScreen/TitleScreen';
import {Training} from './sequence/Training/Training';
import {DynamicData} from './sequence/DynamicData/DynamicData';
import {NasaPicOfTheDay} from './sequence/NasaPicOfTheDay/NasaPicOfTheDay';
import {ThreeLottieTailwind} from './sequence/NodeLottieTailwind/ThreeLottieTailwind';
import {TransparentOverlay} from './sequence/TransparentOverlay/TransparentOverlay';
import {CodeLink} from './sequence/CodeLink/CodeLink';
import {DocumentationLink} from './sequence/DocumentationLink/DocumentationLink';
import {EnjoyThisVideo} from './sequence/EnjoyThisVideo/EnjoyThisVideo';
import {NarrationSequence} from './DelayedNarrationSequence';
import {VideoError} from './VideoError';

export interface NarrationFrames {
	narrationAudioKey: string;
	frames: number;
}

export interface NarrationSequenceItem {
	content: ReactElement;
	narrationAudioKey?: string; // Narration file name without parent directories or ".mp3"
	duration?: number; // Set a duration when not using narration, e.g. a video or title screen
}

export const MyComposition: React.FC = () => {
	const {fps} = useVideoConfig();
	const [narrationFrames, setNarrationFrames] = useState<NarrationFrames[]>([]);

	const narrationFramePadding = 19;

	// This sequence in array form was designed to address unknown/dynamic audio timings in a narration-heavy
	// video with several scenes, keeping the logic around that timing a touch more compact in render().
	const narratedSequence: NarrationSequenceItem[] = useMemo(
		() => [
			{
				duration: 220,
				content: <TitleScreen />,
			},
			{
				narrationAudioKey: 'SubBlock_This-video-was-designed-and-re',
				content: <ReactAndRemotion />,
			},
			{
				duration: 240,
				content: (
					<AbsoluteFill>
						<Video src={staticFile('video/why-use-react.mp4')} />
					</AbsoluteFill>
				),
			},
			{
				narrationAudioKey: 'SubBlock_Remotion-gives-web-developers',
				content: <FamiliarTools />,
			},
			{
				duration: 240,
				content: (
					<AbsoluteFill>
						<Video src={staticFile('video/why-not-other-video-editors.mp4')} />
					</AbsoluteFill>
				),
			},
			{
				narrationAudioKey: 'SubBlock_Using-React-with-Remotion-offe',
				content: <DynamicData />,
			},
			{
				narrationAudioKey: 'SubBlock_For-example-a-current-weather',
				content: <Weather />,
			},
			{
				narrationAudioKey: 'SubBlock_It-could-be-helpful-for-a-larg',
				content: <Training />,
			},
			{
				narrationAudioKey: 'SubBlock_Heres-the-NASA-Picture-of-the',
				content: <NasaPicOfTheDay />,
			},
			{
				narrationAudioKey: 'SubBlock_Using-React-to-create-videos-a',
				content: <ThreeLottieTailwind />,
			},
			{
				narrationAudioKey: 'SubBlock_Remotion-can-also-generate-tra',
				content: <TransparentOverlay />,
			},
			{
				duration: 180,
				content: (
					<AbsoluteFill>
						<Video src={staticFile('video/wonderful.mp4')} />
					</AbsoluteFill>
				),
			},
			{
				narrationAudioKey: 'SubBlock_The-code-used-to-generate-this',
				content: <CodeLink />,
			},
			{
				narrationAudioKey: 'SubBlock_Also-be-sure-to-check-out-Rem',
				content: <DocumentationLink />,
			},
			{
				narrationAudioKey: 'SubBlock_Hey-did-you-like-this-video',
				content: (
					<AbsoluteFill className="bg-black text-white text-7xl p-24">
						[Placeholder: Enjoy this video?]
					</AbsoluteFill>
				),
			},
			{
				narrationAudioKey: 'SubBlock_Thank-you-for-watching-and-hav',
				content: (
					<AbsoluteFill className="bg-black text-white text-7xl p-24">
						[Placeholder: Thank you for watching and have a very, productive
						day.]
					</AbsoluteFill>
				),
			},
			{
				duration: 240,
				content: (
					<AbsoluteFill>
						<Video src={staticFile('video/farewell.mp4')} />
					</AbsoluteFill>
				),
			},
		],
		[]
	);

	// Calculate sequence lengths in frames based on narration audio length in seconds.
	const getFrames = useCallback(
		async (file: string): Promise<number> => {
			const seconds = await getAudioDurationInSeconds(staticFile(file));
			return seconds * fps;
		},
		[fps]
	);

	// Lookup the number of frames that was calculated and assigned for a narration audio file in the first useEffect() call.
	const getNarrationFrames = useCallback(async (): Promise<void> => {
		const frames: NarrationFrames[] = await Promise.all(
			narratedSequence
				.filter((sequenceItem) => sequenceItem.narrationAudioKey)
				.map(async (sequenceItem) => ({
					narrationAudioKey: sequenceItem.narrationAudioKey ?? '',
					frames:
						(await getFrames(
							`audio/narration/${sequenceItem.narrationAudioKey}.mp3`
						)) ?? 0,
				}))
		);

		setNarrationFrames(frames);
	}, [getFrames, narratedSequence]);

	// Get things started by calculating number of frames to show per narration audio file.
	useEffect(() => {
		getNarrationFrames();
	}, [getNarrationFrames]);

	// Find calculated frame count for narration audio file by audio file key
	const getMatchingFrames = useCallback(
		(narrationAudioKey: string): number => {
			const match = narrationFrames.find(
				(narrationFrame) =>
					narrationFrame.narrationAudioKey === narrationAudioKey
			);
			if (!match || match.frames === 0) {
				console.log(
					`A narrated sequence has no match or no frames assigned (check audio file key spelling?) narrationAudioKey: ${
						narrationAudioKey ?? 'empty'
					}`
				);
				return 0;
			}
			return match.frames;
		},
		[narrationFrames]
	);

	// Put it all together.
	return (
		<>
			<BackgroundAudio />
			<Series>
				{narrationFrames.length > 0 &&
					narratedSequence.map((sequenceItem) => {
						// Render a non-narrated sequence
						if (!sequenceItem.narrationAudioKey && sequenceItem.duration) {
							return (
								<Series.Sequence durationInFrames={sequenceItem.duration}>
									{sequenceItem.content}
								</Series.Sequence>
							);
						}

						// Render narrated sequence
						if (sequenceItem.narrationAudioKey) {
							const matchingFrames = getMatchingFrames(
								sequenceItem.narrationAudioKey
							);
							return (
								<Series.Sequence
									durationInFrames={matchingFrames + narrationFramePadding * 2}
								>
									<NarrationSequence
										audioFile={`audio/narration/${sequenceItem.narrationAudioKey}.mp3`}
										delay={narrationFramePadding}
									/>
									{sequenceItem.content}
								</Series.Sequence>
							);
						}

						// Render error because sequence was not narrated nor duration manually specified.
						return (
							<Series.Sequence durationInFrames={300}>
								<VideoError>
									There was an error showing the video sequence item. A
									sequenceItem.narrationAudioKey or sequenceItem.duration need
									to be specified.
								</VideoError>
							</Series.Sequence>
						);
					})}
			</Series>
		</>
	);
};
