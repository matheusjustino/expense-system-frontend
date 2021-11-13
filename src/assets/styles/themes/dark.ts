// ENUMS
import { ThemeNames } from '../../../enums/theme-names.enum';
import { DarkColors } from '../../../enums/dark-colors.enum';

// INTERFACES
import { Theme } from '../../../interfaces/theme.interface';

export const DarkTheme: Theme = {
	title: ThemeNames.DARK,
	colors: {
		primary: DarkColors.PRIMARY,
		secondary: DarkColors.SECONDARY,
		tertiary: DarkColors.TERTIARY,

		white: DarkColors.WHITE,
		black: DarkColors.BLACK,
		gray: DarkColors.GRAY,

		success: DarkColors.SUCCESS,
		info: DarkColors.INFO,
		warning: DarkColors.WARNING,
	},
};
