import {Audio, Sequence} from 'remotion';
import {
	AbsoluteFill,
	Series,
	staticFile,
	useVideoConfig,
	Video,
} from 'remotion';
import {BackgroundAudio} from './BackgroundAudio';
import {useEffect, useState} from 'react';
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import {Weather} from './sequence/Weather/Weather';
import {ReactAndRemotion} from './sequence/ReactAndRemotion/ReactAndRemotion';
import {FamiliarTools} from './sequence/FamiliarTools/FamiliarTools';
import {TitleScreen} from './sequence/TitleScreen/TitleScreen';

export interface NarrationFrames {
	[key: string]: number;
}

export const MyComposition: React.FC = () => {
	const {fps} = useVideoConfig();
	const [narrationFrames, setNarrationFrames] = useState<NarrationFrames>({});

	const narrationFramePadding = 17;

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
				'SubBlock_This-video-was-designed-and-re': await getFrames(
					'audio/narration/SubBlock_This-video-was-designed-and-re.mp3'
				),
				'SubBlock_Remotion-gives-web-developers': await getFrames(
					'audio/narration/SubBlock_Remotion-gives-web-developers.mp3'
				),
				'SubBlock_Reusable-components-can-be-cre': await getFrames(
					'audio/narration/SubBlock_Reusable-components-can-be-cre.mp3'
				),
				'SubBlock_In-addition-to-being-able-to-c': await getFrames(
					'audio/narration/SubBlock_In-addition-to-being-able-to-c.mp3'
				),
				'SubBlock_For-example-a-current-weather': await getFrames(
					'audio/narration/SubBlock_For-example-a-current-weather.mp3'
				),
				'SubBlock_It-could-be-helpful-for-a-larg': await getFrames(
					'audio/narration/SubBlock_It-could-be-helpful-for-a-larg.mp3'
				),
				'SubBlock_Live-financial-data-can-be-acc': await getFrames(
					'audio/narration/SubBlock_Live-financial-data-can-be-acc.mp3'
				),
				'SubBlock_It-looks-like-the-Dow-Jones-up': await getFrames(
					'audio/narration/SubBlock_It-looks-like-the-Dow-Jones-up.mp3'
				),
				'SubBlock_It-looks-like-the-Dow-Jones-down': await getFrames(
					'audio/narration/SubBlock_It-looks-like-the-Dow-Jones-down.mp3'
				),
				'SubBlock_Using-React-to-create-videos-a': await getFrames(
					'audio/narration/SubBlock_Using-React-to-create-videos-a.mp3'
				),
				'SubBlock_Remotion-can-also-generate-tra': await getFrames(
					'audio/narration/SubBlock_Remotion-can-also-generate-tra.mp3'
				),
				'SubBlock_The-code-used-to-generate-this': await getFrames(
					'audio/narration/SubBlock_The-code-used-to-generate-this.mp3'
				),
				'SubBlock_Also-be-sure-to-check-out-Rem': await getFrames(
					'audio/narration/SubBlock_Also-be-sure-to-check-out-Rem.mp3'
				),
				'SubBlock_Hey-did-you-like-this-video': await getFrames(
					'audio/narration/SubBlock_Hey-did-you-like-this-video.mp3'
				),
				'SubBlock_Thank-you-for-watching-and-hav': await getFrames(
					'audio/narration/SubBlock_Thank-you-for-watching-and-hav.mp3'
				),
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
					<TitleScreen />
				</Series.Sequence>

				{narrationFrames['SubBlock_This-video-was-designed-and-re'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_This-video-was-designed-and-re'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_This-video-was-designed-and-re.mp3'
								)}
							/>
						</Sequence>
						<ReactAndRemotion />
					</Series.Sequence>
				)}

				<Series.Sequence durationInFrames={240}>
					<AbsoluteFill>
						<Video src={staticFile('video/why-use-react.mp4')} />
					</AbsoluteFill>
				</Series.Sequence>

				{narrationFrames['SubBlock_Remotion-gives-web-developers'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_Remotion-gives-web-developers'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_Remotion-gives-web-developers.mp3'
								)}
							/>
						</Sequence>
						<FamiliarTools />
					</Series.Sequence>
				)}

				<Series.Sequence durationInFrames={240}>
					<AbsoluteFill>
						<Video src={staticFile('video/why-not-other-video-editors.mp4')} />
					</AbsoluteFill>
				</Series.Sequence>

				{narrationFrames['SubBlock_In-addition-to-being-able-to-c'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_In-addition-to-being-able-to-c'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_In-addition-to-being-able-to-c.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							In addition to being able to create animated video graphics with
							React, Remotion offers the unique advantage of pulling in dynamic
							data quickly and displaying it in a reusable format.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_For-example-a-current-weather'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_For-example-a-current-weather'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_For-example-a-current-weather.mp3'
								)}
							/>
						</Sequence>
						<Weather />
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_It-could-be-helpful-for-a-larg'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_It-could-be-helpful-for-a-larg'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_It-could-be-helpful-for-a-larg.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							It could be helpful for a large set of training modules where
							there's a consistent format that could be automated.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_Live-financial-data-can-be-acc'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_Live-financial-data-can-be-acc'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_Live-financial-data-can-be-acc.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Live financial data can be accessed and showcased in a flash.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_It-looks-like-the-Dow-Jones-up'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_It-looks-like-the-Dow-Jones-up'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_It-looks-like-the-Dow-Jones-up.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							It looks like the Dow Jones Industrial Average is up at the time
							this video creation was triggered.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_Using-React-to-create-videos-a'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_Using-React-to-create-videos-a'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_Using-React-to-create-videos-a.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Using React to create videos also enables access to 3D creation
							tools such as Three.js, Adobe After Effects animations using
							Lottie, CSS styling made easy via TailwindCSS and more.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_Remotion-can-also-generate-tra'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_Remotion-can-also-generate-tra'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_Remotion-can-also-generate-tra.mp3'
								)}
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

				{narrationFrames['SubBlock_The-code-used-to-generate-this'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_The-code-used-to-generate-this'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_The-code-used-to-generate-this.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							The code used to generate this video is available via the
							following link, also available in the video description below. It
							will give a few good ideas to get started and includes examples of
							how to access and display data in a video.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_Also-be-sure-to-check-out-Rem'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_Also-be-sure-to-check-out-Rem'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_Also-be-sure-to-check-out-Rem.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Also, be sure to check out Remotion's excellent documentation at:
							https://remotion.dev
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_Hey-did-you-like-this-video'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_Hey-did-you-like-this-video'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_Hey-did-you-like-this-video.mp3'
								)}
							/>
						</Sequence>
						<AbsoluteFill className="bg-black text-white text-7xl p-24">
							Hey, did you like this video? Be sure to leave a comment,
							subscribe, like and tell your friends that this video rocks your
							world.
						</AbsoluteFill>
					</Series.Sequence>
				)}

				{narrationFrames['SubBlock_Thank-you-for-watching-and-hav'] && (
					<Series.Sequence
						durationInFrames={
							narrationFrames['SubBlock_Thank-you-for-watching-and-hav'] +
							narrationFramePadding * 2
						}
					>
						<Sequence from={narrationFramePadding}>
							<Audio
								src={staticFile(
									'audio/narration/SubBlock_Thank-you-for-watching-and-hav.mp3'
								)}
							/>
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
