import React from "react";

const Button = ({btnStyle, btnText, btnLink, blank}) => {
    return (
    <a href={btnLink} className={btnStyle} target={blank} download>{btnText}</a>
    )
}

export default Button;