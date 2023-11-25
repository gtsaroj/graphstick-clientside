import React from "react";
import "./CrazyDeal.css";

const CrazyDeal = () => {
  return (
    <div className="crazydeal">
      <div className="deal">
        <h3>Deal of the Day</h3>
        <div className="card">
          <h3>stylish sticker</h3>
          <div className="price">
          
            <div className="oldprice">1500</div>
            <div className="newprice">900</div>
          </div>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            explicabo nobis accusamus reiciendis quasi.
          </span>
          <button> shop now</button>
          <div className="duration">
            <div className="hours">1 hr</div>
            <div className="minutes">45 min</div>
            <div className="seconds">05 sec</div>
          </div>
        </div>
      </div>
      <div className="figure">
        <img src={require("../productsImg/10.jpg")} alt="" />
      </div>
    </div>
  );
};

export default CrazyDeal;
