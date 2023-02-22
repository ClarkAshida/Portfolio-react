import React from "react";

const Button = ({btnStyle, btnText, btnLink, blank}) => {
    return (
    <div>
    <a href={btnLink} className={btnStyle} target={blank}>{btnText}</a>
    </div>
    )
}

export default Button;