declare module 'react-open-weather' {
	export interface OpenWeatherTemperature {
		current?: string | number; // Huh, seen it used both ways in docs
		min: string | number;
		max: string | number;
	}

	export interface OpenWeatherCondition {
		date: string;
		description: string;
		icon: string;
		temperature: OpenWeatherTemperature;
		wind: string;
		humidity: number;
		locationLabel?: string;
	}

	export interface OpenWeatherData {
		forecast: OpenWeatherCondition[];
		current: OpenWeatherCondition;
	}

	export interface UnitsLabels {
		temperature: string;
		windSpeed: string;
	}

	export interface UseOpenWeather {
		data: OpenWeatherData;
		isLoading: boolean;
		lang: string;
		locationLabel?: string;
		unitsLabels?: UnitsLabels;
		showForecast: boolean;
		errorMessage: string;
	}

	export function useOpenWeather({
		key: string,
		lon: string,
		lat: string,
		unit: string,
		lang: string,
	}): UseOpenWeather;

	export interface ReactWeatherProps {
		isLoading: boolean;
		errorMessage: string;
		data: OpenWeatherData;
		lang: string;
		locationLabel: string;
		unitsLabels: UnitsLabels;
		showForecast: boolean;
		className?: string;
	}

	const ReactWeather: React.FC<ReactWeatherProps>;

	export default ReactWeather;
}
