import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Source = styled.input`
	${getWidthAndHeight};
`;

function getWidthAndHeight(props) {
	if (props.type === 'checkbox') {
		return css`
			width: 25px;
			height: 25px;
		`;
	}
}
