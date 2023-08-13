import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export interface TitleProps {
	titleText?: string;
	titleColor?: string;
	className?: string;
}

export const Title: React.FC<TitleProps> = ({
	titleText = 'Title Goes Here',
	titleColor = '#FFFFFF',
	className = '',
}) => {
	return (
		<div
			style={{color: titleColor}}
			className={`text-gray-700 text-7xl text-center ${className}`}
		>
			{titleText}
		</div>
	);
};
