import styled from 'styled-components';
import { pxToRem } from '../../Styles/helpers';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Component = styled.select`
	font-size: ${pxToRem(22)};
`;
