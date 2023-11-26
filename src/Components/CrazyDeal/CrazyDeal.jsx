import React, { useState} from 'react';
import "./CrazyDeal.css";
import useFetch from "../../Hook/useFetch";
import { useNavigate } from "react-router-dom";
import Timer from '../Timer/Timer';

const CrazyDeal = () => {
  const [dealAvailable, setDealAvailable] = useState(true);
  const { data, loading } = useFetch(`/offers?populate=*`);
  const navigate = useNavigate();

  const handleTimerEnd = () => {
    setDealAvailable(false);
  };

  const handleClick = (item) => {
    const productId = item.id;
    console.log(productId);
    if (productId && dealAvailable) {
      navigate(`/offer/${productId}`, {
        state: { productData: item },
        replace: true,
      });
    }
  };

  return (
    <>
      {loading ? (
        <div className="crazydeal">
          <div
            className="deal skeleton"
            style={{
              width: "350px",
              height: "200px",
            }}
          ></div>
          <div
            className="figure skeleton"
            style={{
              width: "400px",
              height: "300px",
            }}
          ></div>
        </div>
      ) : dealAvailable && data && data.length > 0 ? (
        data.map((item) => {
          const { hours, minutes, seconds } = item.attributes;
          const endTime = new Date();
          endTime.setHours(endTime.getHours() + hours);
          endTime.setMinutes(endTime.getMinutes() + minutes);
          endTime.setSeconds(endTime.getSeconds() + seconds);

          return (
            <div className="crazydeal" key={item.id}>
              <div className="deal">
                <h3>Deal of the Day</h3>
                <div className="card">
                  <h3>{item?.attributes?.title}</h3>
                  <div className="price">
                    <div className="oldprice">{item?.attributes?.oldprice}</div>
                    <div className="newprice">{item?.attributes?.newprice}</div>
                  </div>

                  <span>{item?.attributes.desc}</span>

                  <button onClick={() => handleClick(item)}>Shop now</button>
                  <Timer endTime={endTime.getTime()} onTimerEnd={handleTimerEnd} />
                </div>
              </div>
              
              <div className="figure">
                <img src={item?.attributes?.img?.data?.attributes?.url} alt="" />
              </div>
            </div>
          );
        })
      ) : (
        <div>Deal has ended</div>
      )}
    </>
  );
};

export default CrazyDeal;
