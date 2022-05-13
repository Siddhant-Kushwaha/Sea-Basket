import React, { useEffect, useState } from "react"
import CatBox from "../CatBox/CatBox"
import "./Category.css"
import pic1 from "../../Images/fish.png"
import pic2 from "../../Images/crustaceans.png"
import pic3 from "../../Images/exotic.png"
import axios from "axios"

const Category = () => {
    // Code to fetch data from API

    // const [cat, setCat] = useState([])
    // const fetchData = async () => {
    //     axios
    //         .get("https://your-API-URL.com/api", {
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //                 "Content-Type": "application/json",
    //             },
    //         })
    //         .then((data) => {
    //             setCat(data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // useEffect(() => {
    //     fetchData()
    // })

    return (
        <div className="section category-section">
            <section className="top">
                <div className="section-head">HOW IT WORKS</div>
                <div className="section-para">
                    Sea Basket delivers fresh sourced seafood in a few easy
                    clicks
                </div>
            </section>
            <div className="category-container">
                <div className="cat-head">CATEGORIES</div>
                <div className="category-box">
                    <CatBox title={"Fish"} pic={pic1} />
                    <CatBox title={"Crustaceans"} pic={pic2} />
                    <CatBox title={"Exotic"} pic={pic3} />
                    {/*  */}
                    {/* 
                        cat.map((obj)=>{
                            return <CatBox title={obj.title} pic={obj.image} />
                        })
                    */}
                </div>
            </div>
        </div>
    )
}

export default Category
