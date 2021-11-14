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
	const navigate = useNavigate();
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
		navigate('/');
		console.log('signup form');
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
