import React, { useState, useMemo, ChangeEvent } from 'react';

// UTILS
import { MonthsValues } from '../../utils/months.utils';

// STYLES
import { Container } from './styles';

// COMPONENTS
import { ContentHeader } from '../../components/content-header';
import { SelectInput } from '../../components/select-input';

export const DashboardPage: React.FC = () => {
	const [monthSelected, setMonthSelected] = useState<string>(
		String(new Date().getMonth() + 1),
	);
	const [yearSelected, setYearSelected] = useState<string>(
		String(new Date().getFullYear()),
	);

	const months = useMemo(() => MonthsValues, []);

	const handleChangeMonthSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		setMonthSelected(event.target.value);
	};

	const handleChangeYearSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		setYearSelected(event.target.value);
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
			<ContentHeader title="Dashboard" lineColor="#f7931b">
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
		</Container>
	);
};
