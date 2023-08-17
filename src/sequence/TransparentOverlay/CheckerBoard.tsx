// Brought in GPT-4 for this quick svg generator with tweaks.
import React from 'react';
import {useVideoConfig} from 'remotion';

const Checkerboard: React.FC = () => {
	const {width, height} = useVideoConfig();

	const rows = 18;
	const cols = 32;
	const squareSize = 40;

	const squares = [];

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			const isLight = (row + col) % 2 === 0;
			const color = isLight ? '#111729' : '#000';
			squares.push(
				<rect
					key={`${row}-${col}`}
					x={col * squareSize}
					y={row * squareSize}
					width={width}
					height={height}
					fill={color}
				/>
			);
		}
	}

	return (
		<svg width={width} height={height}>
			{squares}
		</svg>
	);
};

export default Checkerboard;
