import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Root } from './root';
import { Title } from './title';
import { Input } from './input';
import { Button } from './button';

export const SignIn: React.FC = () => {
	return (
		<Root>
			<Title>
				<h3>Fazer Login</h3>
			</Title>

			<form className="container">
				<div className="row">
					<div className="col-3">
						<label htmlFor="email">Email</label>
					</div>

					<div className="col-9">
						<Input type="text" name="email" id="email" />
					</div>
				</div>

				<div className="row mt-4 mb-4">
					<div className="col-3">
						<label htmlFor="password">Senha</label>
					</div>

					<div className="col-9">
						<Input type="text" name="password" id="password" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Button name="Entrar" />
					</div>
				</div>
			</form>
		</Root>
	);
};
