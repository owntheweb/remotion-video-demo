import {useEffect} from 'react';
('use strict');
import React, {useCallback, useState} from 'react';
import {
	AbsoluteFill,
	Easing,
	Img,
	cancelRender,
	continueRender,
	delayRender,
	interpolate,
	useCurrentFrame,
} from 'remotion';
import {VideoError} from '../../VideoError';

export interface NasaPicOfTheDayData {
	copyright: string;
	date: string;
	explanation: string;
	hdurl: string;
	media_type: string;
	service_version: string;
	title: string;
	url: string;
}

export const NasaPicOfTheDay: React.FC = () => {
	const [handleDelayRender] = useState(() => delayRender()); // Render after data fetched
	const [errorMessage, setErrorMessage] = useState<string>();
	const [nasaData, setNasaData] = useState<NasaPicOfTheDayData>();
	const frame = useCurrentFrame();

	const apiKey = process.env.REMOTION_NASA_API_KEY;

	const fetchData = useCallback(async () => {
		if (!apiKey) {
			const error = new Error(`No API key`);
			setErrorMessage(error.message);
			cancelRender(error);
		}

		const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
		const response = await fetch(url);
		if (!response.ok) {
			const error = new Error(`Weather API Error: ${response.body}`);
			setErrorMessage(error.message);
			cancelRender(error);
		}

		const data: NasaPicOfTheDayData = await response.json();
		setNasaData(data);
		continueRender(handleDelayRender);
	}, [apiKey, handleDelayRender]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const scale = interpolate(frame, [0, 300], [1, 1.2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.ease),
	});

	const blackCoverOpacity = interpolate(frame, [0, 30], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.ease),
	});

	const textBoxY = interpolate(
		frame,
		[30, 60, 180, 199, 200, 220],
		[50, 0, 0, 50, 50, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.ease),
		}
	);

	const textBoxOpacity = interpolate(
		frame,
		[30, 60, 180, 199, 200, 220],
		[0, 1, 1, 0, 0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.ease),
		}
	);

	return (
		<AbsoluteFill className="bg-slate-900 text-white p-24">
			{!apiKey && (
				<VideoError>REMOTION_OPENWEATHER_API_KEY missing in .env!</VideoError>
			)}

			{apiKey && errorMessage && <VideoError>{errorMessage}</VideoError>}

			{nasaData?.hdurl && (
				<>
					<Img
						src={nasaData?.hdurl ?? ''}
						className="absolute top-0 left-0 h-full w-full cover"
						style={{transform: `scale(${scale})`}}
					/>
					<div
						className="absolute bottom-0 left-0 p-6 text-3xl w-full"
						style={{
							background:
								'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.3) 100%)',
							transform: `translateY(${textBoxY}px)`,
							opacity: textBoxOpacity,
						}}
					>
						{frame <= 200 && (
							<span className="drop-shadow-md">{nasaData?.title}</span>
						)}
						{frame > 200 && nasaData?.copyright && (
							<span className="drop-shadow-md">
								&copy; {nasaData?.copyright}
							</span>
						)}
					</div>
					<div
						className="w-full h-full absolute left-0 top-0 bg-black"
						style={{opacity: blackCoverOpacity}}
					/>
				</>
			)}
		</AbsoluteFill>
	);
};
