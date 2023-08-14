import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export interface TitleProps {
	titleText?: string;
	titleColor?: string;
	className?: string;
	style?: object; // Hmm
}

export const Title: React.FC<TitleProps> = ({
	titleText = 'Title Goes Here',
	titleColor = '#FFFFFF',
	className = '',
	style = {},
}) => {
	return (
		<div
			style={{color: titleColor, ...style}}
			className={`text-gray-700 text-7xl text-center ${className}`}
		>
			{titleText}
		</div>
	);
};
