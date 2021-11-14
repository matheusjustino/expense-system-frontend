import styled from 'styled-components';

interface LegendProps {
	color: string;
}

export const Container = styled.div`
	display: flex;

	width: 48%;
	min-height: 16.25rem;

	margin: 0.625rem 0;

	background-color: ${(props) => props.theme.colors.tertiary};
	color: ${(props) => props.theme.colors.white};

	border-radius: 0.5rem;
`;

export const SideLeft = styled.aside`
	flex: 1;
	padding: 1.875rem 1.25rem;

	> h2 {
		margin-bottom: 0.625rem;
		padding-left: 1rem;
	}
`;

export const SideRight = styled.main`
	flex: 1;
	display: flex;
	justify-content: center;

	padding-top: 1rem;
`;

export const LegendContainer = styled.ul`
	list-style: none;

	max-height: 10rem;
	padding-left: 1rem;

	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0.625rem;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.primary};
		border-radius: 0.625rem;
	}

	::-webkit-scrollbar-track {
		background-color: ${(props) => props.theme.colors.tertiary};
	}
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
