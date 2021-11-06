import styled from 'styled-components';

export const TitleRoot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: bold;

	color: ${(props) => props.theme.colors.primary.main};
`;
