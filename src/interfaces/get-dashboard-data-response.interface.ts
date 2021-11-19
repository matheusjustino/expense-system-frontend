import { BarChartBoxData } from './bar-chart-box-data.interface';
import { HistoryBoxData } from './history-box-data.interface';

export interface GetDashboardDataResponse {
	relationGainsRecurrentEventual: BarChartBoxData[];
	relationExpensesRecurrentEventual: BarChartBoxData[];
	totalGains: number;
	totalExpenses: number;
	historyData: HistoryBoxData[];
}
