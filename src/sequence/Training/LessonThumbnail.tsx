'use strict';
import React from 'react';
import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export interface LessonThumbnailProps {
	imagePath: string;
	children: JSX.Element;
	fromFrame?: number;
}

export const LessonThumbnail: React.FC<LessonThumbnailProps> = ({
	imagePath,
	children,
	fromFrame = 0,
}) => {
	const frame = useCurrentFrame();

	const allOpacity = interpolate(
		frame,
		[fromFrame + 0, fromFrame + 30],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const picOpacity = interpolate(
		frame,
		[fromFrame + 20, fromFrame + 40],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const picX = interpolate(frame, [fromFrame + 20, fromFrame + 40], [50, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const textOpacity = interpolate(
		frame,
		[fromFrame + 40, fromFrame + 70],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			className="border-[#61DAFB] border-4 rounded p-4 flex inline"
			style={{opacity: allOpacity, position: 'inherit'}}
		>
			<div className="shrink-0 pr-4">
				<Img
					src={staticFile(imagePath)}
					alt="teacher teaching class as recording"
					className="w-[2.7em] pb-4"
					style={{opacity: picOpacity, transform: `translateX(${picX}px)`}}
				/>
			</div>
			<div className="text-xs" style={{opacity: textOpacity}}>
				{children}
			</div>
		</div>
	);
};
