'use strict';
import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';

export const BlinkingDynamicData: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Blink after a pause
	const show =
		frame > 120 && Math.round(Math.round(((frame + 1) / fps) * 200) * 0.01) % 2;

	if (!show) {
		return null;
	}

	return (
		<>
			<div className="absolute bottom-20 left-20 text-5xl">
				🤩 Dynamic data!
			</div>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-32 h-32 absolute bottom-60 left-[13em] bottom-[9em]"
				style={{transform: 'rotate(270deg)'}}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-32 h-32 absolute bottom-60 left-[28em] bottom-[8em]"
				style={{transform: 'rotate(320deg)'}}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>
		</>
	);
};
