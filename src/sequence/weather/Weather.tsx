import React from 'react';
import {OpenWeatherData, UnitsLabels, useOpenWeather} from 'react-open-weather';
import {AbsoluteFill} from 'remotion';
import {VideoError} from '../../VideoError';

export interface WeatherProps {
	apiKey?: string;
	lat?: string;
	lon?: string;
	lang?: string;
	unit?: string;
	unitsLabels?: UnitsLabels;
}

export const Weather: React.FC<WeatherProps> = ({
	apiKey = undefined,
	lat = '48.137154',
	lon = '11.576124',
	lang = 'en',
	unit = 'imperial',
	unitsLabels = {temperature: 'C', windSpeed: 'Km/h'},
}) => {
	/*
	Const {data, isLoading, errorMessage} = useOpenWeather({
		key: apiKey,
		lat,
		lon,
		lang,
		unit,
	});
	*/

	const isLoading = false;
	const errorMessage = '';

	const data: OpenWeatherData = {
		forecast: [],
		current: {
			date: 'Fri 27 November',
			description: 'Clear',
			icon: 'SVG PATH',
			temperature: {current: '-2', min: -3, max: 1},
			wind: '2',
			humidity: 90,
			locationLabel: 'Munich',
		},
	};

	return (
		<AbsoluteFill className="bg-black text-white">
			{!apiKey && (
				<VideoError>REMOTION_OPENWEATHER_API_KEY missing in .env!</VideoError>
			)}

			{apiKey && errorMessage && <VideoError>{errorMessage}</VideoError>}

			{apiKey && !errorMessage && data && (
				<div className="w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex">
					<div className="grow p-24">
						<div className="text-7xl mb-4">{data.current.locationLabel}</div>

						<hr className="mt-8 mb-4" />

						{data.current.temperature?.current && (
							<>
								<div className="text-9xl mb-4">
									{data.current.temperature.current} {unitsLabels.temperature}
								</div>
							</>
						)}
						<div className="text-4xl mb-4 opacity-75">
							{data.current.temperature.max} / {data.current.temperature.min}
							{unitsLabels.temperature}
						</div>
						<div className="text-4xl  opacity-75">
							[icon] {data.current.description}
						</div>

						<hr className="mt-8 mb-10" />

						<div className="text-4xl mb-4 opacity-75">
							Wind: {data.current.wind} {unitsLabels.windSpeed}
						</div>
						<div className="text-4xl mb-4 opacity-75">
							Humidity: {data.current.humidity} %
						</div>
					</div>

					<div className="shrink-0 w-5/12 bg-black opacity-25 grid justify-items-center grid-cols-1 items-center">
						[icon]
					</div>
					{/* We could also use the ReactWeather component here, found design to be a bit rigid for this demo (data and svgs nice!) */}
				</div>
			)}
		</AbsoluteFill>
	);
};
