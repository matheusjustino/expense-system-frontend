import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

// INTERFACES
import { Theme } from '../interfaces/theme.interface';

interface defaultThemeContext {
	theme: Theme;
	toggleTheme: () => void;
}

const light: Theme = {
	colors: {
		background: '#fdfaf6',
		primary: {
			main: '#ffc107',
			dark: '#c79100',
			light: '#fff350',
			text: '#2a2a2a',
		},
		danger: {
			main: '#ff3d00',
			dark: '#b22a00',
			text: '#212121',
		},
	},
};

const dark: Theme = {
	colors: {
		...light.colors,
		background: '#2a2a2a',
	},
};

const allThemes = {
	light,
	dark,
};

const ThemeContext = createContext({} as defaultThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState(true);

	const theme = isLightTheme ? allThemes['light'] : allThemes['dark'];

	const toggleTheme = () => {
		setIsLightTheme((isLightTheme) => !isLightTheme);
	};

	const themeContext = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={themeContext}>
			<StyledProvider theme={theme}>{children}</StyledProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	return context;
};
