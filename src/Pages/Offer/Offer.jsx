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
       <>   <div className="product">
       <div className="left">
         <div
           className="mainImg"
           style={{
             background:
               'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
             backgroundSize: '200% 100%',
             animation: 'shimmer 1.5s infinite linear',
             height: '400px',
           }}
         ></div>
       </div>
       <div className="right">
         <h1
           style={{
             width: '250px',
             height: '40px',
             background:
               'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
             animation: 'shimmer 1.5s infinite linear',
           }}
         >
           
         </h1>
         <span
           className="price"
           style={{
             width: '100px',
             height: '40px',
             background:
               'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
             animation: 'shimmer 1.5s infinite linear',
           }}
         >
           
         </span>
         <p>   </p>
         <div className="quantity">
           <button
           style={{
               width: '50px',
               height: '50px',
               background:
                 'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
               animation: 'shimmer 1.5s infinite linear',
             }}></button>
           <h3
             
           ></h3>
           <button
             style={{
               width: '50px',
               height: '50px',
               background:
                 'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
               animation: 'shimmer 1.5s infinite linear',
             }}
           ></button>
         </div>
     
         <button
           className="add"
           onClick={handleAddToCart}
           style={{
             width: '200px',
             height: '50px',
             background:
               'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
             animation: 'shimmer 1.5s infinite linear',
           }}
         ></button>
         <div className="link">
           <div
             className="item"
             style={{
               width: '10px',
               background:
                 'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
               animation: 'shimmer 1.5s infinite linear',
             }}
           >
             
           </div>
           <div
             className="item"
             style={{
               width: '300px',
               height: '20%',
               background:
                 'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
               animation: 'shimmer 1.5s infinite linear',
             }}
           >
             
           </div>
         </div>
         <div
           className="info"
           style={{
             width: '300px',
             background:
               'linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%)',
             animation: 'shimmer 1.5s infinite linear',
             height: '100px'
           }}
         >
           <span></span>
           <span></span>
           <span></span>
         </div>
         <div
           className="infos"
       
         >
           <span></span>
           <hr />
           <span></span>
           <hr />
           <span></span>
         </div>
       </div>
     </div></>
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
            <h1> {data?.attributes?.title}</h1>
            <span className="price">Rs. {data?.attributes?.price}</span>
            <p>{data?.attributes?.specification}</p>
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
            <lord-icon
    src="https://cdn.lordicon.com/pbrgppbb.json"
    trigger="click"
    >
</lord-icon>
            </button>
            <div className="link">
              <div className="item  flex-col items-center">
                <lord-icon
                  src="https://cdn.lordicon.com/ulnswmkk.json"
                  trigger="click"
                    ></lord-icon>
                    <span className="flex flex-col items-start text-[13px] font-bold"> Add To <span>WishList</span> </span>
               
              </div>
              <div className="item  flex items-center  ">
        
                    <lord-icon
                  src="https://cdn.lordicon.com/qnpnzlkk.json"
                  trigger="click"
                ></lord-icon>
           
                <span className="flex flex-col items-start text-[13px] font-bold">Add To <span>COMPARE</span> </span>
              </div>
            </div>
            <div className="info">
              <span>vendor: Polo</span>
              <span>Product Type: {data?.attributes?.title}</span>
              <span>Tag: T-shirt, Women, Top</span>
            </div>
            <div className="infos">
              <span className="border-b-[1px]">Description: {data?.attributes?.desc}</span>
              
              <span className="border-b-[1px]">Additional Information</span>
              
              <span className="border-b-[1px]">FAQ</span>
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
