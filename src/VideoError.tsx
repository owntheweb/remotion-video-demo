import React, {ReactNode} from 'react';

export interface VideoErrorProps {
	children?: ReactNode;
}

export const VideoError: React.FC<VideoErrorProps> = ({
	children = 'There was an error, yet no error message specified?',
}) => (
	<div className="text-red-300 text-5xl">
		{typeof children === 'string' ? <>🙀 Error: {children}</> : <>{children}</>}
	</div>
);
