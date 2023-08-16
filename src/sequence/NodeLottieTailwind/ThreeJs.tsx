import {useRef} from 'react';
import {ThreeCanvas} from '@remotion/three';
import {useLayoutEffect, useState} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

const ThreeJs: React.FC = () => {
	const frame = useCurrentFrame();

	const ref = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState(1);
	const [height, setHeight] = useState(1);

	useLayoutEffect(() => {
		setWidth(ref.current?.offsetWidth ?? 1);
		setHeight(ref.current?.offsetHeight ?? 1);
	}, []);

	return (
		<div ref={ref} className="w-full h-full bg-[#23435c]">
			{/* Thanks: https://www.remotion.dev/docs/three-canvas */}
			<ThreeCanvas
				orthographic={false}
				width={width}
				height={height}
				camera={{fov: 75, position: [0, 0, 470]}}
				style={{opacity: 0.85}} // Blending in the colors a bit
			>
				<ambientLight intensity={1.15} />
				<pointLight args={[undefined, 2.0]} position={[200, 200, 0]} />
				<mesh
					position={[0, 0, 200]}
					rotation={[
						frame * 0.06 * 0.5,
						frame * 0.07 * 0.5,
						frame * 0.08 * 0.5,
					]}
					scale={interpolate(Math.sin(frame / 10), [-1, 1], [0.8, 1.2])}
				>
					<boxGeometry args={[100, 100, 100]} />
					<meshStandardMaterial
						color={[
							Math.sin(frame * 0.12) * 0.5 + 1.0,
							Math.cos(frame * 0.11) * 0.5 + 1.0,
							Math.sin(frame * 0.08) * 0.5 + 1.0,
						]}
					/>
				</mesh>
			</ThreeCanvas>
		</div>
	);
};

export default ThreeJs;
