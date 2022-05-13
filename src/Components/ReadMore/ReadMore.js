import React from "react"
import "./ReadMore.css"

const ReadMore = (props) => {
    return (
        <div className="topics">
            <h2>{props.label}</h2>
            <p>{props.children}</p>
            <div className="read-more-btn">
                <a href={props.link}>
                    READ MORE &nbsp;
                    <i className="fa-solid fa-chevron-right"></i>
                </a>
            </div>
            <img className="bg-img" src={props.pic} alt="" />
        </div>
    )
}

export default ReadMore
