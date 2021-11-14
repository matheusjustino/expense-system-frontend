import React, { useState, useMemo, useCallback, ChangeEvent } from 'react';

// UTILS
import { MonthsValues } from '../../utils/months.utils';

// INTERFACES
import { HistoryBoxData } from '../../interfaces/history-box-data.interface';
import { BarChartBoxData } from '../../interfaces/bar-chart-box-data.interface';

// IMAGES
import happyImg from '../../assets/images/happy.svg';
import sadImg from '../../assets/images/sad.svg';
import grinningImg from '../../assets/images/grinning.svg';
import opsImg from '../../assets/images/ops.svg';

// ENUMS
import { DarkColors } from '../../enums/dark-colors.enum';
import { ListDataFrequency } from '../../enums/list-data-frequency.enum';

// STYLES
import { Container, Content } from './styles';

// MOCKS
import { expenses } from '../../repositories/expenses';
import { gains } from '../../repositories/gains';

// COMPONENTS
import { ContentHeader } from '../../components/content-header';
import { SelectInput } from '../../components/select-input';
import { WalletBox } from '../../components/wallet-box';
import { MessageBox } from '../../components/message-box';
import { PieChart } from '../../components/pie-chart';
import { PieChartData } from '../../interfaces/pie-chart-data.interface';
import { HistoryBox } from '../../components/history-box';
import { BarChartBox } from '../../components/bar-chart-box';

export const DashboardPage: React.FC = () => {
	const [monthSelected, setMonthSelected] = useState<number>(
		new Date().getMonth() + 1,
	);
	const [yearSelected, setYearSelected] = useState<number>(
		new Date().getFullYear(),
	);

	const months = useMemo(() => MonthsValues, []);
	const monthLabel = useMemo(
		() =>
			months
				.filter((month) => month.value === monthSelected)
				.map((res) => res.label),
		[monthSelected],
	);

	const totals = useMemo(() => {
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

		const balance = totalGains - totalExpenses;

		const buildMessageBoxValues = (balance: number) => {
			if (balance > 0) {
				return {
					title: 'Muito bem!',
					description: 'Sua carteira está positiva!',
					footerText:
						'Continue assim. Considere investir o seu saldo.',
					icon: happyImg,
				};
			} else if (balance < 0) {
				return {
					title: 'Que triste!',
					description: 'Neste mês você gastou mais do que deveria!',
					footerText:
						'Verifique seus gastos e tente cortar os desnecessários.',
					icon: sadImg,
				};
			} else if (totalGains === 0 && totalExpenses === 0) {
				return {
					title: 'Opss...!',
					description:
						'Neste mês ainda não há registros de entradas ou saídas!',
					footerText:
						'Parece que você não fez nenhum registro no mês selecionado.',
					icon: opsImg,
				};
			} else {
				return {
					title: 'Ufaa!',
					description: 'Neste mês você ficou no limite!',
					footerText: 'Tenha cuidado. Tente poupar mais da próxima.',
					icon: grinningImg,
				};
			}
		};

		const messageBox = buildMessageBoxValues(balance);

		return {
			totalExpenses,
			totalGains,
			balance,
			messageBox,
		};
	}, [monthSelected, yearSelected]);

	const relationExpensesGains = useMemo(() => {
		const total = totals.totalGains + totals.totalExpenses;

		const gainsPercent =
			total > 0 ? ((totals.totalGains / total) * 100).toFixed(1) : 0;
		const expensesPercent =
			total > 0 ? ((totals.totalExpenses / total) * 100).toFixed(1) : 0;

		const data: PieChartData[] = [
			{
				name: 'Entradas',
				totalValue: totals.totalGains,
				percent: Number(gainsPercent),
				color: DarkColors.INFO,
			},
			{
				name: 'Saídas',
				totalValue: totals.totalExpenses,
				percent: Number(expensesPercent),
				color: DarkColors.WARNING,
			},
		];

		return data;
	}, [totals]);

	const historyData = useMemo(() => {
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
	}, [yearSelected]);

	const relationExpensesRecurrentEventual = useMemo((): BarChartBoxData[] => {
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
	}, [totals]);

	const relationGainsRecurrentEventual = useMemo((): BarChartBoxData[] => {
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
	}, [totals]);

	const handleChangeMonthSelect = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			setMonthSelected(Number(event.target.value));
		},
		[],
	);

	const handleChangeYearSelect = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			setYearSelected(Number(event.target.value));
		},
		[],
	);

	const years = [
		{
			value: 2020,
			label: '2020',
		},
		{
			value: 2021,
			label: '2021',
		},
		{
			value: 2022,
			label: '2022',
		},
	];

	return (
		<Container>
			<ContentHeader title="Dashboard" lineColor={DarkColors.INFO}>
				<SelectInput
					onChange={handleChangeMonthSelect}
					defaultValue={monthSelected}
					options={months}
				/>
				<SelectInput
					onChange={handleChangeYearSelect}
					defaultValue={yearSelected}
					options={years}
				/>
			</ContentHeader>

			<Content>
				<WalletBox
					title="Saldo"
					footerLabel="Atualizado com base nas entradas e saídas"
					amount={totals.balance}
					color={DarkColors.SUCCESS}
					icon="dollar"
				/>

				<WalletBox
					title="Entradas"
					footerLabel="Atualizado com base nas entradas"
					amount={totals.totalGains}
					color={DarkColors.INFO}
					icon="arrowUp"
				/>

				<WalletBox
					title="Saídas"
					footerLabel="Atualizado com base nas saídas"
					amount={totals.totalExpenses}
					color={DarkColors.WARNING}
					icon="arrowDown"
				/>

				<MessageBox
					title={totals.messageBox.title}
					description={totals.messageBox.description}
					footerText={totals.messageBox.footerText}
					icon={totals.messageBox.icon}
				/>

				<PieChart data={relationExpensesGains} />

				<HistoryBox
					data={historyData}
					lineColorGains={DarkColors.INFO}
					lineColorExpenses={DarkColors.WARNING}
					historyFilter="month"
				/>

				<BarChartBox
					data={relationExpensesRecurrentEventual}
					title={`Saídas de ${monthLabel}`}
				/>

				<BarChartBox
					data={relationGainsRecurrentEventual}
					title={`Entradas de ${monthLabel}`}
				/>
			</Content>
		</Container>
	);
};
