('use strict');
import React from 'react';
import {Sequence, staticFile, Audio} from 'remotion';

export interface NarrationSequenceProps {
	audioFile: string;
	delay?: number;
}

export const NarrationSequence: React.FC<NarrationSequenceProps> = ({
	audioFile,
	delay = 0,
}) => {
	return (
		<Sequence from={delay}>
			<Audio src={staticFile(audioFile)} />
		</Sequence>
	);
};
