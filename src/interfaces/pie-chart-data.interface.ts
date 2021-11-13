import { DarkColors } from '../enums/dark-colors.enum';

export interface PieChartData {
	name: 'Entradas' | 'Saídas';
	totalValue: number;
	percent: number;
	color: DarkColors;
}
