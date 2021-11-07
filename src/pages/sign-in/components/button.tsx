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
