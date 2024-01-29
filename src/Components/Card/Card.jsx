import { React } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
const Card = ({ item }) => {
  const { loading } = useFetch(`/products?populate=*&`);


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
            <div>
            <img
            src={item?.attributes?.img?.data?.attributes?.url}
            alt="not showing"
          />
        </div>
          <div className="description">
            <span className="font-ubuntu font-medium text-[12px]">
              Model 05
            </span>
            <h5 className="font-ubuntu font-bold">
              {item?.attributes?.title}{" "}
            </h5>
            <h4 className="font-ubuntu">{item?.attributes?.price}</h4>
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
