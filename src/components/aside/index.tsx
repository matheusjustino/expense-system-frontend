import React from 'react';
import {
	MdDashboard,
	MdArrowUpward,
	MdArrowDownward,
	MdExitToApp,
} from 'react-icons/md';

// LOGO
import logoImg from '../../assets/images/logo.svg';
import { useAuth } from '../../contexts/auth.context';

// STYLES
import {
	Container,
	Header,
	LogoImg,
	Title,
	MenuContainer,
	MenuItemLink,
} from './styles';

export const Aside: React.FC = () => {
	const { signOut } = useAuth();

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

				<MenuItemLink to="/" onClick={signOut}>
					<MdExitToApp />
					Sair
				</MenuItemLink>
			</MenuContainer>
		</Container>
	);
};
