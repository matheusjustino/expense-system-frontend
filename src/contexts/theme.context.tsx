import React, { createContext, useContext, useState } from 'react';

interface Theme {
	colors: {
		background: string;
		primary: {
			main: string;
			dark: string;
			light: string;
			text: string;
		};
		danger: {
			main: string;
			dark: string;
			text: string;
		};
	};
}

interface defaultThemeContext {
	theme: Theme;
	toggleTheme: () => void;
}

export const ThemeNames = {
	light: 'light',
	dark: 'dark',
};

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

const allThemes = {
	light,
};

const ThemeContext = createContext({} as defaultThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState(true);

	const theme = isLightTheme ? allThemes['light'] : allThemes['light'];

	const toggleTheme = () => {
		setIsLightTheme((isLightTheme) => !isLightTheme);
	};

	const themeContext = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={themeContext}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	return context;
};
