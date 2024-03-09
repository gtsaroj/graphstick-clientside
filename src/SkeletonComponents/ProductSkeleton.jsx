import React from 'react'
import "../Pages/Product/Product.scss"
import "../Components/FeaturedProducts/FeatureProduct.css"

export const ProductSkeleton = () => {
  return (
    <div className="product">
    <div className="left">
      <div
        className="mainImg"
        style={{
          background:
            "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite linear",
          height: "400px",
        }}
      ></div>
    </div>
    <div className="right">
      <h1
        style={{
          width: "250px",
          height: "40px",
          background:
            "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
          animation: "shimmer 1.5s infinite linear",
        }}
      ></h1>
      <span
        className="price"
        style={{
          width: "100px",
          height: "40px",
          background:
            "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
          animation: "shimmer 1.5s infinite linear",
        }}
      ></span>
      <p> </p>
      <div className="quantity">
        <button
          style={{
            width: "50px",
            height: "50px",
            background:
              "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
            animation: "shimmer 1.5s infinite linear",
          }}
        ></button>
        <h3></h3>
        <button
          style={{
            width: "50px",
            height: "50px",
            background:
              "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
            animation: "shimmer 1.5s infinite linear",
          }}
        ></button>
      </div>

      <button
        className="add"
        style={{
          width: "200px",
          height: "50px",
          background:
            "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
          animation: "shimmer 1.5s infinite linear",
        }}
      ></button>
      <div className="link">
        <div
          className="item"
          style={{
            width: "10px",
            background:
              "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
            animation: "shimmer 1.5s infinite linear",
          }}
        ></div>
        <div
          className="item"
          style={{
            width: "300px",
            height: "20%",
            background:
              "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
            animation: "shimmer 1.5s infinite linear",
          }}
        ></div>
      </div>
      <div
        className="info"
        style={{
          width: "300px",
          background:
            "linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)",
          animation: "shimmer 1.5s infinite linear",
          height: "100px",
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="infos">
        <span></span>
        <hr />
        <span></span>
        <hr />
        <span></span>
      </div>
    </div>
  </div>
  )
}

export const FeaturedProductSkeleton = () => {
  return (
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
  )
}

export const CardSkeleton = () => {
  return (
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
  )
}