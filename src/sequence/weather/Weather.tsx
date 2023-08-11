import React from 'react';
// Import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import ReactWeather, {useOpenWeather} from 'react-open-weather';
import {AbsoluteFill} from 'remotion';
import {VideoError} from '../../VideoError';

export interface WeatherProps {
	apiKey?: string;
	lat?: string;
	lon?: string;
	lang?: string;
	unit?: string;
}

export const Weather: React.FC<WeatherProps> = ({
	apiKey = undefined,
	lat = '48.137154',
	lon = '11.576124',
	lang = 'en',
	unit = 'imperial',
}) => {
	// Const frame = useCurrentFrame();
	// const {height, fps} = useVideoConfig();

	const {data, isLoading, errorMessage} = useOpenWeather({
		key: apiKey,
		lat,
		lon,
		lang,
		unit,
	});

	/*
  Const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);

	const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;
	const wave2 = Math.cos((frame - 5) / 15) * 10 + entranceOffset;
  */

	return (
		<AbsoluteFill className="bg-black text-white text-7xl p-24">
			{!apiKey && (
				<VideoError>REMOTION_OPENWEATHER_API_KEY missing in .env!</VideoError>
			)}

			{apiKey && errorMessage && <VideoError>{errorMessage}</VideoError>}

			{apiKey && !errorMessage && data && (
				<ReactWeather
					showForecast
					isLoading={isLoading}
					errorMessage={errorMessage}
					data={data}
					lang="en"
					locationLabel="Munich"
					unitsLabels={{temperature: 'C', windSpeed: 'Km/h'}}
				/>
			)}
		</AbsoluteFill>
	);
};
