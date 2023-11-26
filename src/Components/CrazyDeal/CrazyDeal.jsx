import React, { useState, useEffect } from "react";
import "./CrazyDeal.css";
import useFetch from "../../Hook/useFetch";
import { useNavigate } from "react-router-dom";

const CrazyDeal = () => {
  const { data, error, loading } = useFetch(`/offers?populate=*`);
  const navigate = useNavigate();
  const [dealAvailable, setDealAvailable] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (data && data.length > 0) {
        const deal = data[0]?.attributes;
        if (deal.hours <= 0 && deal.minutes <= 0 && deal.seconds <= 0) {
          // Deal has ended
          setDealAvailable(false);
          clearInterval(intervalId);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data]);

  const handleClick = (item) => {
    const productId = item.id;
    console.log(productId);
    if (productId) {
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
            className="deal"
            style={{
              background:
                'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite linear',
              width: '350px',
              height: '200px',
            }}
          ></div>
          <div
            className="figure"
            style={{
              background:
                'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite linear',
              width: '400px',
              height: '300px',
            }}
          ></div>
        </div>
      ) : (
        data?.map((item) => (
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

                {dealAvailable ? (
                  <div className="duration">
                    <div className="hours">
                      {new Date(item.attributes.endTime).getHours()}
                      <br />
                      hr
                    </div>
                    <div className="minutes">
                      {new Date(item.attributes.endTime).getMinutes()} <br />
                      min
                    </div>
                    <div className="seconds">
                      {new Date(item.attributes.endTime).getSeconds()} <br />
                      sec
                    </div>
                  </div>
                ) : (
                  <div className="product-not-available">Deal has ended!</div>
                )}
              </div>
            </div>
            <div className="figure">
              <img src={item?.attributes?.img?.data?.attributes?.url} alt="" />
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default CrazyDeal;
