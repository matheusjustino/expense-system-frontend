import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 48%;
	height: 16.25rem;

	background-color: ${(props) => props.theme.colors.tertiary};
	color: ${(props) => props.theme.colors.white};

	border-radius: 0.5rem;

	margin: 0.625rem 0;
	padding: 1.875rem 1.25rem;

	> header img {
		width: 2.1875rem;
		margin-left: 0.5rem;
	}

	> header p {
		font-size: 1.125rem;
	}
`;
