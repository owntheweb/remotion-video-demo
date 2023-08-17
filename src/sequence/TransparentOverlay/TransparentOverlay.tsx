import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import Checkerboard from './CheckerBoard';
import FortuneCookie from './FortuneCookie';

export const TransparentOverlay: React.FC = () => {
	const frame = useCurrentFrame();

	const cookieOpacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<AbsoluteFill className="bg-slate-900 text-white">
			<Checkerboard />
			<FortuneCookie
				style={{opacity: cookieOpacity}}
				fortune="Your financial outlook is well......... too important to be dictated by the whims of a small slip of paper tucked inside a cookie. Remember: your financial future should be built on solid research, careful planning, and informed decisions, not the cryptic words of a fortune cookie."
			/>
		</AbsoluteFill>
	);
};
