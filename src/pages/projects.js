import React, { useState } from "react";
import ProjectCard from "../components/project-card";
import projetos from "../components/projects-array";

const Projects = () => {
    //filtro de projetos
    const [filtro, setFiltro] = useState('Últimos');
    const opcoesFiltro = ['Últimos','Todos','Web Apps', 'Landing Pages'];
    const handleClickFiltro = (opcao) => {
        setFiltro(opcao);
        console.log(opcao)
    };

    //mostrar mais projetos
    const projetosfiltrados = projetos.slice(0, 1)
    
    
    return (
        <div className="projects-container" id="projects">
            <div><span>&lt;</span><h1>Projetos</h1><span>/&gt;</span></div>
            
            <div className="projects-filter">
            {opcoesFiltro.map((opcao) => (
            <button key={opcao} onClick={() => handleClickFiltro(opcao)}>
            {opcao}
          </button>
        ))}
            </div>
            <div className="projects" style={{ display: 'flex' }}>
         {projetosfiltrados.map((projeto, index) => (
          <ProjectCard key={index} projetos={projetos} filtro={filtro} />
         ))}
         </div>

        </div> 
    )
}

export default Projects;