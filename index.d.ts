declare module 'react-open-weather' {
	export interface OpenWeatherTemperature {
		current: string; // WHAT?? shows in docs as '-2' while min and max are numbers, maybe doc typo
		min: number;
		max: number;
	}

	export interface OpenWeatherCondition {
		date: string;
		description: string;
		icon: string;
		temperature: OpenWeatherTemperature;
		wind: string;
		humidity: number;
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
	}

	const ReactWeather: React.FC<ReactWeatherProps>;

	export default ReactWeather;
}
