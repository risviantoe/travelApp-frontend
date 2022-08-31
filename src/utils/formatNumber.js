const numberFormat = (number) => {
	const formatNumbering = new Intl.NumberFormat();
	return formatNumbering.format(number);
};

export default numberFormat
