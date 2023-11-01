import React from 'react'
import Card from '../Card/Card'
import "./FeatureProduct.css"
import useFetch from '../../Hook/useFetch'

const FeaturedProduct = ({ type }) => {

    const { loading, data, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    console.log(data)

    return (
        <section id="product1" class="section-p1">
            <h2>{type}</h2>
            <p>Latest Modern Sticker</p>
            <div class="pro-container">
                {error ? "Something went wrong!" : (loading ? "loading" : data?.map((item) => (
                    < Card item={item} key={item.id} />
                )))}

            </div>
        </section>
    )
}

export default FeaturedProduct
