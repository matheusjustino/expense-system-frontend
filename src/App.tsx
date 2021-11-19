import React from 'react';

import GlobalStyleComposed from './assets/styles/global-style';

// CONTEXTS
import { ToastProvider } from './contexts/toast.context';
import { ThemeProvider } from './contexts/theme.context';
import { AuthProvider } from './contexts/auth.context';

// COMPONENTS
import { Routes } from './routes/router';

const App: React.FC = () => {
	return (
		<ToastProvider>
			<ThemeProvider>
				<AuthProvider>
					<GlobalStyleComposed />
					<Routes />
				</AuthProvider>
			</ThemeProvider>
		</ToastProvider>
	);
};

export default App;
