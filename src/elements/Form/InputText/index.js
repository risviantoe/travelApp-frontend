import React, { useState } from 'react';
import { inputPropTypes } from '../propTypes';

import './index.scss';

export default function InputText(props) {
	const {
		name,
		value,
		prepend,
		append,
		type,
		placeholder,
		outerClassName,
		inputClassName,
		errorResponse,
	} = props;

	const [hasError, setHasError] = useState(null);
	let pattern = '';
	if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (type === 'tel') pattern = '[0-9]*';

	const onChange = (event) => {
		const target = {
			target: {
				name: name,
				value: event.target.value,
			},
		};

		if (type === 'email') {
			if (!pattern.test(event.target.value)) setHasError(errorResponse);
			else setHasError('');
		}

		if (type === 'tel') {
			if (event.target.validity.valid) props.onChange(target);
			else return;
		}

		props.onChange(target);
	};

	return (
		<div className={['input-text mb-3', outerClassName].join(' ')}>
			<div className="input-group">
				{prepend && (
					<div className="input-group-prepend bg-gray-500">
						<span className="input-group-text">{prepend}</span>
					</div>
				)}
				<input
					data-testid="input-text"
					name={name}
					type={type}
					pattern={pattern}
					className={['form-control', inputClassName].join(' ')}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
				{append && (
					<div className="input-group-append bg-gray-500">
						<span className="input-group-text">{append}</span>
					</div>
				)}
			</div>
			{hasError && (
				<span
					data-testid="input-text-error-helper"
					className="error-helper"
				>
					{hasError}
				</span>
			)}
		</div>
	);
}

InputText.defaultProps = {
	type: 'text',
	pattern: '',
	placeholder: 'Please type here ...',
	errorResponse: 'Please match the request format.',
};

InputText.propTypes = inputPropTypes
