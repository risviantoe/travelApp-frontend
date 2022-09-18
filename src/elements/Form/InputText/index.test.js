import React, { useState } from 'react'
import { screen, render, fireEvent } from '@testing-library/react';
import InputText from './index';

let type = 'text'

const TestInput = () => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <InputText
      type={type}
      name="test"
      onChange={(e) => handleChange(e)}
      value={value}
    />
  )
}

const setup = () => {
  render(<TestInput />)
  const input = screen.getByTestId('input-text')
  return {
    input
  }
}

test('Should element <input> with testId input-text to be in the document', () => {
  const { input } = setup()
  expect(input).toBeInTheDocument()
})

test('Should able to change value', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'yuhuu' } })
  
  expect(input.value).toBe('yuhuu')
})

test('Should not be able to change when value is not a number of type "tel"', () => {
  type = 'tel';
  
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'yuhuu' } })
  expect(input.value).toBe('')
})

test(
  'Should be able to display an error message when the value does not match the format', () => {
    type = 'email';
    
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'yuhuu' } });
    
    render(<TestInput />)
    const errorHelper = screen.getByTestId('input-text-error-helper')
    
    expect(errorHelper).toBeInTheDocument()
  }
);