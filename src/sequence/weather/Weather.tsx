'use strict';
import React, {useCallback, useEffect, useState} from 'react';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	cancelRender,
	continueRender,
	delayRender,
} from 'remotion';
import {VideoError} from '../../VideoError';
import {OpenWeatherData, OpenWeatherUnits} from './OpenWeatherData';
import {WeatherIconSidebar} from './WeatherIconSidebar';
import {BlinkingDynamicData} from './BlinkingDynamicData';

export interface WeatherProps {
	lat?: number;
	lon?: number;
	locationName?: string;
	lang?: string; // Could become enum, see https://openweathermap.org/current#multi for options
	units?: OpenWeatherUnits;
}

export const Weather: React.FC<WeatherProps> = ({
	// TODO: I can see how these default could get annoying if only wanting to specify some props, consider refactor to handle empty values
	lat = 38.859055,
	lon = -104.813499,
	locationName = 'Colorado Springs',
	lang = 'en',
	units = OpenWeatherUnits.IMPERIAL,
}) => {
	const [handleDelayRender] = useState(() => delayRender()); // Render after data fetched
	const [errorMessage, setErrorMessage] = useState<string>();
	const [weatherData, setWeatherData] = useState<OpenWeatherData>();

	const frame = useCurrentFrame();

	// Weather data animated entrance transition
	const weatherDataOpacity = interpolate(frame, [80, 110], [0, 1.0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const weatherDataX = interpolate(frame, [80, 110], [50, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	const temperatureLabel = units === 'imperial' ? 'F' : 'C';
	const speedLabel = units === 'imperial' ? 'mph' : 'Km/h';
	const apiKey = process.env.REMOTION_OPENWEATHER_API_KEY;
	const minMaxTemp = weatherData
		? `${Math.round(weatherData.main.temp_max)} / ${Math.round(
				weatherData.main.temp_min
		  )} °${temperatureLabel}`
		: '';

	const fetchData = useCallback(async () => {
		if (!apiKey) {
			const error = new Error(`No API key`);
			setErrorMessage(error.message);
			cancelRender(error);
		}

		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`;
		const response = await fetch(url);
		if (!response.ok) {
			const error = new Error(`Weather API Error: ${response.body}`);
			setErrorMessage(error.message);
			cancelRender(error);
		}

		const data = await response.json();
		setWeatherData(data);
		continueRender(handleDelayRender);
	}, [apiKey, handleDelayRender, lang, lat, lon, units]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<AbsoluteFill className="bg-black text-white">
			{!apiKey && (
				<VideoError>REMOTION_OPENWEATHER_API_KEY missing in .env!</VideoError>
			)}

			{apiKey && errorMessage && <VideoError>{errorMessage}</VideoError>}

			{apiKey && !errorMessage && weatherData && (
				<div className="w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex">
					<WeatherIconSidebar weatherIconCode={weatherData.weather[0].icon} />

					<div
						className="grow p-24"
						style={{
							opacity: weatherDataOpacity,
							transform: `translateX(${weatherDataX}px)`,
						}}
					>
						<div className="text-7xl mb-4">{locationName}</div>

						<hr className="mt-8 mb-4" />

						{weatherData.main.temp && (
							<>
								<div className="text-9xl mb-4">
									{Math.round(weatherData.main.temp)} °{temperatureLabel}
								</div>
							</>
						)}
						<div className="text-4xl mb-4 opacity-75">{minMaxTemp}</div>
						<div className="text-4xl opacity-75 flex">
							{weatherData.weather[0].main}
						</div>

						<hr className="mt-8 mb-10" />

						<div className="text-4xl mb-4 opacity-75">
							Wind: {weatherData.wind.speed} {speedLabel}
						</div>
						<div className="text-4xl mb-4 opacity-75">
							Humidity: {weatherData.main.humidity}%
						</div>
					</div>

					<BlinkingDynamicData />
				</div>
			)}
		</AbsoluteFill>
	);
};
