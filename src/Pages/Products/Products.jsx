import React, {useState} from 'react'
import "./Products.css"
import Slider from '../../Components/Slider/Slider'
import useFetch from '../../Hook/useFetch'
import {Card} from '../../Components/Card/Card'
import Pagination from '../../Components/Pagination/Pagination'
import ReactLoading from 'react-loading';

const Products = () => {


    const { loading, data, error } = useFetch(`/products?populate=*&`)

    const [currentpage, setCurrentPage]  = useState(1);
const [postperpage, setPostPerPage] = useState(12);



const lastpostindex = currentpage * postperpage;
const firstpostindex = lastpostindex - postperpage;
const currentPosts =  data ? data.slice(firstpostindex, lastpostindex): [];


   
    return (
        <div className="ProductsPage">
            <Slider />
            <section id="product1" class="section-p1">
            <p>Latest Modern Sticker</p>
            <div class="pro-container">
                {error ? "Something went wrong!" : (loading ? <ReactLoading type='spinningBubbles' color='black' className='sm:w-16 sm:h-16 w-11 h-11 my-16'/> : currentPosts?.map((item) => (
                    < Card item={item} key={item.id}   />
                )))}

            </div>
            {data ? <Pagination
  totalItems={data.length}
  itemsPerPage={postperpage}
  currentPage={currentpage}
  onPageChange={setCurrentPage}
/>: null}


        </section>

        </div>
    )
}

export default Products
