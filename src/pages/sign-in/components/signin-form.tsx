import React, { MouseEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';

// CONTEXT
import { useAuth } from '../../../contexts/auth.context';

// INTERFACES
import { Login } from '../../../interfaces/login.interface';

// COMPONENTS
import { SignInTitle } from './signin-title';
import { Input } from './input';
import { Button } from './button';
import { LinkButton } from '../../../components/link-button';

export const SignInForm: React.FC = () => {
	const buildLoginForm = (): Login => {
		return {
			email: '',
			password: '',
		} as Login;
	};

	const buildErrors = (data?: {
		email?: string;
		password?: string;
		valid?: boolean;
	}) => {
		return {
			email: (data && data.email) || '',
			password: (data && data.password) || '',
			valid: (data && data.valid) || false,
		};
	};

	const [loginForm, setLoginForm] = useState<Login>(buildLoginForm());
	const [inputError, setInputErrors] = useState(buildErrors());

	const { signIn } = useAuth();
	let errors = buildErrors();

	const setEmail = (e: ChangeEvent<HTMLInputElement>): void => {
		setLoginForm((prevState) => {
			return {
				password: prevState.password,
				email: e.target.value,
			};
		});
	};

	const setPassword = (e: ChangeEvent<HTMLInputElement>): void => {
		setLoginForm((prevState) => {
			return {
				password: e.target.value,
				email: prevState.email,
			};
		});
	};

	const verifyInputs = (): boolean => {
		errors = buildErrors({
			...errors,
			valid: true,
		});

		if (!!!loginForm.email) {
			console.log('campo email vazio');
			errors = buildErrors({
				...errors,
				email: 'Inválido',
				valid: false,
			});
		}

		if (!!!loginForm.password) {
			console.log('campo password vazio');
			errors = buildErrors({
				...errors,
				password: 'Inválido',
				valid: false,
			});
		}

		console.log(errors);

		return errors.valid;
	};

	const handleSubmit = async (
		e: MouseEvent<HTMLButtonElement>,
	): Promise<void> => {
		e.preventDefault();

		if (!verifyInputs()) {
			console.log('form com problema');
			setInputErrors(errors);
			return;
		}

		await signIn(loginForm);
		errors = buildErrors();
		setLoginForm(buildLoginForm());
		console.log('form enviado');
	};

	return (
		<div>
			<SignInTitle text="CONTROLE SEUS GASTOS" size={2} />

			<Form className="container">
				<Row className="row">
					<Input
						value={loginForm.email}
						onChange={setEmail}
						spanName="Email"
						type="email"
						errorMessage={inputError.email}
					/>
				</Row>
				<Row className="row">
					<Input
						value={loginForm.password}
						onChange={setPassword}
						spanName="Senha"
						type="password"
						errorMessage={inputError.email}
					/>
				</Row>

				<Row className="row mb-3">
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
