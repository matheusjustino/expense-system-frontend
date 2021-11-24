import { AxiosError, AxiosRequestConfig } from 'axios';

// SERVICES
import { api } from './api.service';

// INTERFACES
import { AccountPost } from '../interfaces/account-post.interface';
import { CreateAccountPost } from '../interfaces/create-account-post.interface';
import { FindAccountPostQuery } from '../interfaces/find-account-post-query.interface';
import { LocalStorageKeys } from '../enums/local-storage-keys.enum';
import { BarChartBoxData } from '../interfaces/bar-chart-box-data.interface';
import { DarkColors } from '../enums/dark-colors.enum';
import { GetDashboardDataResponse } from '../interfaces/get-dashboard-data-response.interface';
import { DashboardApiResult } from '../interfaces/dashboard-api-result.interface';
import { FindAccountPostResponse } from '../interfaces/find-account-post-response.interface';
import { ListRegisterQuery } from '../interfaces/list-registers-query.interface';

const accountPostBasePath = Object.freeze('account-posts');

export const createAccountPost = async (
	data: CreateAccountPost,
): Promise<
	AccountPost & {
		owner: {
			firstName: string;
			lastName: string;
			email: string;
		};
	}
> => {
	try {
		const apiResult = await api.post(`${accountPostBasePath}`, data);
		return apiResult.data;
	} catch (error: any) {
		const err: AxiosError = error;
		throw err.response?.data.error.message;
	}
};

export const findAccountPost = async (
	query: FindAccountPostQuery,
): Promise<AccountPost[]> => {
	try {
		const localToken = localStorage.getItem(LocalStorageKeys.USER_TOKEN);

		const config: AxiosRequestConfig = {
			params: query,
			...(!!localToken && {
				headers: {
					authorization: `Bearer ${localToken}`,
				},
			}),
		};

		const apiResult = await api.get(accountPostBasePath, config);
		return apiResult.data;
	} catch (error: any) {
		const err: AxiosError = error;
		throw err.response?.data.error.message;
	}
};

export const getDashboard = async (
	query: FindAccountPostQuery,
): Promise<GetDashboardDataResponse> => {
	try {
		const localToken = localStorage.getItem(LocalStorageKeys.USER_TOKEN);

		const config: AxiosRequestConfig = {
			params: query,
			...(!!localToken && {
				headers: {
					authorization: `Bearer ${localToken}`,
				},
			}),
		};

		const apiResult = await api.get<DashboardApiResult>(
			`${accountPostBasePath}/dashboard`,
			config,
		);

		const relationExpensesRecurrentEventual: BarChartBoxData[] = [
			{
				name: apiResult.data.relationExpensesRecurrentEventual.name,
				amount: apiResult.data.relationExpensesRecurrentEventual
					.recurrentAmount,
				percent:
					apiResult.data.relationExpensesRecurrentEventual
						.recurrentPercent,
				color: DarkColors.WARNING,
			},
			{
				name: apiResult.data.relationExpensesRecurrentEventual.name,
				amount: apiResult.data.relationExpensesRecurrentEventual
					.eventualAmount,
				percent:
					apiResult.data.relationExpensesRecurrentEventual
						.eventualPercent,
				color: DarkColors.INFO,
			},
		];

		const relationGainsRecurrentEventual: BarChartBoxData[] = [
			{
				name: apiResult.data.relationGainsRecurrentEventual.name,
				amount: apiResult.data.relationGainsRecurrentEventual
					.recurrentAmount,
				percent:
					apiResult.data.relationGainsRecurrentEventual
						.recurrentPercent,
				color: DarkColors.WARNING,
			},
			{
				name: apiResult.data.relationGainsRecurrentEventual.name,
				amount: apiResult.data.relationGainsRecurrentEventual
					.eventualAmount,
				percent:
					apiResult.data.relationGainsRecurrentEventual
						.eventualPercent,
				color: DarkColors.INFO,
			},
		];

		const response = {
			...apiResult.data,
			relationGainsRecurrentEventual,
			relationExpensesRecurrentEventual,
		};

		return response;
	} catch (error: any) {
		const err: AxiosError = error;
		throw err.response?.data.error.message;
	}
};

export const getRegisters = async (
	query: ListRegisterQuery,
): Promise<FindAccountPostResponse[]> => {
	try {
		const localToken = localStorage.getItem(LocalStorageKeys.USER_TOKEN);

		const config: AxiosRequestConfig = {
			params: query,
			...(!!localToken && {
				headers: {
					authorization: `Bearer ${localToken}`,
				},
			}),
		};

		const apiResult = await api.get<FindAccountPostResponse[]>(
			accountPostBasePath,
			config,
		);
		return apiResult.data;
	} catch (error: any) {
		const err: AxiosError = error;
		throw err.response?.data.error.message;
	}
};
