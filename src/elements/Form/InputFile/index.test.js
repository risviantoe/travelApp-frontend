import React, { useState } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputFile from './index';

const TestInput = () => {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
    <InputFile
      accept="image/*"
			name="test"
			onChange={(e) => handleChange(e)}
			value={value}
		/>
	);
};

const setup = () => {
	render(<TestInput />);
	const input = screen.getByTestId('input-file');
	return {
		input,
	};
};

test('Should fire change event on file upload', () => {
  const { input } = setup()
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  userEvent.upload(input, file)

  expect(input.files.length).toBe(1)
});
