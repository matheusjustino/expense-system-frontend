import { Routes as Switch, Route } from 'react-router-dom';

// COMPONENTS
import { Layout } from '../../components/layout';
import { DashboardPage } from '../../pages/dashboard';
import { AccountPost } from '../../pages/account-post';
import { ListPage } from '../../pages/list';
import { PageNotFound } from '../../pages/not-found';

export const DashboardRoutes = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/register/new" element={<AccountPost />} />
				<Route path="/list/:type" element={<ListPage />} />
				<Route path="*" element={<PageNotFound to="/dashboard" />} />
			</Switch>
		</Layout>
	);
};
