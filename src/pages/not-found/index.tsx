import React from 'react';

// COMPONENTS
import { Root } from './components/root';
import { LinkButton } from '../../components/link-button';
import { Error404 } from './components/error-404';
import { ErrorMsg } from './components/error-message';

interface PageNotFoundProps {
	to?: string;
}

export const PageNotFound: React.FC<PageNotFoundProps> = ({ to }) => {
	return (
		<Root className="container">
			<Error404>Erro 404</Error404>
			<ErrorMsg>Esta página possivelmente não existe mais.</ErrorMsg>
			<LinkButton to={to || '/'} className="btn">
				Ir para o início
			</LinkButton>
		</Root>
	);
};
