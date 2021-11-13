import styled from 'styled-components';

interface ContainerProps {
	color: string;
}

export const Container = styled.div<ContainerProps>`
	background-color: ${(props) => props.color};
	color: ${(props) => props.theme.colors.white};

	width: 32%;
	height: 9.375rem;

	margin: 0.635rem 0;
	padding: 0.625rem 1.25rem;

	border-radius: 0.5rem;

	position: relative;

	overflow: hidden;

	> img {
		position: absolute;

		height: 110%;
		top: -0.625rem;
		right: -1.25rem;

		opacity: 0.3;
	}

	> span {
		font-size: 1.25rem;
		font-weight: 500;
	}

	> small {
		font-size: 0.875rem;
		position: absolute;

		bottom: 0.625rem;
	}
`;
