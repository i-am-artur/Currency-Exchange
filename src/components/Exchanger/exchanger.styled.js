import styled from 'styled-components';
import { gap } from '../../common/Styles/theme';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: ${gap.general};
`;

export const CurrencyList = styled.ul`
	margin: 0;
	padding: 0;
	height: 250px;
	overflow: auto;
	list-style-type: none;
`;

export const CurrencyItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Currency = styled.div`
	display: flex;
	padding-left: ${gap.original};
	padding-right: ${gap.original};
	width: 100%;
	justify-content: space-between;
`;
