import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

// COMPONENTS
import { AuthPage } from '../pages/sign-in';
import { PageNotFound } from '../pages/not-found';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" element={<AuthPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Switch>
		</BrowserRouter>
	);
};
