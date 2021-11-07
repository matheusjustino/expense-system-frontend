import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Hero } from '../../components/hero';
import { SignInForm } from './components/signin-form';

// IMAGES
import HeroImg from '../../assets/images/undraw_wallet.svg';

export const SignInPage: React.FC = () => {
	return (
		<SignInPageRoot className="container">
			<div className="row">
				<div className="col-lg-6">
					<Hero img={HeroImg} />
				</div>

				<div className="col-lg-6">
					<SignInForm />
				</div>
			</div>
		</SignInPageRoot>
	);
};

const SignInPageRoot = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;
