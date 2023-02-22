import React, { useEffect } from "react";
import {FaGithub} from "react-icons/fa"
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectCard = ({projectImg, projectName, projectDescription, projectTechs, projectLink, projectGithub}) => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <div className="project-card" data-aos="flip-right">
            <div className="project-card-container">
                <img src={projectImg} alt={projectName}/>
                <div className="card-content">
                <h2>{projectName}</h2>
                <p>{projectDescription}</p>
                <p>{projectTechs}</p>
                <div className="card-btn-container">
                <a href={projectLink} className="btn-acess"  target="_blank">Acessar</a>
                <a href={projectGithub} className="btn-github"  target="_blank">Github <FaGithub /></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;