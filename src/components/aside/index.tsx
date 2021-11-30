import React, { useState } from 'react';
import {
	MdDashboard,
	MdArrowUpward,
	MdArrowDownward,
	MdExitToApp,
	MdNoteAdd,
	MdClose,
	MdMenu,
} from 'react-icons/md';

// LOGO
import logoImg from '../../assets/images/logo.svg';

// CONTEXT
import { useAuth } from '../../contexts/auth.context';

// COMPONENTS
import { Toggle } from '../toggle';

// STYLES
import {
	Container,
	ToggleMenu,
	Header,
	LogoImg,
	Title,
	MenuContainer,
	MenuItemLink,
	ThemeToggleFooter,
} from './styles';

export const Aside: React.FC = () => {
	const { signOut } = useAuth();

	const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

	const handleToggleMenu = () => {
		setToggleMenuIsOpened(!toggleMenuIsOpened);
	};

	return (
		<Container menuIsOpen={toggleMenuIsOpened}>
			<Header>
				<ToggleMenu onClick={handleToggleMenu}>
					{toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
				</ToggleMenu>

				<LogoImg src={logoImg} alt="Minha Carteira" />
				<Title>Minha Carteira</Title>
			</Header>

			<MenuContainer>
				<MenuItemLink to="/dashboard">
					<MdDashboard />
					Dashboard
				</MenuItemLink>

				<MenuItemLink to="/register/new">
					<MdNoteAdd />
					Registrar
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

			<ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
				<Toggle />
			</ThemeToggleFooter>
		</Container>
	);
};
