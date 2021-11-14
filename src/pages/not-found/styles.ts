import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Root = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	color: ${(props) => props.theme.colors.warning};
`;

export const Error404 = styled.h1`
	font-size: 8rem;
	font-weight: bold;
`;

export const ErrorMsg = styled.h1`
	margin-top: 0.5rem;
	margin-bottom: 2rem;
`;

export const LinkButton = styled(Link)`
	background: ${(props) => props.theme.colors.info};
	color: ${(props) => props.theme.colors.primary};

	transition: filter 0.2s;

	&:hover {
		/* opacity: 0.9; */
		filter: brightness(70%);
		color: ${(props) => props.theme.colors.primary};
	}

	&:focus {
		background: ${(props) => props.theme.colors.info};
		border-color: ${(props) => props.theme.colors.info};
		box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.info};
	}
`;
