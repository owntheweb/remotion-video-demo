import {Audio, Sequence} from 'remotion';
import {
	AbsoluteFill,
	Series,
	staticFile,
	useVideoConfig,
	Video,
} from 'remotion';
import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {BackgroundAudio} from './BackgroundAudio';
import {useEffect, useState} from 'react';
import {getAudioDurationInSeconds} from '@remotion/media-utils';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export interface NarrationFrames {
	[key: string]: number;
}

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	const {fps} = useVideoConfig();
	const [narrationFrames, setNarrationFrames] = useState<NarrationFrames>({});

	const narrationFramePadding = 20;

	useEffect(() => {
		/**
		 * Calculate sequence lengths based on narration audio length with any optional padding around that. The
		 * original goal was to do this in individual NarratedSeriesSequence components. The <Series.Sequence />
		 * component was extended as <NarratedSeriesSequence /> to automatically fit the sequence durationInFrames
		 * to the narration audio length dynamically. However, the Series library does an equality check, and
		 * doesn't like to see NarratedSeriesSequence returning Series.Sequence. useMemo() could serve as a
		 * work-around for the type, however additional Series validation checks make this less flexible. I've
		 * posted question on stackoverflow for discussion with this solution in place in the meantime:
		 * https://stackoverflow.com/questions/76872538/in-react-and-typescript-why-is-my-returned-series-sequence-erroring-as-type/76872878
		 */
		const getFrames = async (file: string) => {
			const seconds = await getAudioDurationInSeconds(staticFile(file));
			return seconds * fps;
		};

		const getNarrationFrames = async () => {
			const frames: NarrationFrames = {
				'00-this-video-was': await getFrames(
					'audio/narration/00-this-video-was.mp3'
				),
				'01-remotion-gives-web-developers': await getFrames(
					'audio/narration/01-remotion-gives-web-developers.mp3'
				),
				'02-reusable-components': await getFrames(
					'audio/narration/02-reusable-components.mp3'
				),
				'03-in-addition-to': await getFrames(
					'audio/narration/03-in-addition-to.mp3'
				),
				'04-for-example': await getFrames('audio/narration/04-for-example.mp3'),
				'05-it-could-be-helpful': await getFrames(
					'audio/narration/05-it-could-be-helpful.mp3'
				),
				'06-live-financial-data': await getFrames(
					'audio/narration/06-live-financial-data.mp3'
				),
				'07a-up': await getFrames('audio/narration/07a-up.mp3'),
				'07b-down': await getFrames('audio/narration/07b-down.mp3'),
				'08-using-react-to': await getFrames(
					'audio/narration/08-using-react-to.mp3'
				),
				'09-remotion-can-also': await getFrames(
					'audio/narration/09-remotion-can-also.mp3'
				),
				'10-the-code-used': await getFrames(
					'audio/narration/10-the-code-used.mp3'
				),
				'11-also-be-sure': await getFrames(
					'audio/narration/11-also-be-sure.mp3'
				),
				'13-if-you-would': await getFrames(
					'audio/narration/13-if-you-would.mp3'
				),
				'14-thank-you': await getFrames('audio/narration/14-thank-you.mp3'),
			};

			setNarrationFrames(frames);
		};

		getNarrationFrames();
	}, [fps]);

	return (
		<>
			<BackgroundAudio />
			<Series>
				<Series.Sequence durationInFrames={220}>
					<AbsoluteFill className="bg-gray-100 items-center justify-center">
						<div className="m-10" />
						<Logo logoColor={propThree} />
						<div className="m-3" />
						<Title titleText={propOne} titleColor={propTwo} />
						<Subtitle />
					</AbsoluteFill>
				</Series.Sequence>

				{narrationFrames['00-this-video-was'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['00-this-video-was'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile('audio/narration/00-this-video-was.mp3')}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							This video was designed and rendered using React and Remotion.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				<Series.Sequence durationInFrames={240}>
					<AbsoluteFill>
						<Video src={staticFile('video/why-use-react.mp4')} />
					</AbsoluteFill>
				</Series.Sequence>

				{narrationFrames['01-remotion-gives-web-developers'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['01-remotion-gives-web-developers'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/01-remotion-gives-web-developers.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Remotion gives web developers and designers a set of libraries to
							bring familiar tools into video projects, allowing for innovative
							creativity that traditional video production tools handle very
							differently.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['02-reusable-components'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['02-reusable-components'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile('audio/narration/02-reusable-components.mp3')}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Reusable components can be created and displayed using Remotion's
							canvas utilizing HTML, CSS, audio, and other videos, live data,
							and JavaScript-powered transitions.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				<Series.Sequence durationInFrames={240}>
					<AbsoluteFill>
						<Video src={staticFile('video/why-not-other-video-editors.mp4')} />
					</AbsoluteFill>
				</Series.Sequence>

				{narrationFrames['03-in-addition-to'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['03-in-addition-to'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile('audio/narration/03-in-addition-to.mp3')}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							In addition to being able to create great timed graphics with
							React, Remotion offers the unique advantage of pulling in dynamic
							data quickly and displaying it in a reusable format.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['04-for-example'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['04-for-example'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio src={staticFile('audio/narration/04-for-example.mp3')} />
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							For example, a current weather report can created with a data
							fetch and designed weather components.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['05-it-could-be-helpful'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['05-it-could-be-helpful'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile('audio/narration/05-it-could-be-helpful.mp3')}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							It could be helpful for a large set of training modules where
							there's a consistent format that could be automated.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['06-live-financial-data'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['06-live-financial-data'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile('audio/narration/06-live-financial-data.mp3')}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Live financial data can be accessed showcased in a flash.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['07a-up'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['07a-up'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio src={staticFile('audio/narration/07a-up.mp3')} />
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							It looks like the Dow Jones Industrial Average is up at the time
							this video creation was triggered.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['08-using-react-to'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['08-using-react-to'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile('audio/narration/08-using-react-to.mp3')}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Using React to create a videos also enables access to 3D creation
							tools such as Three.js, Adobe After Effects animations using
							Lottie, CSS styling made easy via TailwindCSS and more.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['09-remotion-can-also'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['09-remotion-can-also'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile('audio/narration/09-remotion-can-also.mp3')}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Remotion can also generate transparent overlays, perfect for
							adding dynamic content to professional video editing tools such as
							Adobe Premiere and After Effects.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				<Series.Sequence durationInFrames={180}>
					<AbsoluteFill>
						<Video src={staticFile('video/wonderful.mp4')} />
					</AbsoluteFill>
				</Series.Sequence>

				{narrationFrames['10-the-code-used'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['10-the-code-used'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio src={staticFile('audio/narration/10-the-code-used.mp3')} />
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							The code used to generate this video is available for learning
							purposes via the following link, also available in the video
							description below. It will give a few good ideas to get started
							and includes examples of how to access and display data in a
							video.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['11-also-be-sure'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['11-also-be-sure'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio src={staticFile('audio/narration/11-also-be-sure.mp3')} />
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Also, be sure to check out Remotion's excellent documentation at:
							https://remotion.dev
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['13-if-you-would'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['13-if-you-would'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio src={staticFile('audio/narration/13-if-you-would.mp3')} />
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							If you would be interested in a step-by-step tutorial on how to
							use React and Remotion, please leave a comment, subscribe, like
							and tell all your friends.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['14-thank-you'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['14-thank-you'] + narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio src={staticFile('audio/narration/14-thank-you.mp3')} />
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Thank you for watching and have a very, productive day.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				<Series.Sequence durationInFrames={240}>
					<AbsoluteFill>
						<Video src={staticFile('video/farewell.mp4')} />
					</AbsoluteFill>
				</Series.Sequence>
			</Series>
		</>
	);
};
