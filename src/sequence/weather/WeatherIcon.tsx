import React from 'react';
import {
	WiDaySunny,
	WiDayCloudy,
	WiAlien,
	WiDayRain,
	WiDayThunderstorm,
	WiDaySnow,
	WiDayFog,
	WiNightClear,
	WiNightCloudy,
	WiNightPartlyCloudy,
	WiNightRain,
	WiNightThunderstorm,
	WiNightSnow,
	WiNightFog,
} from 'weather-icons-react';

export interface WeatherIconProps {
	openWeatherCode: string;
	size?: number | string;
	color?: string;
	className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({
	openWeatherCode,
	size = 100,
	color = '#FFF',
	className = 'weatherIcon',
}) => {
	const IconMap: {[key: string]: React.ComponentType<any>} = {
		'01d': WiDaySunny,
		'02d': WiDayCloudy,
		'03d': WiDayCloudy,
		'04d': WiDayCloudy,
		'09d': WiDayRain,
		'10d': WiDayRain,
		'11d': WiDayThunderstorm,
		'13d': WiDaySnow,
		'50d': WiDayFog,
		'01n': WiNightClear,
		'02n': WiNightCloudy,
		'03n': WiNightPartlyCloudy,
		'04n': WiNightPartlyCloudy,
		'09n': WiNightRain,
		'10n': WiNightRain,
		'11n': WiNightThunderstorm,
		'13n': WiNightSnow,
		'50n': WiNightFog,
	};

	const IconComponent = IconMap[openWeatherCode] || WiAlien;

	return <IconComponent size={size} color={color} className={className} />;
};
