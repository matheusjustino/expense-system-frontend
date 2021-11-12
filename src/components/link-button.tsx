import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
	background: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.primary} !important;

	&:hover {
		background: ${(props) => props.theme.colors.primary};
	}

	&:focus {
		background: ${(props) => props.theme.colors.primary};
		border-color: ${(props) => props.theme.colors.primary};
		box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.primary};
	}
`;
