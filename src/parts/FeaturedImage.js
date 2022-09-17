import React from 'react';
import { Fade } from 'react-reveal';

export default function FeaturedImage({ data }) {
	return (
		<section className="container">
			<div className="container-grid sm">
				{data.map((item, index) => (
					<div
						key={`FeaturedImage-${index}`}
						className={`item ${
							index > 0 ? 'column-5 row-1' : 'column-7 row-2'
						}`}
					>
						<Fade bottom delay={300 * index}>
							<div className="card h-100">
								<figure className="img-wrapper">
									<img
										src={item.url}
										alt={item._id}
										className="img-cover"
									/>
								</figure>
							</div>
						</Fade>
					</div>
				))}
			</div>
		</section>
	);
}
