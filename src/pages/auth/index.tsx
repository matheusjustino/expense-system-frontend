import React from 'react';

// CONTEXTS
import { useTheme } from '../../contexts/theme.context';

const AuthPage: React.FC = () => {
	const { toggleTheme } = useTheme();

	const handleToggleTheme = () => {
		toggleTheme();
	};

	return (
		<React.Fragment>
			<h1>Auth Page</h1>
			<button onClick={handleToggleTheme}>Toggle Theme</button>
		</React.Fragment>
	);
};

export default AuthPage;
