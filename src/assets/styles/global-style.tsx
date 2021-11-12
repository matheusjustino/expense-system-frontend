import React from 'react';
import { createGlobalStyle } from 'styled-components';

import './global-style.scss';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100%;

		background-color: ${(props) => props.theme.colors.primary};
	}

	*, button, input {
		border: 0;
		outline: 0;
		font-family: 'Roboto', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;

const GlobalStyleComposed = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
		</React.Fragment>
	);
};

export default GlobalStyleComposed;
