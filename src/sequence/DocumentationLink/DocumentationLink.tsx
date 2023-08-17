'use strict';
import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedLogo} from '../ReactAndRemotion/remotionLogo/AnimatedLogo';

export const DocumentationLink: React.FC = () => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [60, 90], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill className="bg-slate-900 text-white text-7xl p-24">
			<AnimatedLogo theme="dark" />
			<div
				className="absolute bottom-[100px] left-12 text-center w-full text-5xl"
				style={{opacity}}
			>
				https://remotion.dev
			</div>
		</AbsoluteFill>
	);
};
