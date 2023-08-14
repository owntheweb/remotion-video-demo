'use strict';
import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {ReactLogo} from '../TitleScreen/ReactLogo';
import {RemotionLogoTriangle} from './RemotionLogoTriangle';
import {FilmClip} from './FilmClip';
import {Cloud} from './Cloud';
import {Arrow} from './Arrow';

export const DynamicData: React.FC = () => {
	const frame = useCurrentFrame();

	const reactRemotionOpacity = interpolate(frame, [30, 60], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const fetchOpacity = interpolate(frame, [100, 130], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const fetchX = interpolate(frame, [100, 130], [-50, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const displayOpacity = interpolate(frame, [150, 180], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const displayX = interpolate(frame, [150, 180], [-50, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill className="bg-slate-900 text-white text-7xl p-24">
			<Cloud
				className="w-[3em] h-[3em] absolute top-[3.5em] left-[1.3em]"
				style={{opacity: fetchOpacity, transform: `translateX(${fetchX}px)`}}
			/>
			<div
				className="text-5xl absolute top-[7.5em] left-[3em]"
				style={{opacity: fetchOpacity, transform: `translateX(${fetchX}px)`}}
			>
				DATA
			</div>

			<Arrow
				className="w-16 h-16 absolute bottom-60 top-[4.6em] left-[4.5em]"
				style={{opacity: fetchOpacity, transform: `translateX(${fetchX}px)`}}
			/>

			<ReactLogo
				className="absolute top-[3.5em] left-[5.9em] w-[3em] h-[3em]"
				style={{opacity: reactRemotionOpacity}}
			/>

			<RemotionLogoTriangle
				color="#FFFFFF"
				size={200}
				className="absolute top-[5em] left-[10.6em]"
				style={{opacity: reactRemotionOpacity}}
			/>

			<Arrow
				className="w-16 h-16 absolute bottom-60 top-[4.6em] left-[12em]"
				style={{
					opacity: displayOpacity,
					transform: `translateX(${displayX}px)`,
				}}
			/>

			<FilmClip
				className="w-[3em] h-[3em] absolute top-[3.5em] right-[1.3em]"
				style={{
					opacity: displayOpacity,
					transform: `translateX(${displayX}px)`,
				}}
			/>
		</AbsoluteFill>
	);
};
