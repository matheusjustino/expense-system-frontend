export interface DashboardApiResult {
	totalGains: number;
	totalExpenses: number;
	historyData: {
		month: string;
		gains: number;
		expenses: number;
	}[];
	relationGainsRecurrentEventual: {
		name: 'Recorrentes' | 'Eventuais';
		recurrentAmount: number;
		recurrentPercent: number;
		eventualAmount: number;
		eventualPercent: number;
	};
	relationExpensesRecurrentEventual: {
		name: 'Recorrentes' | 'Eventuais';
		recurrentAmount: number;
		recurrentPercent: number;
		eventualAmount: number;
		eventualPercent: number;
	};
}
