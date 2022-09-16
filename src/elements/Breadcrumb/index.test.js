import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Breadcrumb from './index';

const setup = () => {
	const breadcrumbList = [
		{ pageTitle: 'Home', pageHref: '' },
		{ pageTitle: 'House Details', pageHref: '' },
	];

  render(
		<Router>
			<Breadcrumb data={breadcrumbList} />
		</Router>
	);

  // const breadcrumb = container.querySelector('.breadcrumb')
	const breadcrumb = screen.getByTestId('breadcrumb');
	return breadcrumb;
};

test('Should havel <ol> with data-testid "breadcrumb" and have text Home & House Details', () => {
  const breadcrumb = setup()

  expect(breadcrumb).toBeInTheDocument()
  expect(breadcrumb).toHaveTextContent('Home')
  expect(breadcrumb).toHaveTextContent('House Details')
})
