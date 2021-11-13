import React, { useState, useMemo, ChangeEvent } from 'react';

// UTILS
import { MonthsValues } from '../../utils/months.utils';

// IMAGES
import happyImg from '../../assets/images/happy.svg';
import sadImg from '../../assets/images/sad.svg';
import grinningImg from '../../assets/images/grinning.svg';

// ENUMS
import { DarkColors } from '../../enums/dark-colors.enum';

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

export const DashboardPage: React.FC = () => {
	const [monthSelected, setMonthSelected] = useState<number>(
		new Date().getMonth() + 1,
	);
	const [yearSelected, setYearSelected] = useState<number>(
		new Date().getFullYear(),
	);

	const months = useMemo(() => MonthsValues, []);

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
					title: 'Muito bem',
					description: 'Sua carteira está positiva!',
					footerText:
						'Continue assim. Considere investir o seu saldo.',
					icon: happyImg,
				};
			} else if (balance < 0) {
				return {
					title: 'Que triste',
					description: 'Neste mês você gastou mais do que deveria!',
					footerText:
						'Verifique seus gastos e tente cortar os desnecessários.',
					icon: sadImg,
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

	const handleChangeMonthSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		setMonthSelected(Number(event.target.value));
	};

	const handleChangeYearSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		setYearSelected(Number(event.target.value));
	};

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
			</Content>
		</Container>
	);
};
