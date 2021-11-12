import { BrowserRouter } from 'react-router-dom';

// CONTEXT
import { useAuth } from '../contexts/auth.context';

// ENUMS
import { LocalStorageKeys } from '../enums/local-storage-keys.enum';

// COMPONENTS
import { DashboardRoutes } from './dashboard-routes/router';
import { AuthRoutes } from './auth-routes/router';

export const Routes = () => {
	const { user } = useAuth();

	const isAuthenticated = () => {
		const userLocalStorage = !!localStorage.getItem(LocalStorageKeys.USER);
		return !!user || userLocalStorage;
	};

	return (
		<BrowserRouter>
			{isAuthenticated() ? <DashboardRoutes /> : <AuthRoutes />}
		</BrowserRouter>
	);
};
