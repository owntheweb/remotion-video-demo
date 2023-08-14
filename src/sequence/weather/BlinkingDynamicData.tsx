'use strict';
import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Arrow} from '../DynamicData/Arrow';

export const BlinkingDynamicData: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Blink after a pause
	const show =
		frame > 120 &&
		frame < 175 &&
		Math.round(Math.round(((frame + 1) / fps) * 200) * 0.01) % 2;

	if (!show) {
		return null;
	}

	return (
		<>
			<div className="absolute bottom-20 left-20 text-5xl">
				🤩 Dynamic data!
			</div>

			<Arrow
				className="w-32 h-32 absolute bottom-60 left-[13em] bottom-[9em]"
				style={{transform: 'rotate(270deg)'}}
			/>

			<Arrow
				className="w-32 h-32 absolute bottom-60 left-[28em] bottom-[8em]"
				style={{transform: 'rotate(320deg)'}}
			/>
		</>
	);
};
