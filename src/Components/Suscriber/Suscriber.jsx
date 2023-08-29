import React from 'react'
import "./Suscriber.css"

const Suscriber = () => {
    return (
        <section id="newspaper" class="section-p1">
            <div class="newstext">
                <h2>Sign Up For Newsletters</h2>
                <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
            </div>
            <div class="form">
                <input type="email" placeholder="Your email address" />
                <button>Sign Up</button>
            </div>
        </section>
    )
}

export default Suscriber
