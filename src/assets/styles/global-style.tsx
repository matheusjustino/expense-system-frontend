import React from 'react';
import { createGlobalStyle } from 'styled-components';

// INTERFACES
import { Theme } from '../../interfaces/theme.interface';

import './global-style.scss';

interface GlobalStyleProps {
	theme: Theme;
}

const GlobalStyle = createGlobalStyle`
	html {
		font-family: 'Poppins', sans-serif;
		font-size: 100%;
		box-sizing: border-box;
		color: ${(props: GlobalStyleProps) => props.theme.colors.text};
	}

	body {
		margin: 0;
		background: ${(props: GlobalStyleProps) => props.theme.colors.background};
	}

	* {
		font-size: 1rem;
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
