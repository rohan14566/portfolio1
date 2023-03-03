import "./FooterStyles.css";
import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebook, FaHome,FaInstagram,FaLinkedinIn,FaMailBulk,FaPhone } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
         <div className="footer-container">
            <div className="left">
               <div className="location">
                <FaHome size={22} style={{color:"#fff",marginRight:"2rem"}} />
                   <div className="address">
                    <p>Shahunagar,Pimpri-Chinchvad.</p>
                    
                   </div>
                </div>
                <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                   +91 7219693363</h4>
               </div>
               <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                   rohanambitkar@gmail.com</h4>
               </div>
            </div>
            <div className="right">
            <h4 className="head">Links</h4>
               <Link to="/"><FiArrowRight size={20}  style={{color:"#fff",marginRight:"1rem", marginTop:"0.2rem"}}/><span>Home</span></Link>
               <Link to="/project"><FiArrowRight size={20} style={{color:"#fff",marginRight:"1rem", marginTop:"0.2rem"}} /><span>Project</span></Link>
               <Link to="/about"><FiArrowRight size={20} style={{color:"#fff",marginRight:"1rem", marginTop:"0.2rem"}} /><span>About</span></Link>
               <Link to="/contact"><FiArrowRight size={20} style={{color:"#fff",marginRight:"1rem", marginTop:"0.2rem"}} /><span>Contact</span></Link>
                <div className="social">
               <Link to="https://www.facebook.com/rohan ambitkar" target="_blank"><FaFacebook size={30} style={{color:"#fff",marginRight:"2rem"}} /></Link>
               <Link to="https://www.instagram.com/roll_no._01" target="_blank"><FaInstagram size={30} style={{color:"#fff",marginRight:"2rem"}} /></Link>
               <Link to="https://www.linkedin.com/rohan ambitkar" target="_blank"><FaLinkedinIn size={30} style={{color:"#fff",marginRight:"2rem"}} /></Link>
                </div>
            </div>
         </div>
         <p className="copyright">Copyright @2023 All Rights reserved</p>
    </div>   
  )
}

export default Footer

