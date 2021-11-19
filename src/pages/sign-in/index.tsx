import React, {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	MouseEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { AuthHero } from '../../components/auth-hero';

// STYLES
import {
	SignInPageRoot,
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
import HeroImg from '../../assets/images/undraw_wallet.svg';

// INTERFACES
import { Login } from '../../interfaces/login.interface';

// CONTEXT
import { useAuth } from '../../contexts/auth.context';
import { useToast } from '../../contexts/toast.context';

export const SignInPage: React.FC = () => {
	const buildLoginForm = (): Login => {
		return {
			email: '',
			password: '',
		} as Login;
	};

	const [loginForm, setLoginForm] = useState<Login>(buildLoginForm());
	const isMounted = useRef(true);
	const navigate = useNavigate();

	const { signIn } = useAuth();
	const { buildToast } = useToast();

	useEffect(() => {
		if (isMounted.current) {
			return () => {
				isMounted.current = false;
			};
		}
	}, []);

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
		if (!!!loginForm.email) {
			buildToast('error', 'Campo email vazio');
			return false;
		}

		if (!!!loginForm.password) {
			buildToast('error', 'Campo senha vazio');
			return false;
		}

		return true;
	};

	const handleSubmit = async (
		e: MouseEvent<HTMLButtonElement>,
	): Promise<void> => {
		e.preventDefault();

		if (!verifyInputs()) {
			return;
		}

		try {
			await signIn(loginForm);
			setLoginForm(buildLoginForm());

			buildToast('success', 'Logado com sucesso!');

			navigate('/dashboard');
		} catch (error: any) {
			buildToast('error', error);
		}
	};

	return (
		<SignInPageRoot className="container">
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
										Email
									</Span>
								</div>
								<InputWrapper
									value={loginForm.email}
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
									value={loginForm.password}
									onChange={setPassword}
									type="password"
									className="form-control"
								/>
							</InputRoot>
						</Row>

						<Row className="row mb-3">
							<Button className="btn" onClick={handleSubmit}>
								Entrar
							</Button>
						</Row>

						<Row className="row">
							<LinkButton className="btn" to="/signup">
								Criar Conta
							</LinkButton>
						</Row>
					</Form>
				</div>
			</div>
		</SignInPageRoot>
	);
};
