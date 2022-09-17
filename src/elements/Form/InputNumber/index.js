import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useState } from 'react';

import './index.scss';

export default function InputNumber(props) {
	const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;
  
	const onChange = (e) => {
		let value = String(e.target.value);

		if (+value <= max && +value >= min) {
			props.onChange({
				target: {
					name: name,
					value: value,
				},
			});
		}
	};

  const minus = () => {
		value > min &&
			onChange({
				target: {
					name: name,
					value: +value - 1,
				},
			});
	};

  const plus = () => {
		value < max &&
			onChange({
				target: {
					name: name,
					value: +value + 1,
				},
			});
	};

	return (
		<div className={['input-number mb-3', props.outerClassName].join(' ')}>
			<div className="input-group">
				<div className="input-group-prepend" onClick={minus}>
					<span className="input-group-text minus">-</span>
				</div>
				<input
					data-testid="input-number"
					min={min}
					max={max}
					name={name}
					pattern="[0-9]*"
					className="form-control"
					placeholder={placeholder ? placeholder : '0'}
					value={`${prefix}${value}${suffix}${
					isSuffixPlural && value > 1 ? 's' : ''}`}
					onChange={onChange}
				/>
				<div className="input-group-append" onClick={plus}>
					<span className="input-group-text plus">+</span>
				</div>
			</div>
		</div>
	);
}

InputNumber.defaultProps = {
	min: 1,
  max: 1,
	prefix: '',
	suffix: '',
};

InputNumber.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	onChange: propTypes.func,
	isSuffixPlural: propTypes.bool,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
};
