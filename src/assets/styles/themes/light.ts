import { ThemeNames } from '../../../enums/theme-names.enum';
import { ThemeV2 } from '../../../interfaces/theme.interface';

export const LightTheme: ThemeV2 = {
	title: ThemeNames.LIGHT,
	colors: {
		primary: '#dcdcdc',
		secondary: '#ffffff',
		tertiary: '#f5f5f5',

		white: '#000',
		black: '#fff',
		gray: '#bfbfbf',

		success: '#03bb85',
		info: '#3b5998',
		warning: '#ff6961',
	},
};
