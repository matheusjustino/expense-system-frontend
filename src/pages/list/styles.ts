import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;

	margin-bottom: 1.875rem;

	.tag-filter {
		font-size: 1.125rem;
		font-weight: 500;

		background: none;
		color: ${(props) => props.theme.colors.white};

		margin: 0 0.625rem;

		opacity: 0.4;
		transition: opacity 0.3s;
		&:hover {
			opacity: 0.7;
		}
	}

	.tag-filter-recurrent::after {
		content: '';
		display: block;
		width: 3.4375rem;
		margin: 0 auto;
		border-bottom: 0.625rem solid ${(props) => props.theme.colors.success};
	}

	.tag-filter-eventual::after {
		content: '';
		display: block;
		width: 3.4375rem;
		margin: 0 auto;
		border-bottom: 0.625rem solid ${(props) => props.theme.colors.warning};
	}

	.tag-actived {
		opacity: 1;
	}
`;
