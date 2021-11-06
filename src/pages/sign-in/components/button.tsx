import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
	name: string;
	onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
	return (
		<ButtonStyled onClick={onClick} className="btn btn-primary">
			{name}
		</ButtonStyled>
	);
};

const ButtonStyled = styled.div`
	min-width: 18.9375rem;
	border: none;
	background: ${(props) => props.theme.colors.primary.main};

	&:hover {
		background: ${(props) => props.theme.colors.primary.dark};
	}
`;
