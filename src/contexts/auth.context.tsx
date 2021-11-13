import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

// ENUMS
import { LocalStorageKeys } from '../enums/local-storage-keys.enum';

// INTERFACES
import { Login } from '../interfaces/login.interface';
import { Register } from '../interfaces/register.interface';
import { User } from '../interfaces/user.interface';

interface AuthContextData {
	user: User | null;
	signIn: (data: Login) => Promise<void>;
	signOut: () => void;
	register: (data: Register) => Promise<void>;
}

interface AuthProviderProps {
	children?: ReactNode;
}

const usersMock: User[] = [
	{
		id: '1',
		firstName: 'Matheus',
		lastName: 'Henrique',
		email: 'a@a.com',
		password: '123',
	},
	{
		id: '2',
		firstName: 'Fernandes',
		lastName: 'Justino',
		email: 'b@b.com',
		password: '123',
	},
];

export const AuthContext = createContext<AuthContextData>(
	{} as AuthContextData,
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		if (!user) {
			const localUser = localStorage.getItem(LocalStorageKeys.USER);
			if (localUser) {
				setUser(JSON.parse(localUser));
			}
		}
	}, []);

	const signIn = async (data: Login): Promise<void> => {
		const apiResult = await usersMock.find((user) => {
			return user.email === data.email && user.password === data.password;
		});

		if (apiResult) {
			localStorage.setItem(LocalStorageKeys.USER_TOKEN, 'usertoken');
			localStorage.setItem(
				LocalStorageKeys.USER,
				JSON.stringify(apiResult),
			);
			setUser(apiResult);
		}
	};

	const signOut = (): void => {
		localStorage.clear();
		setUser(null);
	};

	const register = async (data: Register): Promise<void> => {
		await usersMock.push({
			...data,
			id: `${usersMock.length + 1}`,
		});
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
