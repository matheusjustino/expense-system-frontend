// ENUMS
import { DarkColors } from '../enums/dark-colors.enum';
import { ListDataFrequency } from '../enums/list-data-frequency.enum';

// INTERFACES
import { BarChartBoxData } from '../interfaces/bar-chart-box-data.interface';
import { HistoryBoxData } from '../interfaces/history-box-data.interface';

// MOCKS
import { expenses } from '../repositories/expenses';
import { gains } from '../repositories/gains';

interface FakeApiGet {
	totalGains: number;
	totalExpenses: number;
	historyData: HistoryBoxData[];
	relationExpensesRecurrentEventual: BarChartBoxData[];
	relationGainsRecurrentEventual: BarChartBoxData[];
}

interface Months {
	value: number;
	label: string;
}

class FakeApi {
	public get(
		monthSelected: number,
		yearSelected: number,
		months: readonly Months[],
	): Promise<FakeApiGet> {
		return new Promise(async (resolve) => {
			// await fetch(
			// 	'https://api.github.com/users/{user}/repos?per_page=100',
			// )
			// 	.then((res) => res.json())
			// 	.then((res) => console.log(res));

			const totalExpenses = expenses.reduce((prev, curr) => {
				const date = new Date(curr.date);
				const year = date.getFullYear();
				const month = date.getMonth() + 1;

				if (month === monthSelected && year === yearSelected) {
					return prev + Number(curr.amount);
				}
				return prev;
			}, 0);

			const totalGains = gains.reduce((prev, curr) => {
				const date = new Date(curr.date);
				const year = date.getFullYear();
				const month = date.getMonth() + 1;

				if (month === monthSelected && year === yearSelected) {
					return prev + Number(curr.amount);
				}
				return prev;
			}, 0);

			const historyDataResponse = this.calculateHistoryData(
				yearSelected,
				months,
			);

			const relationExpensesRecurrentEventual =
				this.calculateRelationExpensesRecurrentVersusEventual(
					monthSelected,
					yearSelected,
				);
			const relationGainsRecurrentEventual =
				this.calculateRelationGainsRecurrentVersusEventual(
					monthSelected,
					yearSelected,
				);

			resolve({
				totalGains,
				totalExpenses,
				historyData: historyDataResponse,
				relationExpensesRecurrentEventual,
				relationGainsRecurrentEventual,
			});
		});
	}

	private calculateRelationExpensesRecurrentVersusEventual(
		monthSelected: number,
		yearSelected: number,
	) {
		const [amountRecurrent, amountEventual] = expenses
			.filter((expense) => {
				const date = new Date(expense.date);
				const month = date.getMonth() + 1;
				const year = date.getFullYear();

				return month === monthSelected && year === yearSelected;
			})
			.reduce(
				(prev, curr) => {
					if (curr.frequency === ListDataFrequency.RECURRENT) {
						return [prev[0] + Number(curr.amount), prev[1]];
					} else {
						return [prev[0], prev[1] + Number(curr.amount)];
					}
				},
				[0, 0],
			);

		const total = amountRecurrent + amountEventual;
		const recurrentPercent =
			total > 0
				? Number(((amountRecurrent / total) * 100).toFixed(1))
				: 0;
		const eventualPercent =
			total > 0 ? Number((100 - recurrentPercent).toFixed(1)) : 0;

		const response: BarChartBoxData[] = [
			{
				name: 'Recorrentes',
				amount: amountRecurrent,
				percent: recurrentPercent,
				color: DarkColors.INFO,
			},
			{
				name: 'Eventuais',
				amount: amountEventual,
				percent: eventualPercent,
				color: DarkColors.WARNING,
			},
		];

		return response;
	}

	private calculateRelationGainsRecurrentVersusEventual(
		monthSelected: number,
		yearSelected: number,
	) {
		const [amountRecurrent, amountEventual] = gains
			.filter((gain) => {
				const date = new Date(gain.date);
				const month = date.getMonth() + 1;
				const year = date.getFullYear();

				return month === monthSelected && year === yearSelected;
			})
			.reduce(
				(prev, curr) => {
					if (curr.frequency === ListDataFrequency.RECURRENT) {
						return [prev[0] + Number(curr.amount), prev[1]];
					} else {
						return [prev[0], prev[1] + Number(curr.amount)];
					}
				},
				[0, 0],
			);

		const total = amountRecurrent + amountEventual;
		const recurrentPercent =
			total > 0
				? Number(((amountRecurrent / total) * 100).toFixed(1))
				: 0;
		const eventualPercent =
			total > 0 ? Number((100 - recurrentPercent).toFixed(1)) : 0;

		const response: BarChartBoxData[] = [
			{
				name: 'Recorrentes',
				amount: amountRecurrent,
				percent: recurrentPercent,
				color: DarkColors.INFO,
			},
			{
				name: 'Eventuais',
				amount: amountEventual,
				percent: eventualPercent,
				color: DarkColors.WARNING,
			},
		];

		return response;
	}

	private calculateHistoryData(
		yearSelected: number,
		months: readonly Months[],
	) {
		const currentDate = new Date();
		const currentMonth = currentDate.getMonth() + 1;
		const currentYear = currentDate.getFullYear();

		const historyDataResponse = months
			.filter(
				(month) =>
					yearSelected < currentYear ||
					(month.value <= currentMonth &&
						currentYear === yearSelected),
			)
			.map((month): HistoryBoxData => {
				const amountGains = gains.reduce((prev, curr) => {
					const date = new Date(curr.date);
					const monthGain = date.getMonth() + 1;
					const yearGain = date.getFullYear();

					if (
						monthGain === month.value &&
						yearGain === yearSelected
					) {
						return prev + Number(curr.amount);
					}

					return prev;
				}, 0);

				const amountExpense = expenses.reduce((prev, curr) => {
					const date = new Date(curr.date);
					const monthExpense = date.getMonth() + 1;
					const yearExpense = date.getFullYear();

					if (
						monthExpense === month.value &&
						yearExpense === yearSelected
					) {
						return prev + Number(curr.amount);
					}

					return prev;
				}, 0);

				const response: HistoryBoxData = {
					month: month.label.substr(0, 3),
					gains: amountGains,
					expenses: amountExpense,
				};

				return response;
			});

		return historyDataResponse;
	}
}

const fakeApi = new FakeApi();
export { fakeApi };
