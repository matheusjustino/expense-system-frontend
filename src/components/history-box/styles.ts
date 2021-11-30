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

interface LegendProps {
	color: string;
}

export const Container = styled.div`
	width: 100%;

	background-color: ${(props) => props.theme.colors.tertiary};
	color: ${(props) => props.theme.colors.white};

	margin: 0.625rem 0;
	padding: 1.875rem 1.25rem;

	border-radius: 0.5rem;

	animation: ${animate} 0.5s;
`;

export const ChartContainer = styled.div`
	flex: 1;
	height: 16.25rem;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;

	padding: 0 1rem;

	@media (max-width: 75rem) {
		flex-direction: column;
	}
`;

export const LegendContainer = styled.ul`
	list-style: none;

	display: flex;

	margin-left: 0;
	padding-left: 0;
`;

export const Legend = styled.li<LegendProps>`
	display: flex;
	align-items: center;

	margin-bottom: 0.5rem;

	> div {
		font-size: 1.125rem;
		background-color: ${(props) => props.color};

		width: 3.5rem;
		height: 3.5rem;

		border-radius: 0.3125rem;

		line-height: 3.5rem;

		text-align: center;
	}

	> span {
		margin-left: 0.3125rem;
		padding-right: 0.5rem;
	}

	@media (max-width: 80rem) {
		> div {
			height: 1.875rem;
			width: 1.875rem;
		}
	}
`;
