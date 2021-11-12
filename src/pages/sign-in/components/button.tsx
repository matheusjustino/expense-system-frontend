import React, { MouseEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
	name: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

export const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
	return (
		<ButtonStyled onClick={onClick} className="btn">
			{name}
		</ButtonStyled>
	);
};

const ButtonStyled = styled.button`
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
