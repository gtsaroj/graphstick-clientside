import React from "react";
import "../Product/Product.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../CardReducer/CardReducer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useLocation } from "react-router-dom";


const Offer = () => {
  const id = useParams().id;
  console.log(id);

  const { data, error, loading } = useFetch(`/offers?populate=*`);

  const [selectedImg, setselectedImg] = useState("img");
  const navigate = useNavigate();
  const location = useLocation();

  const [quantity, setquantity] = useState(1);

  const dispatch = useDispatch();
  const { user } = useAuthContext();
  const handleAddToCart = () => {
    if (user) {
      dispatch(
        addToCart({
          id: productData.id,
          img: productData.attributes.img?.data.attributes.url,
          price: productData.attributes.newprice,
          desc: productData.attributes.desc,
          title: productData.attributes.title,
          quantity,
        })
      );
    } else {
      navigate("/login", { replace: true });
      message.error("please login the page");
    }
  };

  const {productData} = location.state || {};
  console.log(productData)

  return (
    <>
      {error ? (
        error
      ) : loading ? (
        "please wait..."
      ) : productData ? (
        <div className="product">
          <div className="left">
            <div className="mainImg">
              <img
                src={productData?.attributes[selectedImg]?.data?.attributes?.url}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{productData?.attributes?.title}</h1>
            <span className="price">{productData?.attributes?.price}</span>
            <p>{productData?.attributes?.newprice}</p>
            <div className="quantity">
              <button onClick={() => setquantity((prev) => prev + 1)}>+</button>
              <h3>{quantity}</h3>
              <button
                onClick={() =>
                  setquantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
            </div>

            <button className="add" onClick={handleAddToCart}>
              <AddShoppingCartIcon />
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon />
                Add To <br /> WishList
              </div>
              <div className="item">
                {" "}
                <BalanceIcon />
                Add To <br /> COMPARE
              </div>
            </div>
            <div className="info">
              <span>vendor: Polo</span>
              <span>Product Type: {productData?.attributes?.title}</span>
              <span>Tag: T-shirt, Women, Top</span>
            </div>
            <div className="infos">
              <span>Description: {productData?.attributes?.desc}</span>
              <hr />
              <span>Additional Information</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </div>
      ) : (
        <div>Product data not available</div>
      )}
    </>
  );
};

export default Offer;
