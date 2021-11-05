import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ButtonStyled = styled.div`
	min-width: 18rem;
`;

interface ButtonProps {
	name: string;
}

export const Button: React.FC<ButtonProps> = ({ name }) => {
	return (
		<Root>
			<ButtonStyled className="btn btn-primary">{name}</ButtonStyled>
		</Root>
	);
};
