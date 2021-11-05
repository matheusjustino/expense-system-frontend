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
		color: ${(props: GlobalStyleProps) => props.theme.colors.background};
		box-sizing: border-box;
	}

	body {
		margin: 0;
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
