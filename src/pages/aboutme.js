import React, { useEffect } from "react";
import Button from "../components/button";
import Img from '../images/img.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PDF from '../images/curriculo.pdf'

const AboutMe = () => {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, []);
    return (
        <div className="aboutme" id="aboutme">
            <div className="aboutme-container" data-aos="fade-down">
                <div><span>&lt;</span><h1>Sobre Mim</h1><span>/&gt;</span></div>

                <div className="aboutMe">
                    <img src={Img} alt="developer img"/>
                    <p className="aboutMe-text">
                    Sou um desenvolvedor Front-end apaixonado por tecnologia e criatividade. Sou especialista em criação de sites atraentes e de alta conversão. Como profissional, 
                    tenho como objetivo ajudar empresas a alcançar seus objetivos online, oferecendo soluções inovadoras e eficientes que destaquem seus produtos no mercado. <br></br><br></br>
                    Sou um profissional muito proativo e comunicativo, acredito que uma comunicação clara e eficaz torna a colaboração com meus clientes uma experiência fluida e produtiva. <br></br><br></br>
                    Meu objetivo é aprender novas coisas e aprimorar ainda mais as habilidades que possuo, para o desenvolvimento e eficiência de novos sistemas para uma melhor experiência do usuário.
                    </p>
                </div>
                <div className="btn-aboutme">
                <Button btnText="Baixar Currículo" btnLink={PDF} btnStyle="btn-container" blank="_blank" download/>
                </div>        
            </div>
        </div>
    )
}

export default AboutMe;