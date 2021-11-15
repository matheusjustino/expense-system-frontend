import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
	width: 100%;
	height: 100vh;
`;

export const Form = styled.form`
	height: 100%;
`;

export const InputWrapper = styled.input`
	&:focus {
		border-color: ${(props) => props.theme.colors.info};
		box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.info};
	}
`;

export const SpanWrapper = styled.div`
	min-width: 7rem;

	> span {
		border-color: ${(props) => props.theme.colors.info};
		background-color: ${(props) => props.theme.colors.info};
		color: ${(props) => props.theme.colors.primary};

		font-weight: 600;
	}
`;

export const DateInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const DatePickerWrapper = styled.div`
	position: relative;
	padding: 0 0.55rem;

	> div {
		> div {
			> input {
				width: 6.9375rem;
				height: 2.375rem;
				border-radius: 0.5rem;
				text-align: center;
			}
		}
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	button {
		transition: filter 0.2s;
		min-width: 14rem;

		color: ${(props) => props.theme.colors.primary};
		background-color: ${(props) => props.theme.colors.info};
		border: none;

		&:hover {
			filter: brightness(70%);
			color: ${(props) => props.theme.colors.primary};
		}
	}
`;
