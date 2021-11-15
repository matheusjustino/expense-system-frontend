// INTERFACES
import { BarChartBoxData } from './bar-chart-box-data.interface';
import { HistoryBoxData } from './history-box-data.interface';

export interface DashboardPageTotalsData {
	totalExpenses: number;
	totalGains: number;
	balance: number;
	historyData: HistoryBoxData[];
	relationExpensesRecurrentEventual: BarChartBoxData[];
	relationGainsRecurrentEventual: BarChartBoxData[];
	messageBox: {
		title: string;
		description: string;
		footerText: string;
		icon: string;
	};
}
