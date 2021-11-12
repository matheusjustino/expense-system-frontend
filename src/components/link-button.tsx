import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
