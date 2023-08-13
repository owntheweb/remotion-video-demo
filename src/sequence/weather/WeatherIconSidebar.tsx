'use strict';
import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {WeatherIcon} from './WeatherIcon';

export interface WeatherIconSidebarProps {
	weatherIconCode: string;
}

export const WeatherIconSidebar: React.FC<WeatherIconSidebarProps> = ({
	weatherIconCode,
}) => {
	const frame = useCurrentFrame();

	// Sidebar animation
	const iconBarOpacity = interpolate(frame, [20, 40], [0, 0.25], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const iconBarX = interpolate(frame, [20, 40], [-50, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Icon animation
	const iconBarIconOpacity = interpolate(frame, [40, 70], [0, 1.0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const iconBarIconY = interpolate(frame, [40, 70], [200, -50], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<div
			style={{
				opacity: iconBarOpacity,
				transform: `translateX(${iconBarX}px)`,
			}}
			className="shrink-0 w-5/12 bg-black grid justify-items-center grid-cols-1 items-center"
		>
			<div
				style={{
					opacity: iconBarIconOpacity,
					transform: `translateY(${iconBarIconY}px)`,
				}}
			>
				<WeatherIcon openWeatherCode={weatherIconCode} size="30em" />
			</div>
		</div>
	);
};
