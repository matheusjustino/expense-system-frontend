export interface Theme {
	colors: {
		background: string;
		text: string;
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

export interface ThemeV2 {
	title: string;
	colors: {
		primary: string;
		secondary: string;
		tertiary: string;

		white: string;
		black: string;
		gray: string;

		success: string;
		info: string;
		warning: string;
	};
}
