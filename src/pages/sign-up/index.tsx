import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Hero } from '../../components/hero';
import { SignUpForm } from './components/signup-form';

// IMAGES
import HeroImg from '../../assets/images/undraw_make_it_rain.svg';

export const SignUpPage: React.FC = () => {
	return (
		<SignUpRoot className="container">
			<div className="row">
				<div className="col-lg-6">
					<Hero img={HeroImg} />
				</div>
				<div className="col-lg-6">
					<SignUpForm />
				</div>
			</div>
		</SignUpRoot>
	);
};

const SignUpRoot = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;
