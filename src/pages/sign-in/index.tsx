import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Title } from './components/title';
import { Hero } from './components/hero';
import { SignIn } from './components/signin';

export const AuthPage: React.FC = () => {
	return (
		<AuthPageRoot className="container">
			<div className="row">
				<div className="col-lg-12 mb-5">
					<Title text="GERENCIE SUAS FINANÇAS" size={2} />
				</div>

				<div className="col-lg-6">
					<Hero />
				</div>

				<div className="col-lg-6">
					<SignIn />
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
