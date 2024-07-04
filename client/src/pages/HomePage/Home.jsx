import React from 'react'
import About from '../../components/About/About.jsx'
import Navbar from '../../components/Header/Navbar.jsx'
import Header from '../../components/Header/Header.jsx'
import WhyChooseSailorsWave from '../../components/WhyChooseSailorsWave/WhyChooseSailorsWave.jsx'
import TrustedByCompanies from '../../components/TrustedByCompanies/TrustedByCompanies.jsx'
import OurServices from '../../components/OurServices/OurServices.jsx'

const HomePage = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <WhyChooseSailorsWave/>
    <TrustedByCompanies/>
    <OurServices/>
    </>

  )
}

export default HomePage;
