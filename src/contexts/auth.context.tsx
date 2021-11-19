import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

// SERVICES
import { api } from '../services/api.service';

// ENUMS
import { LocalStorageKeys } from '../enums/local-storage-keys.enum';

// INTERFACES
import { Login } from '../interfaces/login.interface';
import { Register } from '../interfaces/register.interface';
import { User } from '../interfaces/user.interface';
import { LoginResponse } from '../interfaces/login-response.interface';
import { AccountInfo } from '../interfaces/account-info.interface';
import { AxiosError } from 'axios';

interface AuthContextData {
	user: User | null;
	signIn: (data: Login) => Promise<void>;
	signOut: () => void;
	register: (data: Register) => Promise<void>;
}

interface AuthProviderProps {
	children?: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
	{} as AuthContextData,
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<AccountInfo | null>(null);

	useEffect(() => {
		if (!user) {
			const localUser = localStorage.getItem(LocalStorageKeys.USER);
			if (localUser) {
				setUser(JSON.parse(localUser));
			}
		}
	}, []);

	useEffect(() => {
		const token = localStorage.getItem(LocalStorageKeys.USER_TOKEN);

		if (token) {
			api.defaults.headers.common.authorization = `Bearer ${token}`;
		}
	}, []);

	const signIn = async (data: Login): Promise<void> => {
		try {
			const apiResult = await api.post<LoginResponse>('auth/login', data);
			api.defaults.headers.common.authorization = `Bearer ${apiResult.data.token}`;

			localStorage.setItem(
				LocalStorageKeys.USER_TOKEN,
				apiResult.data.token,
			);
			localStorage.setItem(
				LocalStorageKeys.USER,
				JSON.stringify(apiResult.data.user),
			);

			setUser(apiResult.data.user);
		} catch (error: any) {
			const err: AxiosError = error;
			throw err.response?.data.error.message;
		}
	};

	const signOut = (): void => {
		localStorage.clear();
		setUser(null);
	};

	const register = async (data: Register): Promise<void> => {
		try {
			await api.post('auth/register', data);
		} catch (error: any) {
			const err: AxiosError = error;
			throw err.response?.data.error.message;
		}
	};

	const authProviderData: AuthContextData = {
		user,
		signIn,
		signOut,
		register,
	};

	return (
		<AuthContext.Provider value={authProviderData}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const authContext = useContext(AuthContext);
	return authContext;
};
