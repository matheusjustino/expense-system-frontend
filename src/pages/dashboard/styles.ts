import styled from 'styled-components';

interface ContentProps {
	isLoading: boolean;
}

export const Container = styled.div`
	height: 100%;
`;

export const SpinnerContainer = styled.div`
	height: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div<ContentProps>`
	display: flex;
	justify-content: ${(props) =>
		props.isLoading ? 'center' : 'space-between'};

	flex-wrap: wrap;
`;
