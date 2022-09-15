import react, { useState } from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import InputDate from './index';

const TestInput = () => {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	});
  
  const handleChange = (e) => {
		setValue(e.target.value);
  };

  return (
    <InputDate
      max={30}
      onChange={handleChange}
      name="value"
      value={value}
    />
  )
};

const setup = () => {
  const { container } = render(<TestInput />)
  const wrapper = container.querySelector('.input-date');
  const input = container.querySelector('input.form-control');

  return {
    wrapper,
    input
  }
}

test('Should have wrapper with className .form-control', () => {
  const { wrapper } = setup()
  expect(wrapper).toBeInTheDocument()
})

test('Should have tag <input> and has className .form-control', () => {
  const { input } = setup()
  expect(input).toBeInTheDocument()
  expect(input).toHaveClass('form-control')
})

test('Should show date picker when click input field', () => {
  render(<TestInput />);
  const { input } = setup()

  // screen.debug()
  fireEvent.click(input, { button: 1 })
  const datePickerWrapper = screen.getByTestId('date-range-wrapper')

  expect(datePickerWrapper).toBeInTheDocument()
})
