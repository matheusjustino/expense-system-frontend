import styled from 'styled-components';

interface TitleContainerProps {
	lineColor: string;
}

export const Container = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;

	margin-bottom: 1.5625rem;
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
`;

export const Controllers = styled.div`
	display: flex;
`;
