// TYPES
import { AccountPostFrequency } from '../types/account-post-frequency.type';
import { AccountPostType } from '../types/account-post-type.type';

export interface FindAccountPostResponse {
	amount: number;
	date: string;
	frequency: AccountPostFrequency;
	type: AccountPostType;
	description: string;
	id: string;
}
