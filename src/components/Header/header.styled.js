import styled from 'styled-components';
import { colors, gap, width } from '../../common/Styles/theme';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
	background-color: ${colors.dark};
`;

export const Component = styled.header`
	display: flex;
	flex-direction: column;
	max-width: ${width.max_width};
	margin-left: auto;
	margin-right: auto;
	padding: ${gap.general};
	align-items: center;
`;

export const Logo = styled.h1`
	padding: 0;
	color: ${colors.emblem};
`;

export const Nav = styled.nav`
	margin: 0;
	padding: 0;
	width: 100%;
	color: ${colors.emblem};
`;

export const Menu = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	width: 100%;
	justify-content: space-between;
	list-style-type: none;
	font-size: x-large;
	font-weight: bold;
`;
export const MenuItem = styled.li``;

export const MenuLink = styled(NavLink)`
	color: white;

	&.active {
		color: ${colors.active};
	}
`;
