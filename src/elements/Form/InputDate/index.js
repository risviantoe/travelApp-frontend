import React, { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import formatDate from 'utils/formatDate';

import iconCalendar from '../../../assets/images/icons/ic_calendar.svg'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.scss';

export default function InputDate(props) {
	const { value, placeholder, name } = props;
	const [isShowed, setIsShowed] = useState(false);

	const datePickerChange = (value) => {
		const target = {
			target: {
				value: value.selection,
				name: name,
			},
		};
		props.onChange(target);
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	const refDate = useRef(null);
	const handleClickOutside = (event) => {
		if (refDate && !refDate.current.contains(event.target)){
			setIsShowed(false);
		}
	};

	const check = (focus) => {
		// focus.indexOf(1) < 0 && setIsShowed(false);
	};

	const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${
		value.endDate ? ' - ' + formatDate(value.endDate) : ''
	}`;

	return (
		<div
			data-testid="input-date-wrapper"
			ref={refDate}
			className={['input-date mb-3', props.outerClassName].join(' ')}
		>
			<div className="input-group">
				<div className="input-group-prepend bg-gray-900">
					<span className="input-group-text">
						<img src={iconCalendar} alt="icon calendar" />
					</span>
				</div>
					<input
						data-testid="input-date"
						readOnly
						type="text"
						className="form-control"
						value={displayDate}
						placeholder={placeholder}
						onClick={() => setIsShowed(!isShowed)}
					/>

					{isShowed && (
						<div
							data-testid="date-range-wrapper"
							className="date-range-wrapper"
						>
							<DateRange
								editableDateInputs={true}
								onChange={datePickerChange}
								moveRangeOnFirstSelection={false}
								onRangeFocusChange={check}
								ranges={[value]}
								minDate={new Date()}
							/>
						</div>
					)}
				</div>
			</div>
	);
}

InputDate.propTypes = {
	value: propTypes.object,
	onChange: propTypes.func,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
};
