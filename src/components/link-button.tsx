import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
	background: ${(props) => props.theme.colors.primary.main};
	color: ${(props) => props.theme.colors.text} !important;

	&:hover {
		background: ${(props) => props.theme.colors.primary.dark};
	}

	&:focus {
		background: ${(props) => props.theme.colors.primary.dark};
		border-color: ${(props) => props.theme.colors.primary.dark};
		box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.primary.dark};
	}
`;
