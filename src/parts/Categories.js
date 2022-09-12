import Button from 'elements/Button';
import React from 'react';
import { Fade } from 'react-reveal'

export default function Categories({ data }) {
	return data.map((category, index1) => {
		return (
			<section key={`category-${index1}`} className="container">
				<Fade bottom>
					<h4 className="mb-3 fw-medium">{category.name}</h4>
					<div className="container-grid">
						{category.items.length === 0 ? (
							<div className="row">
								<div className="col-auto align-items-center">
									There is no property at this category
								</div>
							</div>
						) : (
							category.items.map((item, index2) => {
								return (
									<div
										key={`category-${index1}item-${index2}`}
										className="item column-3 row-1"
									>
										<Fade bottom delay={300 * index2}>
											<div className="card">
												{item.isPopular && (
													<div className="tag">
														Popular{' '}
														<span className="fw-light">
															Choice
														</span>
													</div>
												)}
												<figure
													className="img-wrapper"
													style={{ height: 180 }}
												>
													<img
														src={item.imageUrl}
														alt={item.name}
														className="img-cover"
													/>
												</figure>
												<div className="meta-wrapper">
													<Button
														type="link"
														href={`/properties/${item._id}`}
														className="stretched-link d-block text-gray-800"
													>
														<h6 className="h5">
															{item.name}
														</h6>
													</Button>
													<span className="text-gray-500">
														{item.city},{' '}
														{item.country}
													</span>
												</div>
											</div>
										</Fade>
									</div>
								);
							})
						)}
					</div>
				</Fade>
			</section>
		);
	});
}
