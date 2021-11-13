import React from 'react';
import {
	MdDashboard,
	MdArrowUpward,
	MdArrowDownward,
	MdExitToApp,
} from 'react-icons/md';

// LOGO
import logoImg from '../../assets/images/logo.svg';

// STYLES
import {
	Container,
	Header,
	LogoImg,
	Title,
	MenuContainer,
	MenuItemLink,
	MenuItemButton,
} from './styles';

export const Aside: React.FC = () => {
	const handleExitApp = () => {
		localStorage.clear();
	};

	return (
		<Container>
			<Header>
				<LogoImg src={logoImg} alt="Minha Carteira" />
				<Title>Minha Carteira</Title>
			</Header>

			<MenuContainer>
				<MenuItemLink to="/dashboard">
					<MdDashboard />
					Dashboard
				</MenuItemLink>

				<MenuItemLink to="/list/entry-balance">
					<MdArrowUpward />
					Entradas
				</MenuItemLink>

				<MenuItemLink to="/list/exit-balance">
					<MdArrowDownward />
					Saidas
				</MenuItemLink>

				<MenuItemButton href="/" onClick={handleExitApp}>
					<MdExitToApp />
					Sair
				</MenuItemButton>
			</MenuContainer>
		</Container>
	);
};
