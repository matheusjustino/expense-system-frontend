import React, {
	useMemo,
	useCallback,
	useState,
	useEffect,
	ChangeEvent,
} from 'react';
import { useParams } from 'react-router';

// SERVICES
import { getRegisters } from '../../services/account-post.service';

// INTERFACES
import { ContentHeaderData } from '../../interfaces/content-header-data.interface';
import { ListPageData } from '../../interfaces/list-page-data.interface';

// ENUMS
import { ListDataFrequency } from '../../enums/list-data-frequency.enum';
import { DarkColors } from '../../enums/dark-colors.enum';

// UTILS
import { FormatCurrency } from '../../utils/format-currency.utils';
import { FormatDate } from '../../utils/format-date.utils';
import { MonthsValues } from '../../utils/months.utils';

// STYLES
import { Container, Content, Filters } from './styles';

// COMPONENTS
import { ContentHeader } from '../../components/content-header';
import { SelectInput } from '../../components/select-input';
import { HistoryFinanceCard } from '../../components/history-finance-card';
import { FindAccountPostResponse } from '../../interfaces/find-account-post-response.interface';
import { SpinnerContainer } from '../dashboard/styles';
import { Spinner } from '../../components/spinner';
import { useTheme } from '../../contexts/theme.context';
import { Theme } from '../../interfaces/theme.interface';

interface ListPageProps {
	type: string;
}

export const ListPage: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [apiResponse, setApiResponse] = useState<FindAccountPostResponse[]>(
		[],
	);
	const [data, setData] = useState<ListPageData[]>([]);
	const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
		ListDataFrequency.RECURRENT,
		ListDataFrequency.OCCASIONAL,
	]);
	const [monthFilterSelected, setMonthFilterSelected] = useState<number>(
		new Date().getMonth() + 1,
	);
	const [yearFilterSelected, setYearFilterSelected] = useState<number>(
		new Date().getFullYear(),
	);

	const { theme } = useTheme();
	const params = useParams() as ListPageProps;
	const { type } = params;

	useEffect((): void => {
		// Carregando os dados da API
		(async () => {
			!isLoading && setIsLoading(true);

			const apiResponse = await getRegisters({
				month: monthFilterSelected,
				year: yearFilterSelected,
				type: type === 'entry-balance' ? 'entry' : 'exit',
				frequency: frequencyFilterSelected,
			});

			setApiResponse(apiResponse);
			setIsLoading(false);
		})();
	}, [
		type,
		monthFilterSelected,
		yearFilterSelected,
		frequencyFilterSelected,
	]);

	useEffect((): void => {
		// Mapeando os dados da tela
		const listPageData = apiResponse.map((item) => {
			const response: ListPageData = buildApiResponse(item, theme);
			return response;
		});

		setData(listPageData);
	}, [apiResponse, theme]);

	const months = useMemo(() => MonthsValues, []);

	const contentHeaderData: ContentHeaderData = useMemo(() => {
		return type === 'entry-balance'
			? {
					text: 'Entradas',
					lineColor: DarkColors.SUCCESS,
			  }
			: {
					text: 'Saídas',
					lineColor: DarkColors.WARNING,
			  };
	}, [type]);

	const handleChangeMonthSelect = (
		event: ChangeEvent<HTMLSelectElement>,
	): void => {
		setMonthFilterSelected(Number(event.target.value));
	};

	const handleChangeYearSelect = (
		event: ChangeEvent<HTMLSelectElement>,
	): void => {
		setYearFilterSelected(Number(event.target.value));
	};

	const handleChangeFrequencyFilter = (
		frequency: ListDataFrequency,
	): void => {
		const alreadySelected = frequencyFilterSelected.includes(frequency);
		if (alreadySelected) {
			setFrequencyFilterSelected(
				frequencyFilterSelected.filter((item) => item !== frequency),
			);
		} else {
			setFrequencyFilterSelected([...frequencyFilterSelected, frequency]);
		}
	};

	const buildApiResponse = useCallback(
		(item: FindAccountPostResponse, { colors }: Theme): ListPageData => {
			const response: ListPageData = {
				id: item.id,
				description: item.description,
				amountFormatted: FormatCurrency(Number(item.amount)),
				frequency: item.frequency,
				dataFormatted: FormatDate(item.date),
				tagColor:
					item.frequency === ListDataFrequency.RECURRENT
						? colors.success
						: colors.warning,
			};

			return response;
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
			<ContentHeader
				title={contentHeaderData.text}
				lineColor={contentHeaderData.lineColor}
			>
				<SelectInput
					onChange={handleChangeMonthSelect}
					defaultValue={monthFilterSelected}
					options={months}
				/>
				<SelectInput
					onChange={handleChangeYearSelect}
					defaultValue={yearFilterSelected}
					options={years}
				/>
			</ContentHeader>

			<Filters>
				<button
					type="button"
					className={`tag-filter tag-filter-recurrent ${
						frequencyFilterSelected.includes(
							ListDataFrequency.RECURRENT,
						) && 'tag-actived'
					}`}
					onClick={() =>
						handleChangeFrequencyFilter(ListDataFrequency.RECURRENT)
					}
				>
					Recorrentes
				</button>

				<button
					type="button"
					className={`tag-filter tag-filter-eventual ${
						frequencyFilterSelected.includes(
							ListDataFrequency.OCCASIONAL,
						) && 'tag-actived'
					}`}
					onClick={() =>
						handleChangeFrequencyFilter(
							ListDataFrequency.OCCASIONAL,
						)
					}
				>
					Eventuais
				</button>
			</Filters>

			<Content>
				{!isLoading ? (
					data.map((item) => {
						return (
							<HistoryFinanceCard
								key={item.id}
								tagColor={item.tagColor}
								title={item.description}
								subTitle={item.dataFormatted}
								amount={item.amountFormatted}
							/>
						);
					})
				) : (
					<SpinnerContainer>
						<Spinner />
					</SpinnerContainer>
				)}
			</Content>
		</Container>
	);
};
