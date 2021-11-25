import styled from 'styled-components';

interface TitleContainerProps {
	lineColor: string;
}

export const Container = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;

	margin-bottom: 1.5625rem;

	@media (max-width: 20rem) {
		flex-direction: column;
	}
`;

export const TitleContainer = styled.div<TitleContainerProps>`
	> h1 {
		color: ${(props) => props.theme.colors.white};

		&::after {
			content: '';
			display: block;
			width: 3.4375rem;
			border-bottom: 0.625rem solid ${(props) => props.lineColor};
		}
	}

	@media (max-width: 26.25rem) {
		> h1 {
			font-size: 1.25rem;

			&::after {
				content: '';
				display: block;
				width: 3.4375rem;
				border-bottom: 0.3125rem solid ${(props) => props.lineColor};
			}
		}
	}
`;

export const Controllers = styled.div`
	display: flex;

	@media (max-width: 20rem) {
		width: 100%;
		margin-top: 1rem;
		justify-content: space-between;
	}
`;
