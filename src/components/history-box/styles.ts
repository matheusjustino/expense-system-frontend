import styled from 'styled-components';

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
`;

export const ChartContainer = styled.div`
	flex: 1;
	height: 16.25rem;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;

	padding: 0 1rem;
`;

export const LegendContainer = styled.ul`
	list-style: none;

	display: flex;
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
`;
