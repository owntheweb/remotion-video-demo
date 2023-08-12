'use strict';
import React, {useEffect, useState} from 'react';
import {AbsoluteFill} from 'remotion';
import {VideoError} from '../../VideoError';
import {WeatherIcon} from './WeatherIcon';
import {OpenWeatherData, OpenWeatherUnits} from './OpenWeatherData';

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
	const [errorMessage, setErrorMessage] = useState<string>();
	const [weatherData, setWeatherData] = useState<OpenWeatherData>();

	const temperatureLabel = units === 'imperial' ? 'F' : 'C';
	const speedLabel = units === 'imperial' ? 'mph' : 'Km/h';
	const apiKey = process.env.REMOTION_OPENWEATHER_API_KEY;
	const minMaxTemp = weatherData
		? `${Math.round(weatherData.main.temp_max)} / ${Math.round(
				weatherData.main.temp_min
		  )} °${temperatureLabel}`
		: '';

	useEffect(() => {
		const getData = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`;
			const response = await fetch(url);
			if (!response.ok) {
				setErrorMessage(`Weather API Error: ${response.body}`);
				return;
			}

			const data = await response.json();
			setWeatherData(data);
		};

		if (apiKey) {
			getData();
		}
	}, [apiKey, lang, lat, lon, units]);

	return (
		<AbsoluteFill className="bg-black text-white">
			{!apiKey && (
				<VideoError>REMOTION_OPENWEATHER_API_KEY missing in .env!</VideoError>
			)}

			{apiKey && errorMessage && <VideoError>{errorMessage}</VideoError>}

			{apiKey && !errorMessage && weatherData && (
				<div className="w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex">
					<div className="shrink-0 w-5/12 bg-black opacity-25 grid justify-items-center grid-cols-1 items-center">
						<WeatherIcon
							openWeatherCode={weatherData.weather[0].icon.toString()}
							className="opacity-85"
							size="30em"
						/>
					</div>

					<div className="grow p-24">
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
				</div>
			)}
		</AbsoluteFill>
	);
};
