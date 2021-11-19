import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { AuthHero } from '../../components/auth-hero';

// STYLES
import {
	SignUpRoot,
	SignInTitle,
	Form,
	Row,
	InputRoot,
	Span,
	InputWrapper,
	Button,
	LinkButton,
} from './styles';

// IMAGES
import HeroImg from '../../assets/images/undraw_make_it_rain.svg';

// INTERFACE
import { Register } from '../../interfaces/register.interface';

// CONTEXT
import { useAuth } from '../../contexts/auth.context';
import { useToast } from '../../contexts/toast.context';

export const SignUpPage: React.FC = () => {
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
	const { buildToast } = useToast();
	const navigate = useNavigate();

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
			buildToast('error', 'Campo Nome vazio');
			return false;
		}

		if (!!!userForm.lastName) {
			buildToast('error', 'Campo Sobrenome vazio');
			return false;
		}

		if (!!!userForm.email) {
			buildToast('error', 'Campo Email vazio');
			return false;
		}

		if (!!!userForm.password) {
			buildToast('error', 'Campo Senha vazio');
			return false;
		}

		return true;
	};

	const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (verifyInputs()) {
			try {
				await register(userForm);
				setUserForm(buildUserForm());

				buildToast('success', 'Conta criada!');

				navigate('/');
			} catch (error) {
				buildToast('error', error as string);
			}
		}
	};

	return (
		<SignUpRoot className="container">
			<div className="row">
				<div className="col-lg-6">
					<AuthHero img={HeroImg} />
				</div>
				<div className="col-lg-6">
					<SignInTitle>
						<h2>CONTROLE SEUS GASTOS</h2>
					</SignInTitle>

					<Form className="container">
						<Row className="row mb-3">
							<InputRoot className="input-group">
								<div className="input-group-prepend">
									<Span
										className="input-group-text"
										id="inputGroup-sizing-default"
									>
										Nome
									</Span>
								</div>
								<InputWrapper
									value={userForm.firstName}
									onChange={setFirstName}
									type="text"
									className="form-control"
								/>
							</InputRoot>
						</Row>

						<Row className="row mb-3">
							<InputRoot className="input-group">
								<div className="input-group-prepend">
									<Span
										className="input-group-text"
										id="inputGroup-sizing-default"
									>
										Sobrenome
									</Span>
								</div>
								<InputWrapper
									value={userForm.lastName}
									onChange={setLastName}
									type="text"
									className="form-control"
								/>
							</InputRoot>
						</Row>

						<Row className="row mb-3">
							<InputRoot className="input-group">
								<div className="input-group-prepend">
									<Span
										className="input-group-text"
										id="inputGroup-sizing-default"
									>
										Email
									</Span>
								</div>
								<InputWrapper
									value={userForm.email}
									onChange={setEmail}
									type="email"
									className="form-control"
								/>
							</InputRoot>
						</Row>

						<Row className="row mb-3">
							<InputRoot className="input-group">
								<div className="input-group-prepend">
									<Span
										className="input-group-text"
										id="inputGroup-sizing-default"
									>
										Senha
									</Span>
								</div>
								<InputWrapper
									value={userForm.password || ''}
									onChange={setPassword}
									type="password"
									className="form-control"
								/>
							</InputRoot>
						</Row>

						<Row className="row mb-3">
							<LinkButton className="btn" to="/">
								Voltar
							</LinkButton>
						</Row>

						<Row className="row mb-3">
							<Button className="btn" onClick={handleSubmit}>
								Criar Conta
							</Button>
						</Row>
					</Form>
				</div>
			</div>
		</SignUpRoot>
	);
};
