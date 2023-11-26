import React from "react";
import "./CrazyDeal.css";
import useFetch from "../../Hook/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CrazyDeal = () => {
  const id = useParams().id;

  const { data, error, loading } = useFetch(`/offers?populate=*`);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (item) => {
    // Assuming item has an id property
    // Adjust this based on your data structure
    const productId = item.id;
    console.log(productId)
    if (productId) {
      navigate(`/offer/${productId}`, {
        state: { productData: item},
        replace: true,

      },
    
      );

      // Assuming addToCart is your action creator
    }
  };

  return (
    <>
      {loading
        ? "loading.."
        : data?.map((item) => (
            <div className="crazydeal">
              <div className="deal">
                <h3>Deal of the Day</h3>
                <div className="card" key={item.id}>
                  <h3>{item?.attributes?.title}</h3>
                  <div className="price">
                    <div className="oldprice">{item?.attributes?.oldprice}</div>
                    <div className="newprice">{item?.attributes?.newprice}</div>
                  </div>

                  <span>{item?.attributes.desc}</span>
                  <button onClick={() => handleClick(item)}>Shop now</button>

                  <div className="duration">
                    <div className="hours">
                      {item.attributes.hours}
                      <br />
                      hr
                    </div>
                    <div className="minutes">
                      {item?.attributes?.minutes} <br />
                      min
                    </div>
                    <div className="seconds">
                      {item?.attributes?.seconds} <br />
                      sec
                    </div>
                  </div>
                </div>
              </div>
              <div className="figure">
                <img
                  src={item?.attributes?.img?.data?.attributes?.url}
                  alt=""
                />
              </div>
            </div>
          ))}
    </>
  );
};

export default CrazyDeal;
