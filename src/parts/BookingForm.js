import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import { InputDate, InputNumber } from 'elements/Form';
import Button from 'elements/Button';

export default function BookingForm(props) {
	const { itemDetails, startBooking } = props;
	console.log(itemDetails);
	const [data, setData] = useState({
		duration: 1,
		date: {
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	});

	const updateData = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		const startDate = new Date(data.date.startDate);
		const endDate = new Date(data.date.endDate);
		const countDuration = new Date(endDate - startDate).getDate();

		setData({ ...data, duration: countDuration });
	}, [data.date]);

	useEffect(() => {
		const startDate = new Date(data.date.startDate);
		const endDate = new Date(
			startDate.setDate(startDate.getDate() + +data.duration - 1)
		);

		setData({ ...data, date: { ...data.date, endDate: endDate } });
	}, [data.duration]);

	console.log('duration ', data.duration);

	return (
		<div className="card bordered" style={{ padding: '60px 80px' }}>
			<h4 className="mb-3">Start Booking</h4>
			<h5 className="h2 text-teal mb-4">
				${itemDetails.price}{' '}
				<span className="text-gray-500 fw-light">
					per {itemDetails.unit}
				</span>
			</h5>

			<label htmlFor="duration" className="mb-2">
				How long you will stay?
			</label>
			<InputNumber
				max={30}
				suffix=" night"
				isSuffixPlural
				onChange={updateData}
				name="duration"
				value={data.duration}
			/>

			<label htmlFor="date" className="mt-4 mb-2">
				Pick a date
			</label>
			<InputDate onChange={updateData} name="date" value={data.date} />

			<h6 className="text-gray-500 fw-light" style={{ marginBottom: 40 }}>
				You will pay{' '}
				<span className="text-gray-900" style={{ fontWeight: 500 }}>
					${itemDetails.price * data.duration} USD
				</span>{' '}
				per{' '}
				<span className="text-gray-900" style={{ fontWeight: 500 }}>
					{data.duration} {itemDetails.unit}{data.duration > 1 ? 's' : ''}
				</span>
			</h6>

			<Button
				className="btn"
				hasShadow
				isPrimary
				isBlock
				onClick={startBooking}
			>
				Continue to book
			</Button>
		</div>
	);
}

BookingForm.propTypes = {
	itemDetails: propTypes.object,
	startBooking: propTypes.func,
};
