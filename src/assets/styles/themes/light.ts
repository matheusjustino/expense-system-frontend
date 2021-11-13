// ENUMS
import { ThemeNames } from '../../../enums/theme-names.enum';
import { LightColors } from '../../../enums/light-colors.enum';

// INTERFACES
import { Theme } from '../../../interfaces/theme.interface';

export const LightTheme: Theme = {
	title: ThemeNames.LIGHT,
	colors: {
		primary: LightColors.PRIMARY,
		secondary: LightColors.SECONDARY,
		tertiary: LightColors.TERTIARY,

		white: LightColors.WHITE,
		black: LightColors.BLACK,
		gray: LightColors.GRAY,

		success: LightColors.SUCCESS,
		info: LightColors.INFO,
		warning: LightColors.WARNING,
	},
};
