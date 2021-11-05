import React from 'react';

import GlobalStyleComposed from './assets/styles/global-style';

// CONTEXTS
import { ThemeProvider } from './contexts/theme.context';

// COMPONENTS
import { AuthPage } from './pages/auth';

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<GlobalStyleComposed />
			<AuthPage></AuthPage>
		</ThemeProvider>
	);
};

export default App;
