// TYPES
import { AccountPostFrequency } from '../types/account-post-frequency.type';
import { AccountPostType } from '../types/account-post-type.type';

export interface CreateAccountPost {
	description: string;
	amount: number;
	type: AccountPostType;
	frequency: AccountPostFrequency;
	date: Date;
	userId: string;
}
