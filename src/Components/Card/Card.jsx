import { React } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
import { CardSkeleton } from "../../SkeletonComponents/ProductSkeleton";
export const Card = ({ item }) => {
  const { loading } = useFetch(`/products?populate=*&`);

  return (
    <>
      {loading ? (
        <CardSkeleton />
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

