import React, { useEffect } from 'react';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';

import itemDetails from '../json/itemDetails.json';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimonial from 'parts/Testimonial';
import Footer from 'parts/Footer';
import { Fade } from 'react-reveal';

export default function DetailsPage(props) {
	useEffect(() => {
		window.title = 'Details Page';
		window.scrollTo(0, 0);
	});

	const breadcrumb = [
		{ pageTitle: 'Home', pageHref: '' },
		{ pageTitle: 'House Details', pageHref: '' },
	];

	return (
		<>
			<Header {...props} />
			<PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
			<FeaturedImage data={itemDetails.imageUrls} />
			<section className="container">
				<div className="row">
					<div className="col-7 pe-5">
						<Fade bottom>
							<PageDetailDescription data={itemDetails} />
						</Fade>
					</div>
					<div className="col-5">
						<Fade bottom delay={300}>
							<BookingForm itemDetails={itemDetails} />
						</Fade>
					</div>
				</div>
			</section>
			<Categories data={itemDetails.categories} />
			<Testimonial data={itemDetails.testimonial} />
			<Footer />
		</>
	);
}
