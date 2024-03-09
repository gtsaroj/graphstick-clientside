import React, { useState } from "react";
import {Card} from "../Card/Card";
import "./FeatureProduct.css";
import useFetch from "../../Hook/useFetch";
import Pagination from "../Pagination/Pagination";
import ReactLoading from 'react-loading';

const FeaturedProduct = ({ type }) => {
  const { loading, data, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  const [currentpage, setCurrentPage] = useState(1);
  const [postperpage, setPostPerPage] = useState(12);

  const lastpostindex = currentpage * postperpage;
  const firstpostindex = lastpostindex - postperpage;
  const currentPosts = data ? data.slice(firstpostindex, lastpostindex) : [];

  return (
    <section id="product1" class="section-p1 px-5">
      <h2 className="sm:text-[32px] text-[20px] font-bold">{type}</h2>
      <p>Latest Modern Sticker</p>
      <div class="pro-container">
        {error ? (
          "Something went wrong!"
        ) : loading ? (
          <ReactLoading type='spinningBubbles' color='black' className='sm:w-16 sm:h-16 w-11 h-11 my-16'/>
        ) : (
          currentPosts?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
      {data ? (
        <Pagination
          totalItems={data.length}
          itemsPerPage={postperpage}
          currentPage={currentpage}
          onPageChange={setCurrentPage}
        />
      ) : null}
    </section>
  );
};

export default FeaturedProduct;
