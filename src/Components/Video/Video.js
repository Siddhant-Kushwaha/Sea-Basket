import React, { useRef } from "react"
import "./Video.css"
import poster from "../../Images/poster.png"
const Video = () => {
    const ref = useRef(null)

    const handleClick = () => {
        ref.current.play()
    }
    return (
        <div className="section video-section">
            <div className="section-head">A GLANCE AT OUR PRODUCT</div>

            <div className="video-container">
                <video
                    ref={ref}
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                    poster={poster}
                    loop
                ></video>
                <i class="fa-solid fa-circle-play" onClick={handleClick}></i>
            </div>
        </div>
    )
}

export default Video
