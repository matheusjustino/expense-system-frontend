import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

// INTERFACES
import { Theme } from '../interfaces/theme.interface';

// ENUMS
import { ThemeNames } from '../enums/theme-names.enum';
import { LocalStorageKeys } from '../enums/local-storage-keys.enum';

// THEMES
import { DarkTheme, LightTheme } from '../assets/styles/themes';

interface defaultThemeContext {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext({} as defaultThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(() => {
		const localTheme = localStorage.getItem(LocalStorageKeys.THEME);
		const initTheme = !!localTheme ? JSON.parse(localTheme) : LightTheme;

		return initTheme;
	});

	const toggleTheme = () => {
		if (theme.title === ThemeNames.LIGHT) {
			localStorage.setItem(
				LocalStorageKeys.THEME,
				JSON.stringify(DarkTheme),
			);
			setTheme(DarkTheme);
		} else {
			localStorage.setItem(
				LocalStorageKeys.THEME,
				JSON.stringify(LightTheme),
			);
			setTheme(LightTheme);
		}
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
