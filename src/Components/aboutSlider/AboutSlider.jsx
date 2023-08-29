import React from 'react'
import "./AboutSlider.css"

const AboutSlider = () => {
    return (
        <>        <section id="about-header" className="section-p1">
            <img src={require('../productsImg/1.jpg')} alt="" />
            <div>
                <h2>Who We Are?</h2>
                <p>I'm Saroj GT, a MERN developer with one year of experience. Proficient in React.js, Node.js, and MongoDB,
                    I specialize in building dynamic web applications. Let's create something amazing together!</p>
                <br /><br /> {/* Use self-closing tags for <br> */}
                <marquee id="slide">Work for money & design for love!
                    I am Saroj GT, MERN Stack Developer based in Nepal .</marquee>
            </div>
        </section>
            <section id="about-app" class="section-p1">
                <h1>Download Our<a href="#">App</a></h1>
                <div class="video">
                    <video autoPlay loop muted>
                        <source src={require("./videoplayback.mp4")}>
                        </source>
                    </video>
                </div>
            </section >
        </>

    )
}

export default AboutSlider
