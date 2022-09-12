import Button from 'elements/Button';
import React from 'react';
import { Fade } from 'react-reveal';

import ImageHero from 'assets/images/image-hero.png';
import ImageHeroFrame from 'assets/images/image-hero-frame.png';
import IconTraveler from 'assets/images/icons/ic_traveler.svg';
import IconTreasure from 'assets/images/icons/ic_treasure.svg';
import IconCities from 'assets/images/icons/ic_cities.svg';

import numberFormat from 'utils/formatNumber';

export default function Hero(props) {
	const showMostPicked = () => {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: 'smooth',
		});
	};

	return (
		<Fade bottom>
			<section className="container pt-4">
				<div className="row align-items-center">
					<div className="col-6 pe-0">
						<h1 className="fw-bold line-height-1 mb-3">
							Forget Busy Work, <br />
							Start Next Vacation
						</h1>
						<p
							className="fw-light text-gray-500 w-50"
							style={{ lineHeight: '170%', marginBottom: 30 }}
						>
							We provide what you need to enjoy your holiday with
							family. Time to make another memorable moments.
						</p>
						<Button
							className="btn px-5"
							hasShadow
							isPrimary
							onClick={showMostPicked}
						>
							Show Me Now
						</Button>
						<div className="row" style={{ marginTop: 82 }}>
							<div className="col-auto">
								<img
									src={IconTraveler}
									alt={`${props.data.travelers} Travelers`}
									width="36"
									height="36"
								/>
								<h6 className="mt-3">
									{numberFormat(props.data.travelers)}{' '}
									<span className="text-gray-500 font-weight-light">
										Travelers
									</span>
								</h6>
							</div>
							<div
								className="col-auto"
								style={{ margin: '0 35px' }}
							>
								<img
									src={IconTreasure}
									alt={`${props.data.treasure} Treasure`}
									width="36"
									height="36"
								/>
								<h6 className="mt-3">
									{numberFormat(props.data.treasure)}{' '}
									<span className="text-gray-500 font-weight-light">
										Treasure
									</span>
								</h6>
							</div>
							<div className="col-auto">
								<img
									src={IconCities}
									alt={`${props.data.cities} Cities`}
									width="36"
									height="36"
								/>
								<h6 className="mt-3">
									{numberFormat(props.data.cities)}{' '}
									<span className="text-gray-500 font-weight-light">
										Cities
									</span>
								</h6>
							</div>
						</div>
					</div>
					<div className="col-6 ps-5 d-flex justify-content-end">
						<div
							className="position-relative"
							style={{ width: 520, height: 410 }}
						>
							<img
								src={ImageHero}
								alt="Room with couches"
								className="img-fluid position-absolute"
								style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
							/>
							<img
								src={ImageHeroFrame}
								alt="Room with Couches Frame"
								className="img-fluid position-absolute"
								style={{ margin: '0 -15px -15px 0' }}
							/>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
