import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignUpRoot = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.form`
	margin-bottom: 2.5rem;
`;

export const Row = styled.div`
	* {
		max-width: 24rem;
	}

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SignInTitle = styled.div`
	margin-bottom: 2.5rem;

	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: bold;

	color: ${(props) => props.theme.colors.info};
`;

export const InputRoot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding-left: 0;
	padding-right: 0;
`;

export const Span = styled.span`
	min-width: 6.875rem;

	background-color: ${(props) => props.theme.colors.info};
	color: ${(props) => props.theme.colors.primary};
	border-color: ${(props) => props.theme.colors.info};
`;

export const InputWrapper = styled.input`
	&:focus {
		border-color: ${(props) => props.theme.colors.info};
		box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.info};
	}
`;

export const Button = styled.button`
	border: none;
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
