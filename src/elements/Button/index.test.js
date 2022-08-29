import react from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '.';

test('Should not allow click button if isDisabled is present', () => {
	const { container } = render(<Button isDisabled></Button>);
	expect(container.querySelector('span')).toHaveClass('disabled');
});

test('Should render loading/spinner', () => {
	const { container } = render(<Button isLoading></Button>);
	expect(screen.getByText(/loading/i)).toBeInTheDocument();
	expect(container.querySelector('span')).toBeInTheDocument();
});

test('Should render <a> tag', () => {
	const { container } = render(<Button type="link" isExternal></Button>);
	expect(container.querySelector('a')).toBeInTheDocument();
});

test('Should render <Link> component', () => {
	const { container } = render(
		<Router>
			<Button href="" type="link"></Button>
		</Router>
	);
	expect(container.querySelector('a')).toBeInTheDocument();
});
