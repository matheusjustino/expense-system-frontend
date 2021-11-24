// TYPES
import { AccountPostFrequency } from '../types/account-post-frequency.type';
import { AccountPostType } from '../types/account-post-type.type';

export interface ListRegisterQuery {
	month: number;
	year: number;
	type: AccountPostType;
	frequency: AccountPostFrequency[];
}
