import styled from 'styled-components';

export const Container = styled.div`
	grid-area: MH;

	/* color: ${(props) => props.theme.colors.white}; */
	background-color: ${(props) => props.theme.colors.secondary};

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 0.625rem;

	border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div`
	color: ${(props) => props.theme.colors.white};

	display: flex;
	flex-direction: column;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
