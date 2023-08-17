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
	const frame = useCurrentFrame();

	const normalizedFrame = Math.floor(frame) - 30;
	let activeFortune = '';
	if (normalizedFrame >= 0) {
		activeFortune = fortune.substring(0, normalizedFrame);
	}

	return (
		<div style={style}>
			<div className="flex items-center p-6 pr-24 absolute top-[290px] left-[320px]">
				{activeFortune && (
					<div className="p-12 bg-white rounded shadow-lg text-3xl opacity-80 font-serif text-red-600">
						{activeFortune}
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
