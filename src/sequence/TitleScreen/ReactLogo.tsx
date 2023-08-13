'use strict';
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export interface ReactLogoProps {
	rotate?: boolean;
	startFrame?: number;
	endFrame?: number;
	degrees?: number;
}

export const ReactLogo: React.FC<ReactLogoProps> = ({
	rotate = false,
	startFrame = 0,
	endFrame = 10,
	degrees = 10,
}) => {
	const frame = useCurrentFrame();

	const rotation = rotate
		? interpolate(frame, [startFrame, endFrame], [0, degrees], {
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
		  })
		: 0;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-11.5 -10.23174 23 20.46348"
			style={{transform: `rotate(${rotation}deg)`}}
		>
			<title>React Logo</title>
			<circle cx="0" cy="0" r="2.05" fill="#61dafb" />
			<g stroke="#61dafb" stroke-width="1" fill="none">
				<ellipse rx="11" ry="4.2" />
				<ellipse rx="11" ry="4.2" transform="rotate(60)" />
				<ellipse rx="11" ry="4.2" transform="rotate(120)" />
			</g>
		</svg>
	);
};
