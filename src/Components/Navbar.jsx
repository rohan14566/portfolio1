import "./NavbarStyles.css"

import React, {useState} from 'react'
import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { FiX } from "react-icons/fi";


const Navbar = () => {
const [click,setClick]=useState(false);
const handleClick=()=>setClick(!click)

const [color, setColor]=useState(false);
const changeColor=()=>{
    if(window.scrollY >=100){
        setColor(true);
    }else{
        setColor(false);
    }
};
window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="menuIcon" onClick={handleClick
        }>
            {click ? (<FiX size={30} style={{color:"#fff"}}/>
            ) : ( <BiMenu/>
            )}
        </div>
    </div>
  )
}

export default Navbar

