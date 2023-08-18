('use strict');
import React from 'react';
import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const EnjoyThisVideo: React.FC = () => {
	const frame = useCurrentFrame();

	const scale = interpolate(frame, [0, 300], [1, 1.2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.ease),
	});

	return (
		<AbsoluteFill className="bg-slate-900 text-white">
			<Img
				src={staticFile(
					'images/jaikishan-patel-T9H8anqa458-unsplash-cropped.jpg'
				)}
				alt="Man's mind is blown by this video."
				className="w-full h-full"
			/>
		</AbsoluteFill>
	);
};
