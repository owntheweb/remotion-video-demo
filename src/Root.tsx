import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				/* TODO: look for a better way to calculate this based on all sources? */
				/* MAYBE: utility to get narration and video lengths? Hmm... */
				durationInFrames={4578} /* Looking this up in local video viewer */
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
