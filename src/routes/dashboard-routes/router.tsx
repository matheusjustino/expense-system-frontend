import { Routes as Switch, Route } from 'react-router-dom';

// COMPONENTS
import { DashboardPage } from '../../pages/dashboard';
import { PageNotFound } from '../../pages/not-found';

export const DashboardRoutes = () => {
	return (
		<Switch>
			<Route path="/dashboard" element={<DashboardPage />}></Route>
			<Route path="*" element={<PageNotFound to="/dashboard" />} />
		</Switch>
	);
};
