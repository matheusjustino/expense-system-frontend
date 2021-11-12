import React from 'react';
import {
	MdDashboard,
	MdArrowUpward,
	MdArrowDownward,
	MdExitToApp,
} from 'react-icons/md';

// LOGO
import logoImg from '../../assets/images/logo.svg';

// COMPONENTS
import {
	Container,
	Header,
	LogoImg,
	Title,
	MenuContainer,
	MenuItemLink,
} from './styles';

export const Aside: React.FC = () => {
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

				<MenuItemLink to="/dashboard">
					<MdArrowUpward />
					Entradas
				</MenuItemLink>

				<MenuItemLink to="/dashboard/list">
					<MdArrowDownward />
					Saidas
				</MenuItemLink>

				<MenuItemLink to="/dashboard">
					<MdExitToApp />
					Sair
				</MenuItemLink>
			</MenuContainer>
		</Container>
	);
};
