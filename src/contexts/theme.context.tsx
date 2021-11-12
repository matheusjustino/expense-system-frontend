import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

// INTERFACES
import { ThemeV2 } from '../interfaces/theme.interface';

// ENUMS
import { ThemeNames } from '../enums/theme-names.enum';

// THEMES
import { DarkTheme, LightTheme } from '../assets/styles/themes';

interface defaultThemeContext {
	theme: ThemeV2;
	toggleTheme: () => void;
}

const allThemes = {
	light: LightTheme,
	dark: DarkTheme,
};

const ThemeContext = createContext({} as defaultThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState(false);

	const theme = isLightTheme
		? allThemes[ThemeNames.LIGHT]
		: allThemes[ThemeNames.DARK];

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
