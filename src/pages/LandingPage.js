import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'

import landingPage from 'json/landingPage.json'

export default function LandingPage(props) {
  return (
    <>
      <Header />
      <Hero data={landingPage.hero} />
    </>
  )
}
