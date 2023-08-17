import {AbsoluteFill, useCurrentFrame} from 'remotion';
import ThreeJs from './ThreeJs';
import LottieAnimation from './LottieAnimation';
import TailwindCssVisual from './TailwindCSSVisual';

export const ThreeLottieTailwind: React.FC = () => {
	const frame = useCurrentFrame();

	const threeJsBorder =
		frame >= 119 && frame < 220
			? 'border-white border-8'
			: 'border-[#61DAFB] border-4';

	const lottieBorder =
		frame >= 221 && frame < 320
			? 'border-white border-8'
			: 'border-[#61DAFB] border-4';

	const tailwindBorder =
		frame >= 321 && frame < 470
			? 'border-white border-8'
			: 'border-[#61DAFB] border-4';

	return (
		<AbsoluteFill className="bg-slate-900 text-white p-24">
			<div className="grid gap-16 grid grid-cols-3 grid-rows-1 h-full">
				<div className={`${threeJsBorder} rounded h-full`}>
					<ThreeJs />
				</div>
				<div className={`${lottieBorder} rounded h-full`}>
					<LottieAnimation />
				</div>
				<div className={`${tailwindBorder} rounded h-full`}>
					<TailwindCssVisual />
				</div>
			</div>
		</AbsoluteFill>
	);
};
