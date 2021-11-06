import React from 'react';

import GlobalStyleComposed from './assets/styles/global-style';

// CONTEXTS
import { ThemeProvider } from './contexts/theme.context';

// COMPONENTS
import { Routes } from './routes/router';

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<GlobalStyleComposed />
			<Routes />
		</ThemeProvider>
	);
};

export default App;
