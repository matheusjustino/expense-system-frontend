import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 15.625rem auto;
	grid-template-rows: 4.375rem auto;

	grid-template-areas:
		'AS MH'
		'AS CT';

	height: 100vh;
`;
