export interface OpenWeatherDataCoord {
	lon: number;
	lat: number;
}

export interface OpenWeatherDataWeather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface OpenWeatherDataMain {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

export interface OpenWeatherDataWind {
	speed: number;
	deg: number;
	gust: number;
}

export interface OpenWeatherDataClouds {
	all: number;
}

export interface OpenWeatherDataSys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

export interface OpenWeatherData {
	coord: OpenWeatherDataCoord;
	weather: OpenWeatherDataWeather[];
	base: string;
	main: OpenWeatherDataMain;
	visibility: number;
	wind: OpenWeatherDataWind;
	clouds: OpenWeatherDataClouds;
	dt: number;
	sys: OpenWeatherDataSys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export enum OpenWeatherUnits {
	METRIC = 'metric',
	IMPERIAL = 'imperial',
	STANDARD = 'standard',
}
