import React from "react"

import homeImg from "../../Images/home.png"
import logoImg from "../../Images/logo.png"
import "./Home.css"

const Home = () => {
    return (
        <section className="section home-section">
            <nav className="navbar">
                <div className="logo">
                    <img src={logoImg} alt="" />
                </div>
                <div className="links">
                    <a href="#">Category</a>
                    <a href="#">FAQs</a>
                    <a href="#">My Cart</a>
                    <button className="login">Login</button>
                </div>
            </nav>
            <div className="home-img">
                <img src={homeImg} alt="" />
            </div>
        </section>
    )
}

export default Home
