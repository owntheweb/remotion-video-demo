'use strict';
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export interface ReactLogoProps {
	rotate?: boolean;
	startFrame?: number;
	endFrame?: number;
	degrees?: number;
	className?: string;
	style?: object;
}

export const ReactLogo: React.FC<ReactLogoProps> = ({
	rotate = false,
	startFrame = 0,
	endFrame = 10,
	degrees = 10,
	className,
	style = {},
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
			className={className}
			style={{transform: `rotate(${rotation}deg)`, ...style}}
		>
			<title>React Logo</title>
			<circle cx="0" cy="0" r="2.05" fill="#61dafb" />
			<g stroke="#61dafb" strokeWidth="1" fill="none">
				<ellipse rx="11" ry="4.2" />
				<ellipse rx="11" ry="4.2" transform="rotate(60)" />
				<ellipse rx="11" ry="4.2" transform="rotate(120)" />
			</g>
		</svg>
	);
};
