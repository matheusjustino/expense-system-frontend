import { ListDataFrequency } from '../enums/list-data-frequency.enum';

export interface ListData {
	description: string;
	amount: string;
	type: string;
	frequency: ListDataFrequency;
	date: string;
}
