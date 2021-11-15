import styled from 'styled-components';

export const Container = styled.div`
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const SpinnerWrapper = styled.div`
	width: 7rem;
	height: 7rem;
	font-size: 2.5rem;

	color: ${(props) => props.theme.colors.info};
`;
