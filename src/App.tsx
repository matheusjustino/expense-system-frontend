import React from 'react';

import './assets/styles/global-style.scss';

// CONTEXTS
import { ThemeProvider } from './contexts/theme.context';

// COMPONENTS
import AuthPage from './pages/auth';

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<AuthPage></AuthPage>
		</ThemeProvider>
	);
};

export default App;
