import React from 'react';
import styled from 'styled-components';

export const PageNotFound: React.FC = () => {
	return (
		<Root>
			<h2>PÁGINA NÃO ENCONTRADA</h2>
			<h1>404</h1>
		</Root>
	);
};

const Root = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	color: ${(props) => props.theme.colors.danger.main};
`;
