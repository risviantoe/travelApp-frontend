import React from 'react';
import propTypes from 'prop-types';

import './index.scss'

export default function Star({ className, value, height, width, spacing }) {
	const decimals = Number(value) % 1;
	const star = [];
	let leftPos = 0;

	for (let index = 0; index < 5 && index < value - decimals; index++) {
		leftPos = leftPos + width;
		star.push(
			<div
				key={`star-${index}`}
				className="star"
				style={{
          left: index * width,
          height: height,
					width: width,
					marginRight: spacing,
				}}
			/>
		);
	}

	if (decimals > 0 && value <= 5) {
		star.push(
			<div
				className="star"
				style={{
					left: leftPos,
					height: height,
					width: decimals * width - spacing,
				}}
			/>
		);
	}

	const starPlaceHolder = [];
	for (let index = 0; index < 5; index++) {
		leftPos = leftPos + width;
		starPlaceHolder.push(
			<div
				key={`starPlaceholder-${index}`}
				className="star placeholder"
				style={{
					left: index * width,
					height: height,
					width: width,
					marginRight: spacing,
				}}
			/>
		);
	}

	return (
		<>
			<div
				className={['stars', className].join(' ')}
				style={{ height: height }}
			>
				{starPlaceHolder}
				{star}
			</div>
		</>
	);
}

Star.propTypes = {
	className: propTypes.string,
	value: propTypes.number,
	height: propTypes.number,
	width: propTypes.number,
	spacing: propTypes.number,
};
