('use strict');
import React from 'react';
import {
	AbsoluteFill,
	Img,
	Sequence,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import SubscribeAnimation from './SubscribeAnimation';

export const EnjoyThisVideo: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill className="bg-slate-900 text-white">
			<Sequence durationInFrames={80}>
				<Img
					src={staticFile(
						'images/jaikishan-patel-T9H8anqa458-unsplash-cropped.jpg'
					)}
					alt="Man's mind is blown by this video."
					className="w-full h-full"
				/>
				{frame >= 55 && (
					<div className="text-5xl absolute top-[230px] left-[800px]">
						[mind explodes]
					</div>
				)}
			</Sequence>
			<Sequence durationInFrames={80} from={81}>
				<SubscribeAnimation />
			</Sequence>
			<Sequence durationInFrames={200} from={161}>
				<Img
					src={staticFile('images/bruce-mars-xj8qrWvuOEs-unsplash-cropped.jpg')}
					alt="This video rocks my world."
					className="w-full h-full"
				/>
				<Sequence from={40}>
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1006.16 184.51"
						className="absolute top-[150px] left-12 w-1/2"
					>
						<path
							className="st2"
							style={{fill: '#FFFFFF', stroke: '#5E6368', strokeWidth: '2px'}}
							d="M927,106.76V41.24C927,19.02,908.98,1,886.76,1H41.24C19.02,1,1,19.02,1,41.24v65.52
	C1,128.98,19.02,147,41.24,147h845.52l115.86,35.38L927,106.76z"
						/>
					</svg>

					<div className="text-5xl absolute top-[170px] left-[70px] text-black">
						This video rocks my world.
					</div>
				</Sequence>
			</Sequence>
		</AbsoluteFill>
	);
};
