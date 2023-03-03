import "./HeroImgStyles.css";
import React from 'react' 
import IntroImg from "../assets/background.jpg"
import  { Link } from "react-router-dom"



const HeroImg = () => {
  return (
    
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>HI, I'M  A  ROHAN.</p>
          <h1>Full Stack Web Devloper</h1>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/about" className="btn btn-light">Contact</Link>
        </div>
    </div>
    
  )
}

export default HeroImg