import {Lottie} from '@remotion/lottie';
import animationData from './lottieAnimation/animation_llhgxwxa.json';

const SubscribeAnimation: React.FC = () => {
	return (
		<div className="w-full h-full bg-slate-900">
			{/* Thanks: See lottieAnimation/README.md */}
			<Lottie
				animationData={animationData}
				className="w-full h-full absolute top-0 left-[-50px]"
			/>
		</div>
	);
};

export default SubscribeAnimation;
