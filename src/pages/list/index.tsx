import React from 'react';

// STYLES
import { Container, Content, Filters } from './styles';

// COMPONENTS
import { ContentHeader } from '../../components/content-header';
import { SelectInput } from '../../components/select-input';
import { HistoryFinanceCard } from '../../components/history-finance-card';

export const ListPage: React.FC = () => {
	const months = [
		{
			value: 1,
			label: 'Janeiro',
		},
		{
			value: 2,
			label: 'Fevereiro',
		},
		{
			value: 3,
			label: 'Março',
		},
	];

	const years = [
		{
			value: 2020,
			label: '2020',
		},
		{
			value: 2021,
			label: '2021',
		},
	];

	return (
		<Container>
			<ContentHeader title="Saídas" lineColor="#e44c4e">
				{/* #e44c4e #f7931b*/}
				<SelectInput options={months} />
				<SelectInput options={years} />
			</ContentHeader>

			<Filters>
				<button
					type="button"
					className="tag-filter tag-filter-recurrent"
				>
					Recorrentes
				</button>

				<button
					type="button"
					className="tag-filter tag-filter-eventual"
				>
					Eventuais
				</button>
			</Filters>

			<Content>
				<HistoryFinanceCard
					tagColor="#e44c4e"
					title="Conta de Luz"
					subTitle="12/11/2021"
					amount="R$ 125,00"
				/>

				<HistoryFinanceCard
					tagColor="#e44c4e"
					title="Conta de Internet"
					subTitle="12/11/2021"
					amount="R$ 100,00"
				/>
			</Content>
		</Container>
	);
};
