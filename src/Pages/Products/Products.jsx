import React from 'react'
import "./Products.css"
import Slider from '../../Components/Slider/Slider'
import FeaturedProduct from '../../Components/FeaturedProducts/FeaturedProduct'

const Products = () => {



    return (
        <div className="ProductsPage">
            <Slider />
            <FeaturedProduct type={"All products are available here"} />

        </div>
    )
}

export default Products
