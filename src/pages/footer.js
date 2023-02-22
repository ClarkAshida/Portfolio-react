import React from "react";
import {FaArrowUp} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer-container">
            <p>Copyright © 2023 | Flávio Alexandre</p>
            <div className="return-btn">
                <a href="#"><button href="#"><FaArrowUp /></button></a>
            </div>
        </div>
    )
}

export default Footer;