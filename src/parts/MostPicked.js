import Button from 'elements/Button';
import React from 'react';
import { Fade } from 'react-reveal';

export default function MostPicked(props) {
	return (
		<Fade>
			<section className="container" ref={props.refMostPicked}>
				<h4 className="mb-3">Most Picked</h4>
				<div className="row">
					<div className="container-grid">
						{props.data.map((item, index) => {
							return (
								<Fade
									key={`mostpicked-${index}`}
									bottom
									delay={300 * index}
								>
									<div
										className={`item column-4 ${
											index === 0 ? 'row-2' : 'row-1'
										}`}
									>
										<div className="card card-feature">
											<div className="tag">
												${item.price}{' '}
												<span className="fw-light">
													per {item.unit}
												</span>
											</div>
											<figure className="img-wrapper">
												<img
													src={item.imageUrl}
													alt={item.name}
													className="img-cover"
												/>
											</figure>
											<div className="meta-wrapper">
												<Button
													type="link"
													className="stretched-link d-block text-white"
													href={`properties/${item._id}`}
												>
													<h6 className="h5">
														{item.name}
													</h6>
												</Button>
												<span>
													{item.city}, {item.country}
												</span>
											</div>
										</div>
									</div>
								</Fade>
							);
						})}
					</div>
				</div>
			</section>
		</Fade>
	);
}
