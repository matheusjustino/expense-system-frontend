import styled from 'styled-components';

interface TagProps {
	color: string;
}

export const Container = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.tertiary};

	list-style: none;

	border-radius: 0.5rem;

	margin: 0.625rem 0;
	padding: 0.75rem 0.625rem;

	cursor: pointer;

	transition: all 0.3s;

	position: relative;

	&:hover {
		opacity: 0.7;
		transform: translateX(0.625rem);
	}

	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		padding-left: 0.625rem;
	}
`;

export const Tag = styled.div<TagProps>`
	width: 0.625rem;
	height: 60%;

	background-color: ${(props) => props.color};

	position: absolute;
	left: 0;
`;
