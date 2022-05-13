import React from "react"
import foot from "../../Images/logo.png"
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-items">
                <div className="foot-image">
                    <img src={foot} alt="foot" />
                </div>
                <div className="foot-item">
                    <div className="foots left">
                        <div>Support</div>
                        <div>About Us</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div className="foots">
                        <div id="right">Terms & Conditions</div>
                        <div id="right">Return & Refund Policy</div>
                        <div id="right">Shipping & Delivery Policy</div>
                    </div>
                </div>
            </div>
            <div className="foot-note">
                Sea Basket | All Rights Reserved | 2021 Copyright
            </div>
        </div>
    )
}

export default Footer
