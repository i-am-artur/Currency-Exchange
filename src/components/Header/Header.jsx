import {
	Component,
	Logo,
	Menu,
	MenuItem,
	MenuLink,
	Nav,
	Wrapper,
} from './header.styled';
import routeList from '../AppRouter/routeList';

export default function Header() {
	return (
		<Wrapper>
			<Component>
				<Logo>Currency Box</Logo>
				<Nav>
					<Menu>
						<MenuItem>
							<MenuLink to={routeList.home}>Converter</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink to={routeList.exchanger}>Exchange Rate</MenuLink>
						</MenuItem>
					</Menu>
				</Nav>
			</Component>
		</Wrapper>
	);
}
