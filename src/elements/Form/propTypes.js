import propTypes from 'prop-types'

export const inputPropTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
	onChange: propTypes.func.isRequired,
	prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
	append: propTypes.oneOfType([propTypes.number, propTypes.string]),
	type: propTypes.string,
	outerClassName: propTypes.string,
	inputClassName: propTypes.string,
};