import React from "react"
import ReadMore from "../ReadMore/ReadMore"
import pic1 from "../../Images/pic1.png"
import pic2 from "../../Images/pic2.png"

const Topics = () => {
    return (
        <div className="section topic-section">
            <div className="section-head">TOPICS YOU CAN'T MISS</div>
            <ReadMore label={"topics you can’t miss"} link={"#"} pic={pic1}>
                <>
                    Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut
                    senectus nisl adipiscing posuere et a. Tincidunt consectetur
                    sapien pellentesque vitae, nulla vitae sed feugiat.
                    Consectetur hendrerit massa felis, et. Cursus tortor ut
                    fames sapien a vulputate amet malesuada.
                </>
            </ReadMore>
            <ReadMore
                label={"how to clean/cut your seafood"}
                link={"#"}
                pic={pic2}
            >
                <>
                    Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut
                    senectus nisl adipiscing posuere et a. Tincidunt consectetur
                    sapien pellentesque vitae, nulla vitae sed feugiat.
                    Consectetur hendrerit massa felis, et. Cursus tortor ut
                    fames sapien a vulputate amet malesuada.
                </>
            </ReadMore>
        </div>
    )
}

export default Topics
