import styled from 'styled-components';
import { width, gap, fontSize } from './common/Styles/theme';

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	max-width: ${width.max_width};
	padding: ${gap.general};
	margin: auto;
	flex: 1;
`;

export const Warning = styled.div`
	padding: ${gap.original} 0;
	font-size: ${fontSize.warning};
	color: red;
`;
