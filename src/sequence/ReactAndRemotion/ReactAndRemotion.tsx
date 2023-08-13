'use strict';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {AnimatedLogo} from './remotionLogo/AnimatedLogo';

export const ReactAndRemotion: React.FC = () => {
	return (
		<AbsoluteFill className="bg-slate-900 text-white text-7xl p-24">
			<AnimatedLogo theme="dark" />
		</AbsoluteFill>
	);
};
