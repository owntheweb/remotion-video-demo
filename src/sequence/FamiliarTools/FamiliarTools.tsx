'use strict';
import React from 'react';
import {AbsoluteFill, Img, interpolate, useCurrentFrame} from 'remotion';
import TypeScript from './vscodeMaterialIconTheme/typescript.svg';
import JavaScript from './vscodeMaterialIconTheme/javascript.svg';
import HtmlIcon from './vscodeMaterialIconTheme/html.svg';
import CssIcon from './vscodeMaterialIconTheme/css.svg';
import ThreeD from './vscodeMaterialIconTheme/3d.svg';
import ReactIcon from './vscodeMaterialIconTheme/react.svg';

export const FamiliarTools: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (curFrame: number, startFrame: number, endFrame: number) => {
		return interpolate(curFrame, [startFrame, endFrame], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
	};

	// 60 frame transition, with 10 second gap
	const fadeTimings = [...new Array(6)].map((_, i) =>
		fadeIn(frame, i * 60 + 10, i * 60 + 10 + 60)
	);

	const imgSources = [
		ReactIcon,
		JavaScript,
		TypeScript,
		HtmlIcon,
		CssIcon,
		ThreeD,
	];

	return (
		<AbsoluteFill className="bg-slate-900 text-white text-7xl p-24">
			<div className="grid gap-6 grid-cols-3 grid-rows-2 h-full">
				{imgSources.map((imgSrc, index) => (
					<Img
						src={imgSrc}
						alt="React"
						className="h-full m-auto"
						style={{opacity: fadeTimings[index]}}
					/>
				))}
			</div>
		</AbsoluteFill>
	);
};
