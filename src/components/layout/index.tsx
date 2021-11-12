import React from 'react';

// COMPONENTS
import { Grid } from './styles';
import { MainHeader } from '../main-header';
import { Aside } from '../aside';
import { Content } from '../content';

export const Layout: React.FC = ({ children }) => {
	return (
		<Grid>
			<MainHeader />
			<Aside />
			<Content>{children}</Content>
		</Grid>
	);
};
