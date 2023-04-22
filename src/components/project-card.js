import React, { useEffect } from "react";
import {FaGithub} from "react-icons/fa"
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectCard = ({projetos, filtro}) => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    const projetosFiltrados =
    filtro === 'Todos' ? projetos : projetos.filter((projeto) => projeto.tipo === filtro);

    return (
        <div className="project-card">
        
        {projetosFiltrados.map((projeto) => (
        
        <div className="project-card-container" key={projeto.nome} data-aos="flip-right">
          <img src={projeto.img} alt={projeto.nome}/>
          <div className="card-content">
          <h2>{projeto.nome}</h2>
          <p>{projeto.descricao}</p>
          <p>{projeto.techs}</p>
            <div className="card-btn-container">
                <a href={projeto.link} className="btn-acess">Acessar</a>
                <a href={projeto.github} className="btn-github">Github <FaGithub /></a>
            </div>
          </div>
        </div>
        ))}
       
        </div>
    )
}

export default ProjectCard;