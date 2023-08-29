import React from 'react'
import "./BlogPage.css"

const BlogPage = () => {
    return (
        <>
            <section id="blog">
                <div class="blog-box">
                    <div class="blog-image">
                        <img src={require("../productsImg/1.jpg")} alt="" />
                    </div>
                    <div class="blog-details">
                        <h4>The cotton-jersey-zip-hood-jersey</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint corporis eveniet provident
                            similique dolores, tempora quisquam cumque perspiciatis quam enim, in, obcaecati qui!</p>
                        <a href="#">Readmore</a>
                    </div>
                    <h1>24/7</h1>
                </div>





            </section>
        </>
    )
}

export default BlogPage
