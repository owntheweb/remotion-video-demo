import {ReactElement, useEffect, useLayoutEffect, useRef} from 'react';
('use strict');
import React, {useCallback, useState} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import ThreeJs from './ThreeJs';

export const ThreeLottieTailwind: React.FC = () => {
	const frame = useCurrentFrame();

	/*
	Const scale = interpolate(frame, [0, 300], [1, 1.2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.ease),
	});

	const blackCoverOpacity = interpolate(frame, [0, 30], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.ease),
	});

	const textBoxY = interpolate(
		frame,
		[30, 60, 180, 199, 200, 220],
		[50, 0, 0, 50, 50, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.ease),
		}
	);

	const textBoxOpacity = interpolate(
		frame,
		[30, 60, 180, 199, 200, 220],
		[0, 1, 1, 0, 0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.ease),
		}
	);
	*/

	return (
		<AbsoluteFill className="bg-slate-900 text-white p-24">
			<div className="grid gap-16 grid grid-cols-3 grid-rows-1 h-full">
				<div className="border-[#61DAFB] border-4 rounded h-full">
					<ThreeJs />
				</div>
				<div className="border-[#61DAFB] border-4 rounded h-full">Hello</div>
				<div className="border-[#61DAFB] border-4 rounded h-full">Hello</div>
			</div>
		</AbsoluteFill>
	);
};
