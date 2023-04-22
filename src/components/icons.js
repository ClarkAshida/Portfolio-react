import React from "react";
import {FaGithub, FaLinkedin, FaInstagram, FaWhatsapp} from "react-icons/fa"

const Icons = () => {
    return (
        <div className="icons-container">
               <a href="https://github.com/ClarkAshida"><FaGithub /></a>
               <a href="https://www.linkedin.com/in/fl%C3%A1vio-alexandre-315107222/"><FaLinkedin /></a> 
               <a href="https://www.instagram.com/clark.code/?igshid=ZDdkNTZiNTM%3D"><FaInstagram /></a>  
               <a href="https://api.whatsapp.com/send?phone=5584987060910"><FaWhatsapp /></a> 
                <div className="line"></div>
            </div>
    )
}

export default Icons;