import "./Collapse.css"
import { useRef, useState } from "react"

function Collapse(props) {
    const [open, setOpen] = useState(0)
    const parentRef = useRef()
    console.log(open)
    return (
        <div className="collapse">
            <div className="collapse-heading" onClick={() => setOpen(!open)}>
                <div className="collpase-toggle btn">{props.label}</div>

                <i
                    className={
                        !open
                            ? "fa-solid fa-chevron-down"
                            : "fa-solid fa-chevron-up"
                    }
                ></i>
            </div>
            <div
                className="collapse-parent"
                ref={parentRef}
                style={
                    open
                        ? { height: parentRef.current.scrollHeight + "px" }
                        : { height: "0px" }
                }
            >
                <div className="collapse-content">{props.children}</div>
            </div>
        </div>
    )
}

export default Collapse
