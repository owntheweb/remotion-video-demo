import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import Checkerboard from './CheckerBoard';
import FortuneCookie from './FortuneCookie';

export const TransparentOverlay: React.FC = () => {
	const frame = useCurrentFrame();

	const cookieOpacity = interpolate(frame, [30, 60, 290, 340], [0, 1, 1, 0]);
	const cookieY = interpolate(frame, [30, 90, 290, 340], [200, 0, 0, -200], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.ease),
	});

	return (
		<AbsoluteFill className="bg-slate-900 text-white">
			<Checkerboard />
			<FortuneCookie
				style={{opacity: cookieOpacity, transform: `translateY(${cookieY}px)`}}
				fortune="Your financial outlook is well......... too important to be dictated by the whims of a small slip of paper tucked inside a cookie. "
			/>
		</AbsoluteFill>
	);
};
