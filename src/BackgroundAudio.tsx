import React from 'react';
import {interpolate, Audio, staticFile} from 'remotion';

export const BackgroundAudio: React.FC = () => {
	return (
		<Audio
			src={staticFile('audio/external/9. EZ PZ.wav')}
			volume={(f) => {
				return interpolate(
					f,
					[0, 50, 160, 220, 4819, 4900],
					[0, 0.4, 0.4, 0.04, 0.04, 0.0],
					{
						extrapolateLeft: 'clamp',
					}
				);
			}}
			startFrom={4}
		/>
	);
};
