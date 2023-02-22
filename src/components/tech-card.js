import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const TechCard = ({tech, techName}) => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <div className="tech-card-container" data-aos="fade-down">
            <div className="tech-wrapper">
            {tech}
            <p>{techName}</p>
            </div>
        </div>
    )
}

export default TechCard;