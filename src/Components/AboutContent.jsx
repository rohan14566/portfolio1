import "./AboutContentStyles.css";
import { Link } from "react-router-dom"
import React from 'react'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const AboutContent = () => {
  return (
    <div className=" about">
        <div className="left">
           <h1>Who Am I?</h1>
           <p>I'm a Full stack Web Devloper. I Create responsive secure websites by using programming langauge Like <span className="abt-text">HTML,CSS,JAVASCRIPT,REACT.JS</span>  to write code and convert a web design </p>
           <Link to="/contact">
            <button className="btn">Contact</button>
           </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} alt=""/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent