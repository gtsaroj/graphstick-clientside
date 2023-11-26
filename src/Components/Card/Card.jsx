import { React, useState } from 'react';
import './Card.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../CardReducer/CardReducer';
import useFetch from '../../Hook/useFetch';

const Card = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;
  const { loading, data, error } = useFetch(`/products?populate=*&`);

  return (
    <>
      {loading ? (
      <div className="pro skeleton">
      <div className="skeleton-image"></div>
      <div className="description">
        <div className="skeleton-modal"></div>
        <div className="skeleton-title"> </div>
          <div className="skeleton-price"></div>
       
        <div className="star">
          <div className="skeleton-star"></div>
          <div className="skeleton-star"></div>
          <div className="skeleton-star"></div>
          <div className="skeleton-star"></div>
        </div>
        <div className="skeleton-cart"></div>
      </div>
    </div>
      ) : item ? (
        <Link className="pro" to={`/product/${item.id}`}>
          <img src={item?.attributes?.img?.data?.attributes?.url} alt="" />
          <div className="description">
            <span>Model 05</span>
            <h5>{item?.attributes?.title} </h5>
            <h4>{item?.attributes?.price}</h4>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <button>
              <i className="fa fa-shopping-cart cart"></i>
            </button>
          </div>
        </Link>
      
      ) : (
        <div>not found</div>
      )}
    </>
  );
};

export default Card;
