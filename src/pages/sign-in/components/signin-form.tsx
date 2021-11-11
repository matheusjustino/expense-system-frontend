import React, {
	MouseEvent,
	ChangeEvent,
	useState,
	useRef,
	useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
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
			email: 'a@a.com',
			password: '123',
		} as Login;
	};

	const [loginForm, setLoginForm] = useState<Login>(buildLoginForm());
	const isMounted = useRef(true);
	const navigate = useNavigate();

	const { signIn } = useAuth();

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
			console.log('campo email vazio');
			return false;
		}

		if (!!!loginForm.password) {
			console.log('campo password vazio');
			return false;
		}

		return true;
	};

	const handleSubmit = async (
		e: MouseEvent<HTMLButtonElement>,
	): Promise<void> => {
		e.preventDefault();

		if (!verifyInputs()) {
			console.log('form com problema');
			return;
		}

		await signIn(loginForm);
		setLoginForm(buildLoginForm());
		navigate('/dashboard');
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
					/>
				</Row>
				<Row className="row">
					<Input
						value={loginForm.password}
						onChange={setPassword}
						spanName="Senha"
						type="password"
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
