import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Hero } from './components/hero';
import { SignIn } from './components/signin';

const Root = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AuthPage: React.FC = () => {
	return (
		<React.Fragment>
			<Root className="container">
				<div className="row">
					<div className="col-lg-6">
						<Hero />
					</div>
					<div className="col-lg-6">
						<SignIn />
					</div>
				</div>
			</Root>
		</React.Fragment>
	);
};
