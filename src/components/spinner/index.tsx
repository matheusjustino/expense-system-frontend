import React from 'react';

// STYLES
import { Container, SpinnerWrapper } from './styles';

export const Spinner: React.FC = () => {
	return (
		<Container className="d-flex justify-content-center">
			<SpinnerWrapper className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</SpinnerWrapper>
		</Container>
	);
};
