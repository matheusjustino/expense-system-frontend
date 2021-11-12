import React, { ReactNode, ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
	spanName: string;
	type: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
	children?: ReactNode;
}

export const Input: React.FC<InputProps> = ({
	spanName,
	type,
	onChange,
	value,
}) => {
	return (
		<Root className="mb-3">
			<InputRoot className="input-group">
				<div className="input-group-prepend">
					<Span
						className="input-group-text"
						id="inputGroup-sizing-default"
					>
						{spanName}
					</Span>
				</div>
				<InputWrapper
					value={value}
					onChange={onChange}
					type={type}
					className="form-control"
				/>
			</InputRoot>
		</Root>
	);
};

const Root = styled.div`
	padding-left: 0;
	padding-right: 0;
`;

const InputRoot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0;
`;

const Span = styled.span`
	min-width: 6.875rem;

	background-color: ${(props) => props.theme.colors.info};
	color: ${(props) => props.theme.colors.primary};
	border-color: ${(props) => props.theme.colors.info};
`;

const InputWrapper = styled.input`
	&:focus {
		border-color: ${(props) => props.theme.colors.info};
		box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.info};
	}
`;
