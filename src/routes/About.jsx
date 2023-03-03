import React from 'react'
import CollapsibleExample from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
       <CollapsibleExample/>
       <HeroImg2 heading="ABOUT" text="I'm a Full Stack Web Devloper"/>
       <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About