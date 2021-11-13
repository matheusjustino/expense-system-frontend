import { ListDataFrequency } from '../enums/list-data-frequency.enum';
import { ListData } from '../interfaces/list-data.interface';

export const gains: ListData[] = [
	{
		description: 'Salário',
		amount: '1300.52',
		type: 'entrada',
		frequency: ListDataFrequency.RECURRENT,
		date: '2020-01-10 00:00:00',
	},
	{
		description: 'Freela',
		amount: '150.13',
		type: 'entrada',
		frequency: ListDataFrequency.OCCASIONAL,
		date: '2020-01-17 00:00:00',
	},
	{
		description: 'Salário',
		amount: '2500.23',
		type: 'entrada',
		frequency: ListDataFrequency.RECURRENT,
		date: '2020-02-10 00:00:00',
	},
	{
		description: 'Freela site',
		amount: '900.23',
		type: 'entrada',
		frequency: ListDataFrequency.OCCASIONAL,
		date: '2020-02-21 00:00:00',
	},
	{
		description: 'Freela app',
		amount: '950.92',
		type: 'entrada',
		frequency: ListDataFrequency.OCCASIONAL,
		date: '2020-02-23 00:00:00',
	},
	{
		description: 'Salário',
		amount: '2500.25',
		type: 'entrada',
		frequency: ListDataFrequency.RECURRENT,
		date: '2020-03-10 00:00:00',
	},
	{
		description: 'Salário',
		amount: '2500.18',
		type: 'entrada',
		frequency: ListDataFrequency.RECURRENT,
		date: '2020-04-10 00:00:00',
	},
	{
		description: 'Salário',
		amount: '2500.15',
		type: 'entrada',
		frequency: ListDataFrequency.RECURRENT,
		date: '2020-05-10 00:00:00',
	},
	{
		description: 'Salário',
		amount: '2500.12',
		type: 'entrada',
		frequency: ListDataFrequency.RECURRENT,
		date: '2020-06-10 00:00:00',
	},
	{
		description: 'Salário',
		amount: '2500.00',
		type: 'entrada',
		frequency: ListDataFrequency.RECURRENT,
		date: '2020-07-10 00:00:00',
	},
];
