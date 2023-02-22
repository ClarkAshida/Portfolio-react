import React, { useState } from "react";
import ProjectCard from "../components/project-card";
import Socialmedia from "../images/socialmedia.png"
import Pokedex from "../images/pokedex.png"
import Todolist from "../images/todolist.png"
import Pomodoro from "../images/pomodoro.png"
import Rocketflix from "../images/rocketflix.png"
import Eduford from "../images/Eduford.png"

const Projects = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="projects-container" id="projects">
            <div><span>&lt;</span><h1>Projetos</h1><span>/&gt;</span></div>
            
            <div className="projects">
            <ProjectCard
            projectImg={Socialmedia}
            projectName="Social Media App"
            projectDescription="Um WebApp de Rede Social para criação e interação de posts com outros usuários."
            projectTechs="ReactJs · Hooks · CSS · Firebase"
            projectLink="https://social-media-app-832ed.web.app/"
            projectGithub="https://github.com/ClarkAshida/Social-Media-React-App"/>
            <ProjectCard
            projectImg={Pokedex}
            projectName="Pokedex App"
            projectDescription="Um WebApp de Pokedex para acessar dados de Pokemons consumindo a Pokeapi."
            projectTechs="ReactJs · Hooks · CSS · Pokeapi"
            projectLink="https://pokedex-react-app-swart.vercel.app/"
            projectGithub="https://github.com/ClarkAshida/Pokedex-React-App"/>
            <ProjectCard 
            projectImg={Todolist}
            projectName="To-Do List App"
            projectDescription="Um Web App de lista de tarefas para listar e organizar uma rotina mais produtiva."
            projectTechs="HTML · CSS · JavaScript"
            projectLink="https://clarkashida.github.io/To-do-List-Javascript/"
            projectGithub="https://github.com/ClarkAshida/To-do-List-Javascript"/>
            </div>
            {toggle && (
            <div className="projects-2" style={{ display: 'flex' }}>
            <ProjectCard
            projectImg={Pomodoro}
            projectName="Pomodoro Timer App"
            projectDescription="Um WebApp contador Pomodoro para manter a produtividade em atividades que necessitam manter o foco."
            projectTechs="HTML · CSS · JavaScript"
            projectLink="https://clarkashida.github.io/Pomodoro-Timer-Javascript/"
            projectGithub="https://github.com/ClarkAshida/Pomodoro-Timer-Javascript"/>
            <ProjectCard
            projectImg={Rocketflix}
            projectName="Rocketflix App"
            projectDescription="Um WebApp para encontrar filmes interessantes quando você não sabe o que assistir, consumindo a MDB Api."
            projectTechs="HTML · CSS · JavaScript · MDB Api"
            projectLink="https://randommovies.netlify.app/"
            projectGithub="https://github.com/ClarkAshida/Rocketflix"/>
            <ProjectCard 
            projectImg={Eduford}
            projectName="Eduford College Website"
            projectDescription="Um Website institucional e responsivo para divulgar os cursos e serviços da universidade Eduford."
            projectTechs="HTML · CSS"
            projectLink="http://52.221.173.61/Eduford/index.html"
            projectGithub="https://github.com/ClarkAshida/Website-Responsivo-HTML-e-CSS"/>
            </div>
            )}
            <div className="project-btn">
            {toggle ?(<a href="#projects" onClick={() => setToggle(!toggle)} className="show-less">Mostrar Menos</a>) : (<button onClick={() => setToggle(!toggle)}>Carregar Mais</button>)}
            </div>
        </div>
    )
}

export default Projects;