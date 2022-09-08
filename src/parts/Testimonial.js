import React from 'react';
import Star from 'elements/Star';
import TestimonialAccent from 'assets/images/image-testimonial-frame.png';
import Button from 'elements/Button';

export default function Testimonial({ data }) {
	return (
		<section className="container">
			<div className="row align-items-center">
				<div className="col-auto" style={{ marginRight: 60 }}>
					<div
						className="testimonial-hero"
						style={{ margin: '30px 0 0 30px' }}
					>
						<img
							src={data.imageUrl}
							alt="Testimonial"
							className="position-absolute"
							style={{ zIndex: 1 }}
						/>
						<img
							src={TestimonialAccent}
							alt="Testimonial frame"
							className="position-absolute"
							style={{ margin: '-30px 0 0 -30px' }}
						/>
					</div>
				</div>
				<div className="col">
					<h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star
						value={data.rate}
						width={36}
						height={36}
            spacing={5}
					/>
					<h5 className="h2 fw-light line-height-2 my-3">
						{data.content}
					</h5>
					<span className="text-gray-500">
						{data.familyName}, {data.familyOccupation}
					</span>
					<div>
						<Button
							type="link"
							href={`/testimonial/${data._id}`}
							className="btn px-5"
							hasShadow
							isPrimary
							style={{ marginTop: 40 }}
						>
							Read Their Story
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
