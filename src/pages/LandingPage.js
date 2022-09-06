import React from 'react';
import { useRef } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';

import landingPage from 'json/landingPage.json';

export default function LandingPage(props) {
	const refMostPicked = useRef();
	return (
		<>
			<Header />
			<Hero
				refMostPicked={refMostPicked}
				data={landingPage.hero}
			/>
			<MostPicked
				refMostPicked={refMostPicked}
				data={landingPage.mostPicked}
			/>
		</>
	);
}
