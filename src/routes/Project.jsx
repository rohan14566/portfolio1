import React from 'react'
import CollapsibleExample from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
      <CollapsibleExample/>
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project