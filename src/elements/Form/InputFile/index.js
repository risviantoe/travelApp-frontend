import React from 'react';
import propTypes from 'prop-types';
import { inputPropTypes } from '../propTypes';
import { useRef } from 'react';

export default function InputFile(props) {
	const {
		value,
		placeholder,
		name,
		accept,
		prepend,
		append,
		outerClassName,
		inputClassName,
	} = props;

	const refInputFile = useRef(null);
	return (
		<div className={['input-text mb-3', outerClassName].join(' ')}>
			<div className="input-group">
				{prepend && (
					<div className="input-group-prepend bg-gray-500">
						<span className="input-group-text">{prepend}</span>
					</div>
				)}
				<input
					data-testid="input-file"
					name={name}
					accept={accept}
					ref={refInputFile}
					type="file"
					className="d-none"
					value={value}
					onChange={props.onChange}
				/>
				<input
					onClick={() => refInputFile.current.click()}
					defaultValue={value}
					placeholder={placeholder}
					className={['form-control', inputClassName].join(' ')}
				/>
				{append && (
					<div className="input-group-append bg-gray-500">
						<span className="input-group-text">{append}</span>
					</div>
				)}
			</div>
		</div>
	);
}

InputFile.defaultProps = {
	placeholder: 'Browse a file...',
};

InputFile.propTypes = inputPropTypes['accept'] = propTypes.string;
