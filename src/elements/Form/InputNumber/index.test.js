import react from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import InputNumber from './index';
import { useState } from 'react';

const TestInput = () => {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
  };
  
	return(
		<InputNumber
			max={30}
			onChange={(e) => handleChange(e)}
			name="value"
			value={value}
		/>
	);
}

const setup = () => {
	render(<TestInput />);
	// const input = container.querySelector(`input.form-control[name='value']`)
	const input = screen.getByTestId('input-number');
  
	return {
		input
	};
};

test('Should able to change value', () => {
	const { input } = setup();

	fireEvent.change(input, { target: { value: 23 } });
	expect(input.value).toBe('23');
});

test('Should not be able to change when reach max value', () => {
	const { input } = setup();

	fireEvent.change(input, { target: { value: 33 } });
	expect(input.value).toBe('');
});
