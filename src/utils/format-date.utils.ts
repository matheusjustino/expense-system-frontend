export const FormatDate = (date: string): string => {
	const newDate = new Date(date);
	newDate.setTime(
		newDate.getTime() + newDate.getTimezoneOffset() * 60 * 1000,
	);
	const formattedDate = newDate.toLocaleDateString();

	return formattedDate;
};
