import React, { MouseEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';

// INTERFACES
import { Register } from '../../../interfaces/register.interface';

// CONTEXT
import { useAuth } from '../../../contexts/auth.context';

// COMPONENTS
import { AuthFormTitle } from '../../../components/auth-form-title';
import { LinkButton } from '../../../components/link-button';
import { Button } from '../../sign-in/components/button';
import { Input } from '../../sign-in/components/input';

export const SignUpForm: React.FC = () => {
	const buildUserForm = (): Register => {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		} as Register;
	};
	const [userForm, setUserForm] = useState<Register>(buildUserForm());

	const { register } = useAuth();
	const errors = [];

	const setFirstName = (e: ChangeEvent<HTMLInputElement>): void => {
		setUserForm((prevState) => {
			return {
				...prevState,
				firstName: e.target.value,
			};
		});
	};

	const setLastName = (e: ChangeEvent<HTMLInputElement>): void => {
		setUserForm((prevState) => {
			return {
				...prevState,
				lastName: e.target.value,
			};
		});
	};

	const setEmail = (e: ChangeEvent<HTMLInputElement>): void => {
		setUserForm((prevState) => {
			return {
				...prevState,
				email: e.target.value,
			};
		});
	};

	const setPassword = (e: ChangeEvent<HTMLInputElement>): void => {
		setUserForm((prevState) => {
			return {
				...prevState,
				password: e.target.value,
			};
		});
	};

	const verifyInputs = (): boolean => {
		if (!!!userForm.firstName) {
			console.log('campo firstName vazio');
			errors.push({
				firstName: 'Inválido',
			});
		}

		if (!!!userForm.lastName) {
			console.log('campo lastName vazio');
			errors.push({
				lastName: 'Inválido',
			});
		}

		if (!!!userForm.email) {
			console.log('campo email vazio');
			errors.push({
				email: 'Inválido',
			});
		}

		if (!!!userForm.password) {
			console.log('campo password vazio');
			errors.push({
				password: 'Inválido',
			});
		}

		return errors.length === 0;
	};

	const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (!verifyInputs()) {
			console.log('form com problema');
			return;
		}

		await register(userForm);
		setUserForm(buildUserForm());
		console.log('signup form');
	};

	return (
		<div>
			<AuthFormTitle text="FAÇA SEU CADASTRO" size={2} />

			<Form className="container">
				<Row className="row">
					<Input
						value={userForm.firstName}
						onChange={setFirstName}
						spanName="Nome"
						type="text"
					/>
				</Row>
				<Row className="row">
					<Input
						value={userForm.lastName}
						onChange={setLastName}
						spanName="Sobrenome"
						type="text"
					/>
				</Row>
				<Row className="row">
					<Input
						value={userForm.email}
						onChange={setEmail}
						spanName="Email"
						type="email"
					/>
				</Row>
				<Row className="row">
					<Input
						value={userForm.password || ''}
						onChange={setPassword}
						spanName="Senha"
						type="password"
					/>
				</Row>

				<Row className="row mb-3">
					<LinkButton className="btn" to="/">
						Voltar
					</LinkButton>
				</Row>

				<Row className="row mb-3">
					<Button onClick={handleSubmit} name="Criar Conta" />
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
