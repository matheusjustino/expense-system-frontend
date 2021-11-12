import React from 'react';

// STYLES
import { Container } from './styles';

// COMPONENTS
import { ContentHeader } from '../../components/content-header';
import { SelectInput } from '../../components/select-input';

export const DashboardPage: React.FC = () => {
	const options = [
		{
			value: 'Janeiro',
			label: 'Janeiro',
		},
		{
			value: 'Fevereiro',
			label: 'Fevereiro',
		},
		{
			value: 'Março',
			label: 'Março',
		},
	];

	return (
		<Container>
			<ContentHeader title="Dashboard" lineColor="#f7931b">
				<SelectInput options={options} />
			</ContentHeader>
		</Container>
	);
};
