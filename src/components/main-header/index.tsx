import React, { useMemo } from 'react';

// EMOJIS
import { Emojis } from '../../utils/emojis.utils';

// STYLES
import { Container, Profile, Welcome, UserName } from './styles';

// COMPONENTS
import { Toggle } from '../toggle';

// CONTEXT
import { useAuth } from '../../contexts/auth.context';

export const MainHeader: React.FC = () => {
	const { user } = useAuth();

	const emoji = useMemo(() => {
		const index = Math.floor(Math.random() * Emojis.length);
		return Emojis[index];
	}, []);

	return (
		<Container>
			<Toggle />

			<Profile>
				<Welcome>Olá, {emoji}</Welcome>
				<UserName>{`${user?.firstName} ${user?.lastName}`}</UserName>
			</Profile>
		</Container>
	);
};
