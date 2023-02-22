import React, { useEffect } from "react";
import Icons from "../components/icons";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <div className="home" id="home">
            <div className="home-container" data-aos="fade-up">
                <p className="welcome">Olá, o meu nome é</p>
                <h1>Flávio Alexandre</h1>
                <h1>Desenvolvedor <span className="typing-animation">Front-end</span></h1>
                <div>
                Eu sou um desenvolvedor front-end apaixonado por tecnologia!
                Atualmente estou trabalhando como <span>freelancer</span> na criação de sites de alta conversão e soluçōes inovadoras
                para destacar sua empresa no mercado.
                </div>
                <a href="#aboutme">Saiba Mais</a>
                </div>
                <div class="custom-shape-divider-bottom-1676124314">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                </svg>
                </div>
                <Icons />
        </div>
    )
}

export default Home;