import React from 'react'

import HeroSlide from '../components/HeroSection/HeroSlide'
import Footer from '../components/Footer'
import FeaturedCategories from '../../components/HeroSection/FeaturedCategories'
import HeroSlideShow from '../../components/HeroSection/HeroSlideShow'
import Navbar from '../../components/Navbar'

const HomeRouter = () => {
  return (
    
      <>
      <Navbar/>
      <HeroSlideShow/>
        <FeaturedCategories/>
        <Footer/></>
        
      
    
  )
}

export default HomeRouter
