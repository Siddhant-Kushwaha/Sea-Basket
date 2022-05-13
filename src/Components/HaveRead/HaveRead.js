import React from "react"
import "./HaveRead.css"

const HaveRead = (props) => {
    return (
        <div className="have-read">
            <h2>{props.label}</h2>
            <p>{props.children}</p>
            <div className="read-more-btn">
                <a href={props.link}>
                    READ MORE &nbsp;
                    <i className="fa-solid fa-chevron-right"></i>{" "}
                </a>
            </div>
        </div>
    )
}

export default HaveRead
