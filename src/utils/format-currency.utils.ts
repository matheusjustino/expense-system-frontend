export const FormatCurrency = (value: number): string => {
	const options = {
		minimumFractionDigits: 2,
		style: 'currency',
		currency: 'BRL',
	};
	return value.toLocaleString('pt-br', options);
};
