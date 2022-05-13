import React from "react"
import "./CatBox.css"

const CatBox = (props) => {
    return (
        <div class="cat-box">
            <div className="cat-img">
                <img src={props.pic} alt="" />
            </div>
            <div className="cat-title">{props.title}</div>
        </div>
    )
}

export default CatBox
