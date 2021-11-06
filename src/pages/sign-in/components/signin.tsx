import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { SignInTitle } from './signin-title';
import { Input } from './input';
import { Button } from './button';

export const SignIn: React.FC = () => {
	const handleSubmit = () => {
		console.log('form enviado');
	};

	return (
		<SignInRoot>
			<SignInTitle text="FAZER LOGIN" size={2} />

			<Form className="container">
				<Input spanName="Email" type="email" />

				<Input spanName="Senha" type="password" />
			</Form>

			<Button onClick={handleSubmit} name="Entrar" />
		</SignInRoot>
	);
};

const SignInRoot = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	margin-bottom: 2.5rem;
`;
