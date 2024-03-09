import React from "react";
import "./Product.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
import { useDispatch } from "react-redux";
import { addToCart, addtowishlist } from "../../CardReducer/CardReducer";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { ProductSkeleton } from "../../SkeletonComponents/ProductSkeleton";
import { Heart, GitCompareArrows } from "lucide-react";
const Product = () => {
  const id = useParams().id;
  console.log(id);

  const { data, error, loading } = useFetch(`/products/${id}?populate=*`);

  const [selectedImg, setselectedImg] = useState("img");
  const navigate = useNavigate();

  const [quantity, setquantity] = useState(1);

  const dispatch = useDispatch();
  const { user } = useAuthContext();
  const handleAddToCart = () => {
    if (user) {
      dispatch(
        addToCart({
          id: data.id,
          img: data.attributes.img?.data.attributes.url,
          price: data.attributes.price,
          desc: data.attributes.desc,
          title: data.attributes.title,
          quantity,
        })
      );
    } else {
      navigate("/login", { replace: true });
      message.error("please login the page");
    }
  };

  return (
    <>
      {error ? (
        error
      ) : loading ? (
        <ProductSkeleton />
      ) : (
        <div className="product">
          <div className="left w-full">
            <div className=" w-full h-[300px] sm:w-[500px] sm:h-[350px]">
              <img
                src={data?.attributes[selectedImg]?.data?.attributes?.url}
                alt=""
                className="w-full h-full rounded-md "
              />
            </div>
          </div>
          <div className=" right flex flex-col items-baseline justify-center gap-10">
            <div className="flex flex-col items-baseline justify-center gap-5">
              <h1 className="text-[20px] font-semibold">
                {" "}
                {data?.attributes?.title}
              </h1>
              <span className="text-[var(--dark-border)] text-[14px]">
                {data?.attributes.specification}
              </span>
              <span className="price">Rs. {data?.attributes?.price}</span>
              <div className="flex items-center justify-center gap-2">
                size :{" "}
                <div>
                  <button className="text-[14px] px-2 rounded-sm text-[var(--light-text)] bg-[var(--dark-border)] focus:ring-1 ring-black">
                    xl
                  </button>
                </div>
              </div>
              <div className="quantity">
                <button
                  className="px-2 py-1 font-bold text-[15px]"
                  onClick={() => setquantity((prev) => prev + 1)}
                >
                  +
                </button>
                <h3>{quantity}</h3>
                <button
                  className="px-2 py-1 font-bold text-[15px]"
                  onClick={() =>
                    setquantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
              </div>

              <button className="add z-[1]" onClick={handleAddToCart}>
                <lord-icon
                  src="https://cdn.lordicon.com/pbrgppbb.json"
                  trigger="click"
                ></lord-icon>
              </button>
              <div className="link">
                <div
                  className="item  flex-col items-center"
                  onClick={() =>
                    dispatch(
                      addtowishlist({
                        id: data.id,
                        img: data.attributes.img?.data.attributes.url,
                        price: data.attributes.price,
                        desc: data.attributes.desc,
                        title: data.attributes.title,
                        quantity,
                      })
                    )
                  }
                >
                  <Heart />
                  <span className="flex   flex-col items-start text-[13px] font-bold">
                    Wishlist{" "}
                  </span>
                </div>
                <div className="item  flex items-center  ">
                  <GitCompareArrows />
                  <span className="flex flex-col items-start sm:text-[13px]  font-bold">
                    Compare
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-baseline justify-center gap-3">
              <div className="info">
                <span>vendor: Polo</span>
                <span>Product Type: {data?.attributes?.title}</span>
                <span>Tag: T-shirt, Women, Top</span>
              </div>
              <div className="infos">
                <span className="border-b-[1px]">
                  Description: {data?.attributes?.desc}
                </span>

                <span className="border-b-[1px]">Additional Information</span>

                <span className="border-b-[1px]">FAQ</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
