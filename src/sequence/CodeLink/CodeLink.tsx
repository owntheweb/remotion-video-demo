'use strict';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {ReactLogo} from '../TitleScreen/ReactLogo';

export const CodeLink: React.FC = () => {
	return (
		<AbsoluteFill className="bg-black">
			<AbsoluteFill className="bg-slate-900 text-white text-7xl p-24">
				<ReactLogo
					rotate
					startFrame={0}
					endFrame={475}
					degrees={60}
					className="opacity-10 absolute left-0 top-[-4.05em]"
				/>

				<ReactLogo rotate startFrame={0} endFrame={475} degrees={150} />

				<div className="text-[#C8F3FF] text-5xl text-center mt-24">
					https://github.com/owntheweb/remotion-video-demo
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
