import styled, { keyframes } from 'styled-components';

const animate = keyframes`
	0% {
		transform: translateX(-100px);
		opacity: 0;
	}

	50% {
		opacity: 0.3;
	}

	100% {
		transform: translateX(0);
		opacity: 1;
	}
`;

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

	animation: ${animate} 0.5s;

	> header img {
		width: 2.1875rem;
		margin-left: 0.5rem;
	}

	> header p {
		font-size: 1.125rem;
	}

	@media (max-width: 48.125rem) {
		width: 100%;

		> header h1 {
			font-size: 1.5rem;

			img {
				height: 1.25rem;
				width: 1.25rem;
			}
		}

		> header p,
		> footer span {
			> span {
				font-size: 0%.875rem;
			}
		}
	}

	@media (max-width: 26.25rem) {
		width: 100%;
		height: auto;

		> header p {
			margin-bottom: 1rem;
		}
	}
`;
