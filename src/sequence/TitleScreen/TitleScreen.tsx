'use strict';
import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Title} from './Title';
import {ReactLogo} from './ReactLogo';

export const TitleScreen: React.FC = () => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [20, 80, 180, 220], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill className="bg-black">
			<AbsoluteFill
				className="bg-slate-900 text-white text-7xl p-24"
				style={{
					opacity,
				}}
			>
				<ReactLogo rotate startFrame={0} endFrame={220} degrees={100} />
				<Title
					titleText="Creating Videos With React"
					titleColor="#C8F3FF"
					className="mt-24"
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
