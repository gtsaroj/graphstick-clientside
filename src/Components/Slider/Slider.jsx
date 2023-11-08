import React from 'react'
import "./Slider.css"
import { Link } from 'react-router-dom'


const Slider = () => {
    return (
        <section id="hero">
            <div id="content">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all Design</h1>
                <p id="page">Buy Your Favourite Products
                </p>
                <Link to={"/Products/:id"}><button>Shop Now</button></Link>
                
            </div>
        </section>
    )
}

export default Slider
