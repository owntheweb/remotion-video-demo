import {Composition} from 'remotion';
import {MyComposition, myCompSchema} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				/* TODO: look for a better way to calculate this based on all sources? */
				/* MAYBE: utility to get narration and video lengths? Hmm... */
				durationInFrames={4931} /* Looking this up in local video viewer */
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Let Us Make Video With Remotion!',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>
		</>
	);
};
