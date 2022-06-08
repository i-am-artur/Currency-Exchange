import { AuthorLink, Wrapper } from './footer.styled';

export default function Footer() {
	return (
		<Wrapper>
			<AuthorLink
				href='http://artur.great-site.net/'
				target='_blank'
				rel='noreferrer'
			>
				I am {'{'} Artur {'}'} &copy; 2022
			</AuthorLink>
		</Wrapper>
	);
}
