import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 15.625rem auto;
	grid-template-rows: 4.375rem auto;

	grid-template-areas:
		'AS MH'
		'AS CT';

	height: 100vh;
	min-width: 19.6875rem;

	@media (max-width: 37.5rem) {
		grid-template-columns: 100%;
		grid-template-rows: 4.375rem auto;

		grid-template-areas:
			'MH'
			'CT';
	}
`;
