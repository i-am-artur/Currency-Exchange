import styled from 'styled-components';
import { colors, gap } from '../../common/Styles/theme';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: ${gap.general};
`;

export const Result = styled.div`
	font-weight: 500;
	color: ${colors.text_dark};
`;
