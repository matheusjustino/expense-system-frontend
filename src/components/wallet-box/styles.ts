import styled, { keyframes } from 'styled-components';

const animate = keyframes`
	0% {
		transform: translateX(100px);
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

	animation: ${animate} 0.5s;

	@media (max-width: 48.125rem) {
		> h1 {
			font-size: 1.375rem;

			> strong {
				font-size: 1rem;
			}

			> span {
				font-size: 1rem;
			}
		}

		> small {
			font-size: 0.85rem;
		}
	}

	@media (max-width: 26.25rem) {
		width: 100%;

		> span {
			font-size: 1.75rem;
			font-weight: 500;
		}

		> h1 {
			font-size: 1.875rem;

			> strong {
				font-size: 1.25rem;
			}

			> span {
				font-size: 1.25rem;
			}
		}

		> small {
			font-size: 1rem;
		}
	}
`;
