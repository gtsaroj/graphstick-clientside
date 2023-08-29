import React from 'react'
import "./Featured.css"

const Featured = () => {
    return (
        <section id="features">

            <div class="fe-box">
                <img src={require('../features/free.png')} alt="" />
                <h6>Free Shipping</h6>
            </div>
            <div class="fe-box">
                <img src={require('../features/deliver.png')} alt="" />
                <h6>Online Order</h6>
            </div>
            <div class="fe-box">
                <img src={require('../features/money.png')} alt="" />
                <h6>Save Money</h6>
            </div>
            <div class="fe-box">
                <img src={require('../features/happy.png')} alt="" />
                <h6>Happy Sell</h6>
            </div>
            <div class="fe-box">
                <img src={require("../features/promotions.png")} alt="" />
                <h6>Promotions</h6>
            </div>
            <div class="fe-box">
                <img src={require("../features/f24.png")} />
                <h6>F24/7 Support</h6>
            </div>
        </section>
    )
}

export default Featured
