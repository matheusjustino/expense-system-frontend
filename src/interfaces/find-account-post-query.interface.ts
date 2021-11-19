// TYPES
import { AccountPostFrequency } from '../types/account-post-frequency.type';

export interface FindAccountPostQuery {
	month: number;
	year: number;
	frequency?: AccountPostFrequency;
}
