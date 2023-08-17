import {Lottie} from '@remotion/lottie';
import animationData from './lottieAnimationData.json';

const LottieAnimation: React.FC = () => {
	return (
		<div className="w-full h-full bg-[#23435c]">
			{/* Thanks: https://www.remotion.dev/docs/lottie/lottie */}
			<Lottie
				loop
				animationData={animationData}
				className="bg-red w-full h-full"
			/>
		</div>
	);
};

export default LottieAnimation;
