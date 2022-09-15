import react from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '.';

test('Should not allow click button if isDisabled is present', () => {
	render(<Button isDisabled></Button>);
	expect(screen.getByTestId('button-span')).toHaveClass('disabled');
});

test('Should render loading/spinner', () => {
	render(<Button isLoading></Button>);
	expect(screen.getByText(/loading/i)).toBeInTheDocument();
	expect(screen.getByTestId('button-span')).toBeInTheDocument();
});

test('Should render <a> tag', () => {
	render(<Button type="link" isExternal></Button>);
	expect(screen.getByTestId('button-link-external')).toBeInTheDocument();
});

test('Should render <Link> component', () => {
	render(
		<Router>
			<Button href="" type="link"></Button>
		</Router>
	);
	expect(screen.getByTestId('button-link-internal')).toBeInTheDocument();
});

test('Should render default button', () => {
	render(<Button></Button>)
	expect(screen.getByTestId('button-default')).toBeInTheDocument()
})