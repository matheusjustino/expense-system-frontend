import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

// COMPONENTS
import { SignInTitle } from './signin-title';
import { Input } from './input';
import { Button } from './button';
import { LinkButton } from '../../../components/link-button';

export const SignInForm: React.FC = () => {
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		console.log('form enviado');
	};

	return (
		<div>
			<SignInTitle text="CONTROLE SEUS GASTOS" size={2} />

			<Form className="container">
				<Row className="row">
					<Input spanName="Email" type="email" />
				</Row>
				<Row className="row">
					<Input spanName="Senha" type="password" />
				</Row>

				<Row className="row mb-4">
					<Button onClick={handleSubmit} name="Entrar" />
				</Row>

				<Row className="row">
					<LinkButton className="btn" to="/signup">
						Criar Conta
					</LinkButton>
				</Row>
			</Form>
		</div>
	);
};

const Form = styled.form`
	margin-bottom: 2.5rem;
`;

const Row = styled.div`
	* {
		max-width: 24rem;
	}

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
