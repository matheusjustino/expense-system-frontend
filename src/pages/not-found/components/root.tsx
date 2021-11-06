import styled from 'styled-components';

export const Root = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	color: ${(props) => props.theme.colors.danger.dark};
`;