import React from 'react';

import GlobalStyleComposed from './assets/styles/global-style';

// CONTEXTS
import { ThemeProvider } from './contexts/theme.context';

// COMPONENTS
import { AuthPage } from './pages/sign-in';
import { Routes } from './routes/router';

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<GlobalStyleComposed />
			{/* <AuthPage></AuthPage> */}
			<Routes />
		</ThemeProvider>
	);
};

export default App;
