import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

interface Props {
	fortune?: string;
	style?: object;
}

const FortuneCookie: React.FC<Props> = ({
	fortune = 'Your left arm will NOT be amputated.',
	style = {},
}) => {
	const frame = useCurrentFrame();

	const normalizedFrame = Math.floor(frame) - 90;
	let activeFortune = '';
	if (normalizedFrame >= 0) {
		activeFortune = fortune.substring(0, normalizedFrame);
	}

	const rotateDeg = interpolate(frame, [30, 90], [20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.ease),
	});

	return (
		<div className="absolute top-0 left-0 w-full h-full" style={style}>
			<div className="flex items-center p-6 pr-24 absolute top-[340px] left-[300px]">
				{activeFortune && (
					<div className="p-12 bg-white rounded shadow-lg text-3xl font-serif text-red-600">
						{activeFortune}
					</div>
				)}
			</div>
			<Img
				src={staticFile('images/fortune-cookie-dall-e.png')}
				alt="fortune cookie"
				className="absolute top-[150px] left-24 w-96"
				style={{transform: `rotate(${rotateDeg}deg)`}}
			/>
		</div>
	);
};

export default FortuneCookie;
