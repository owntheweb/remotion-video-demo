// This was pulled from the Remotion brand repo at:
// https://github.com/remotion-dev/brand/blob/main/src/Logo.tsx

import styled from 'styled-components';
import {Triangle} from './Triangle';

const Outer = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	align-items: center;
`;

export const RemotionLogoTriangle: React.FC<{
	size: number;
	color?: string;
	className?: string;
	style?: object;
}> = ({size, color, className = '', style = {}}) => {
	return (
		<Outer className={className} style={style}>
			<Triangle color={color} size={size} opacity={0.2} />
			<Triangle color={color} size={(size * 9) / 11} opacity={0.4} />
			<Triangle color={color} size={(size * 7) / 11} opacity={1} />
		</Outer>
	);
};
