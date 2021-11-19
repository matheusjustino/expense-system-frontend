import React, {
	useState,
	useEffect,
	useMemo,
	useCallback,
	ChangeEvent,
} from 'react';

// SERVICES
import { getDashboard } from '../../services/account-post.service';

// UTILS
import { MonthsValues } from '../../utils/months.utils';

// INTERFACES
import { DashboardPageTotalsData } from '../../interfaces/dashboard-page-totals-data.interface';

// IMAGES
import happyImg from '../../assets/images/happy.svg';
import sadImg from '../../assets/images/sad.svg';
import grinningImg from '../../assets/images/grinning.svg';
import opsImg from '../../assets/images/ops.svg';

// ENUMS
import { DarkColors } from '../../enums/dark-colors.enum';

// STYLES
import { Container, SpinnerContainer, Content } from './styles';

// COMPONENTS
import { ContentHeader } from '../../components/content-header';
import { SelectInput } from '../../components/select-input';
import { WalletBox } from '../../components/wallet-box';
import { MessageBox } from '../../components/message-box';
import { PieChart } from '../../components/pie-chart';
import { PieChartData } from '../../interfaces/pie-chart-data.interface';
import { HistoryBox } from '../../components/history-box';
import { BarChartBox } from '../../components/bar-chart-box';
import { Spinner } from '../../components/spinner';

export const DashboardPage: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [totalValues, setTotalValues] = useState<DashboardPageTotalsData>(
		{} as DashboardPageTotalsData,
	);
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

	useEffect(() => {
		(async () => {
			!isLoading && setIsLoading(true);

			const {
				totalGains,
				totalExpenses,
				historyData,
				relationExpensesRecurrentEventual,
				relationGainsRecurrentEventual,
			} = await getDashboard({
				month: monthSelected,
				year: yearSelected,
			});

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
						description:
							'Neste mês você gastou mais do que deveria!',
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
						footerText:
							'Tenha cuidado. Tente poupar mais da próxima.',
						icon: grinningImg,
					};
				}
			};

			const messageBox = buildMessageBoxValues(balance);

			const apiResponse: DashboardPageTotalsData = {
				totalExpenses,
				totalGains,
				balance,
				historyData,
				relationExpensesRecurrentEventual,
				relationGainsRecurrentEventual,
				messageBox,
			};

			setTotalValues(apiResponse);
			setIsLoading(false);
		})();
	}, [monthSelected, yearSelected]);

	const relationExpensesGains = useMemo(() => {
		const data: PieChartData[] = [
			{
				name: 'Entradas',
				totalValue: 0,
				percent: 0,
				color: DarkColors.INFO,
			},
			{
				name: 'Saídas',
				totalValue: 0,
				percent: 0,
				color: DarkColors.WARNING,
			},
		];

		if (totalValues) {
			const total = totalValues.totalGains + totalValues.totalExpenses;

			const gainsPercent =
				total > 0
					? ((totalValues.totalGains / total) * 100).toFixed(1)
					: 0;
			const expensesPercent =
				total > 0
					? ((totalValues.totalExpenses / total) * 100).toFixed(1)
					: 0;

			data[0].totalValue = totalValues.totalGains;
			data[0].percent = Number(gainsPercent);

			data[1].totalValue = totalValues.totalExpenses;
			data[1].percent = Number(expensesPercent);
		}

		return data;
	}, [totalValues]);

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

	const years = useMemo(() => {
		return [
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
	}, []);

	return (
		<Container>
			{!isLoading ? (
				<React.Fragment>
					<ContentHeader
						title="Dashboard"
						lineColor={DarkColors.INFO}
					>
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
							amount={totalValues.balance}
							color={DarkColors.SUCCESS}
							icon="dollar"
						/>

						<WalletBox
							title="Entradas"
							footerLabel="Atualizado com base nas entradas"
							amount={totalValues.totalGains}
							color={DarkColors.INFO}
							icon="arrowUp"
						/>

						<WalletBox
							title="Saídas"
							footerLabel="Atualizado com base nas saídas"
							amount={totalValues.totalExpenses}
							color={DarkColors.WARNING}
							icon="arrowDown"
						/>

						<MessageBox
							title={totalValues.messageBox.title}
							description={totalValues.messageBox.description}
							footerText={totalValues.messageBox.footerText}
							icon={totalValues.messageBox.icon}
						/>

						<PieChart data={relationExpensesGains} />

						<HistoryBox
							data={totalValues.historyData}
							lineColorGains={DarkColors.INFO}
							lineColorExpenses={DarkColors.WARNING}
							historyFilter="month"
						/>

						<BarChartBox
							data={totalValues.relationExpensesRecurrentEventual}
							title={`Saídas de ${monthLabel}`}
						/>

						<BarChartBox
							data={totalValues.relationGainsRecurrentEventual}
							title={`Entradas de ${monthLabel}`}
						/>
					</Content>
				</React.Fragment>
			) : (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			)}
		</Container>
	);
};
