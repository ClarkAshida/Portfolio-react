import React from "react";
import TechCard from "../components/tech-card";
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaSass, FaWordpress, FaBootstrap} from "react-icons/fa";
import {SiTypescript} from "react-icons/si"

const Skills = () => {
   
    return (
        <div className="skills-container" id="skills">
            <div><span>&lt;</span><h1>Habilidades</h1><span>/&gt;</span></div>
            <div className="tech-container">
                <TechCard tech={<FaHtml5 />} techName="HTML"/>
                <TechCard tech={<FaCss3Alt />} techName="CSS"/>
                <TechCard tech={<FaJs />} techName="JavaScript"/>
                <TechCard tech={<FaReact />} techName="React"/>
                <TechCard tech={<SiTypescript />} techName="Typescript"/>
                <TechCard tech={<FaGitAlt />} techName="Git"/>
                <TechCard tech={<FaGithub />} techName="GitHub"/>
                <TechCard tech={<FaSass />} techName="Sass"/>
                <TechCard tech={<FaBootstrap />} techName="Bootstrap"/>
                <TechCard tech={<FaWordpress />} techName="Wordpress"/>
            </div>
        </div>
    )
}

export default Skills;