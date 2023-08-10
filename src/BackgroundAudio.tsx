import React from 'react';
import {interpolate, Audio, staticFile} from 'remotion';

export const BackgroundAudio: React.FC = () => {
	return (
		<Audio
			src={staticFile('audio/external/9. EZ PZ.wav')}
			volume={(f) => {
				return interpolate(
					f,
					[0, 50, 180, 220, 4819, 4900],
					[0, 0.6, 0.6, 0.07, 0.07, 0.0],
					{
						extrapolateLeft: 'clamp',
					}
				);
			}}
			startFrom={4}
		/>
	);
};
