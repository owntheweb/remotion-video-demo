import {interpolate} from 'remotion';
('use strict');
import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';

export const ThankYou: React.FC = () => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [20, 50], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill className="bg-black">
			<AbsoluteFill className="bg-slate-900 text-white text-7xl p-24">
				<Img
					src={staticFile('images/dusk-photoshop-generative-fill.jpg')}
					alt="mountain landscape at dusk"
					className="absolute top-0 left-0 w-full h-full"
				/>

				<div
					style={{opacity}}
					className="text-[#C8F3FF] text-9xl text-center absolute top-48 left-0 w-full"
				>
					Thank You! 😍
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
