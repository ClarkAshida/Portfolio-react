import React, { useEffect, useState } from "react";
import logo from '../images/logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <div className="navbar-container">
            <nav>
            <div className="logo-container">
               <a href="#home"> <img src={logo} alt="Logo"/> </a>
                <span>&lt;</span><a href="#home"><p>Clark<span>.</span>Code</p></a><span>/&gt;</span>
                {menu ? (<button onClick={handleMenu} className="menu-btn"><FaTimes /></button>) : (<button onClick={handleMenu} className="menu-btn"><FaBars /></button>)}
                <div className={`links-contanier ${menu ? "show" : ""}`}>
            <ul>
                <li data-aos="fade-left"><a href="#home">Início</a></li>
                <li data-aos="fade-left"><a href="#aboutme">Sobre Mim</a></li>
                <li data-aos="fade-left"><a href="#projects">Projetos</a></li>
                <li data-aos="fade-left"><a href="#skills">Habilidades</a></li>
                <a href="#contact" className="contact-btn" data-aos="fade-left">Entrar em Contato</a>
            </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;