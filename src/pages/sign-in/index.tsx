import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Hero } from './components/hero';
import { SignInForm } from './components/signin-form';

export const AuthPage: React.FC = () => {
	return (
		<AuthPageRoot className="container">
			<div className="row">
				<div className="col-lg-6">
					<Hero />
				</div>

				<div className="col-lg-6">
					<SignInForm />
				</div>
			</div>
		</AuthPageRoot>
	);
};

const AuthPageRoot = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;
