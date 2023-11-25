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
            <div className="hours">00 <br/>hr</div>
            <div className="minutes">45 <br/>min</div>
            <div className="seconds">05 <br/>sec</div>
          </div>
        </div>
      </div>
      <div className="figure">
        <img src={require("./3-removebg-preview.png")} alt="" />
      </div>
    </div>
  );
};

export default CrazyDeal;
