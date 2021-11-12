import { ThemeNames } from '../../../enums/theme-names.enum';
import { ThemeV2 } from '../../../interfaces/theme.interface';

export const DarkTheme: ThemeV2 = {
	title: ThemeNames.DARK,
	colors: {
		primary: '#1b1f38',
		secondary: '#252a48',
		tertiary: '#313862',

		white: '#fff',
		black: '#000',
		gray: '#bfbfbf',

		success: '#4e41f0',
		info: '#f7931b',
		warning: '#e44c4e',
	},
};
