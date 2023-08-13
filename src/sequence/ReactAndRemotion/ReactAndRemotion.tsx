'use strict';
import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedLogo} from './remotionLogo/AnimatedLogo';

export const ReactAndRemotion: React.FC = () => {
	const frame = useCurrentFrame();

	/*
	// Sidebar animation
	const iconBarOpacity = interpolate(frame, [20, 40], [0, 0.25], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const iconBarX = interpolate(frame, [20, 40], [-50, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	*/

	return (
		<AbsoluteFill className="bg-slate-900 text-white text-7xl p-24">
			<AnimatedLogo theme="dark" />
		</AbsoluteFill>
	);
};
