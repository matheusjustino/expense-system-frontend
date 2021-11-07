import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

// COMPONENTS
import { SignInPage } from '../pages/sign-in';
import { SignUpPage } from '../pages/sign-up';
import { PageNotFound } from '../pages/not-found';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Switch>
		</BrowserRouter>
	);
};
