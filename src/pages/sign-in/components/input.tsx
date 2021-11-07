import React, { ReactNode, ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';

interface InputProps {
	spanName: string;
	type: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
	errorMessage?: string | undefined;
	children?: ReactNode;
}

export const Input: React.FC<InputProps> = ({
	spanName,
	type,
	onChange,
	value,
	errorMessage: errorMessageProps,
}) => {
	const [errorMessage, setErrorMessage] = useState<string | undefined>(
		undefined,
	);

	useEffect(() => {
		console.log(errorMessageProps);
		setErrorMessage(errorMessageProps);
	}, []);

	return (
		<div className="mb-3">
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
			{errorMessage ? <SpanError>{errorMessage}</SpanError> : null}
		</div>
	);
};

const InputRoot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0;
`;

const Span = styled.span`
	min-width: 6.875rem;
`;

const InputWrapper = styled.input`
	&:focus {
		border-color: ${(props) => props.theme.colors.primary.main};
		box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.primary.main};
	}
`;

const SpanError = styled.span`
	color: ${(props) => props.theme.colors.danger.main};
	margin: 0 0.25rem;
`;
