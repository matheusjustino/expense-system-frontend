import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
	menuIsOpen: boolean;
}

interface ThemeToggleFooterProps {
	menuIsOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
	grid-area: AS;

	background-color: ${(props) => props.theme.colors.secondary};
	padding-left: 1.25rem;
	border-right: 1px solid ${(props) => props.theme.colors.gray};

	position: relative;

	@media (max-width: 37.5rem) {
		padding-left: 0.5rem;
		position: fixed;
		z-index: 2;

		height: ${(props) => (props.menuIsOpen ? '100vh' : '4.375rem')};
		overflow: hidden;

		${(props) =>
			!props.menuIsOpen &&
			css`
				border: none;
				border-bottom: 1px solid ${(props) => props.theme.colors.gray};
			`}
	}
`;

export const Header = styled.header`
	display: flex;
	align-items: center;

	height: 4.375rem;

	@media (max-width: 37.5rem) {
		width: 8rem;
	}
`;

export const LogoImg = styled.img`
	height: 2.5rem;
	width: 2.5rem;

	@media (max-width: 37.5rem) {
		display: none;
	}
`;

export const Title = styled.h4`
	color: ${(props) => props.theme.colors.white};
	margin-left: 0.625rem;
	margin-bottom: 0;

	@media (max-width: 37.5rem) {
		display: none;
	}
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

export const ToggleMenu = styled.button`
	height: 2.5rem;
	width: 2.5rem;

	border-radius: 0.5rem;
	font-size: 1.375rem;

	background-color: ${(props) => props.theme.colors.warning};

	color: ${(props) => props.theme.colors.white};

	transition: opacity 0.3s;

	&:hover {
		opacity: 0.7;
	}

	display: none;

	@media (max-width: 37.5rem) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const ThemeToggleFooter = styled.footer<ThemeToggleFooterProps>`
	display: none;
	position: absolute;
	bottom: 1.875rem;

	@media (max-width: 30rem) {
		display: ${(props) => (props.menuIsOpen ? 'flex' : 'none')};
	}

	#toggle {
		> span {
			font-size: 0.725rem;
		}
	}
`;
