import { DarkColors } from '../enums/dark-colors.enum';

export interface BarChartBoxData {
	name: 'Recorrentes' | 'Eventuais';
	amount: number;
	percent: number;
	color: DarkColors;
}
