import React, {
	useMemo,
	useCallback,
	useState,
	useEffect,
	ChangeEvent,
} from 'react';
import { useParams } from 'react-router';

// INTERFACES
import { PageData } from '../../interfaces/page-data.interface';
import { ListData } from '../../interfaces/list-data.interface';
import { ListPageData } from '../../interfaces/list-page-data.interface';

// ENUMS
import { ListDataFrequency } from '../../enums/list-data-frequency.enum';
import { DarkColors } from '../../enums/dark-colors.enum';

// UTILS
import { FormatCurrency } from '../../utils/format-currency.utils';
import { FormatDate } from '../../utils/format-date.utils';
import { MonthsValues } from '../../utils/months.utils';

// MOCKS
import { gains } from '../../repositories/gains';
import { expenses } from '../../repositories/expenses';

// STYLES
import { Container, Content, Filters } from './styles';

// COMPONENTS
import { ContentHeader } from '../../components/content-header';
import { SelectInput } from '../../components/select-input';
import { HistoryFinanceCard } from '../../components/history-finance-card';

interface ListPageProps {
	type: string;
}

export const ListPage: React.FC = () => {
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

	const params = useParams() as ListPageProps;
	const { type } = params;

	const pageData: PageData = useMemo(() => {
		return type === 'entry-balance'
			? {
					text: 'Entradas',
					lineColor: DarkColors.SUCCESS,
					data: gains,
			  }
			: {
					text: 'Saídas',
					lineColor: DarkColors.WARNING,
					data: expenses,
			  };
	}, [type]);

	const months = useMemo(() => MonthsValues, []);

	useEffect((): void => {
		const apiResponse = pageData.data
			.filter((item) => {
				const date = new Date(item.date);
				const month = date.getMonth() + 1;
				const year = date.getFullYear();

				return (
					month === monthFilterSelected &&
					year === yearFilterSelected &&
					frequencyFilterSelected.includes(item.frequency)
				);
			})
			.map((item) => {
				const response: ListPageData = buildApiResponse(item);
				return response;
			});

		setData(apiResponse);
	}, [
		pageData.data,
		monthFilterSelected,
		yearFilterSelected,
		frequencyFilterSelected,
	]);

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

	const buildApiResponse = useCallback((item: ListData): ListPageData => {
		const response: ListPageData = {
			id: `${Math.random() * pageData.data.length}`,
			description: item.description,
			amountFormatted: FormatCurrency(Number(item.amount)),
			frequency: item.frequency,
			dataFormatted: FormatDate(item.date),
			tagColor:
				item.frequency === ListDataFrequency.RECURRENT
					? DarkColors.SUCCESS
					: DarkColors.WARNING,
		};

		return response;
	}, []);

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
			<ContentHeader title={pageData.text} lineColor={pageData.lineColor}>
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
				{data.map((item) => {
					return (
						<HistoryFinanceCard
							key={item.id}
							tagColor={item.tagColor}
							title={item.description}
							subTitle={item.dataFormatted}
							amount={item.amountFormatted}
						/>
					);
				})}
			</Content>
		</Container>
	);
};
