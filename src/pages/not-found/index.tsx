import React from 'react';

// STYLES
import { Root, Error404, ErrorMsg, LinkButton } from './styles';

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
