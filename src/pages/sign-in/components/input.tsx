import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface InputProps {
	spanName: string;
	type: string;
	children?: ReactNode;
}

export const Input: React.FC<InputProps> = ({ spanName, type }) => {
	return (
		<InputRoot className="input-group mb-3">
			<div className="input-group-prepend">
				<Span
					className="input-group-text"
					id="inputGroup-sizing-default"
				>
					{spanName}
				</Span>
			</div>
			<InputWrapper type={type} className="form-control" />
		</InputRoot>
	);
};

const InputRoot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Span = styled.span`
	min-width: 5rem;
`;

const InputWrapper = styled.input`
	max-width: 19rem;

	&:focus {
		border-color: ${(props) => props.theme.colors.primary.main};
		box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.primary.main};
	}
`;
