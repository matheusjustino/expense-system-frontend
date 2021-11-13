export const FormatDate = (date: string): string => {
	const formattedDate = new Date(date);
	return formattedDate.toLocaleDateString();
};
