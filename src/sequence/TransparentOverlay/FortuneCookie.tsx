import React, {useState, useEffect} from 'react';
import {Img, staticFile, useCurrentFrame} from 'remotion';

interface Props {
	fortune?: string;
	style?: object;
}

const FortuneCookie: React.FC<Props> = ({
	fortune = 'Your left arm will NOT be amputated.',
	style = {},
}) => {
	const [text, setText] = useState('');
	const frame = useCurrentFrame();

	// TODO: Hmm... This will run every frame. I think that's ok at this tree level and purpose, yet worth a second pair of eyes.
	useEffect(() => {
		const normalizedFrame = Math.floor(frame) - 30;
		if (normalizedFrame >= 0 && normalizedFrame < fortune.length) {
			setText((prevText) => prevText + fortune[normalizedFrame]);
		}
	}, [frame, fortune]);

	return (
		<div style={style}>
			<div className="flex items-center p-6 pr-24 absolute top-[290px] left-[320px]">
				{text && (
					<div className="p-12 bg-white rounded shadow-lg text-3xl opacity-80 font-serif text-red-600">
						{text}
					</div>
				)}
			</div>
			<Img
				src={staticFile('images/fortune-cookie-dall-e.png')}
				alt="fortune cookie"
				className="absolute top-24 left-24 w-96"
			/>
		</div>
	);
};

export default FortuneCookie;
