import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	grid-area: AS;

	background-color: ${(props) => props.theme.colors.secondary};
	padding-left: 1.25rem;
	border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
	display: flex;
	align-items: center;

	height: 4.375rem;
`;

export const LogoImg = styled.img`
	height: 2.5rem;
	width: 2.5rem;
`;

export const Title = styled.h4`
	color: ${(props) => props.theme.colors.white};
	margin-left: 0.625rem;
	margin-bottom: 0;
`;

export const MenuContainer = styled.nav`
	display: flex;
	flex-direction: column;

	margin-top: 3.125rem;
`;

export const MenuItemLink = styled(Link)`
	display: flex;
	align-items: center;

	color: ${(props) => props.theme.colors.info};
	text-decoration: none;

	margin: 0.5rem 0;

	transition: opacity 0.3s;

	&:hover {
		color: ${(props) => props.theme.colors.info};
		opacity: 0.7;
	}

	> svg {
		font-size: 1.25rem;
		margin-right: 0.5rem;
	}
`;

export const MenuItemButton = styled.a`
	display: flex;
	align-items: center;

	color: ${(props) => props.theme.colors.info};
	text-decoration: none;

	margin: 0.5rem 0;

	transition: opacity 0.3s;

	&:hover {
		color: ${(props) => props.theme.colors.info};
		opacity: 0.7;
	}

	> svg {
		font-size: 1.25rem;
		margin-right: 0.5rem;
	}
`;
