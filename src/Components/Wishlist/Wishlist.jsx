import { DeleteIcon } from "lucide-react";
import React from "react";
import useFetch from "../../Hook/useFetch";
import "../FeaturedProducts/FeatureProduct.css";
import "../Card/Card.css";
import { Card } from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removewishlist } from "../../CardReducer/CardReducer";
import ReactLoading from "react-loading";
import {ShoppingCart} from "lucide-react"

const Wishlist = () => {
  const { loading, data, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=featured`
  );

  const Wishlistproducts = useSelector((state) => state.wish.products);
  const dispatch = useDispatch();
  console.log(Wishlistproducts);
  return (
    <div className="flex items-baseline justify-around sm:gap-5 gap-10 px-4 py-7 flex-wrap w-full">
      <div
        className="flex flex-col items-baseline justify-center gap-10"
      >
        <div className="text-3xl font-bold">My Wishlist</div>
        {error ? (
          <div>Error found</div>
        ) : loading ? (
          <ReactLoading
            type="spinningBubbles"
            className="w-10 h-full"
            color="black"
          />
        ) : Wishlistproducts.length > 0 ? (
          Wishlistproducts?.map((singleitem) => (
            <div className="flex items-center gap-6 justify-center rounded-md w-full sm:w-[450px] px-3 py-1 shadow-xl " key={singleitem.id}>
              <div className="w-20 h-16 sm:w-36 sm:h-28">
                <img
                  src={singleitem.img}
                  alt=""
                  className="w-ful h-full rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between sm:gap-3 gap-1 ">
                <div className="flex justify-between items-center gap-7 ">
                  <div className="flex flex-col items-baseline justify-between py-[4px]">
                    <h3 className="text-[14px] sm:text-[18px]  font-semibold">
                      In Stock
                    </h3>
                    <h2 className="text-[14px] sm:text-[16px]">
                      {singleitem.title}
                    </h2>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(removewishlist(singleitem.id))}
                  >
                    <DeleteIcon />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-7 sm:gap-10">
                  <h3 className="text-[15px] sm:text-[17px]">
                    Rs: {singleitem.price}
                  </h3>
                  <button
                    className="px-5 sm:px-7 sm:text-[16px] text-[13px] py-1 bg-[var(--primary-color)]"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: singleitem.id,
                          img: singleitem.img,
                          price: singleitem.price,
                          desc: singleitem.desc,
                          title: singleitem.title,
                          quantity: singleitem.quantity,
                        })
                      )
                    }
                  >
                    Add TO Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
                                  <h3 className="sm:text-[30px] text-[20px]">Your wishlist is empty</h3>
                                  <ShoppingCart className="w-20 h-20"/>
          </div>
        )}
      </div>

      <div className="flex flex-col items-baseline">
        <h3 className="sm:text-3xl font-bold text-[20px]">
          Recommend Products
        </h3>

        <div className="pro-container sm:w-[650px] flex justify-center items-center  overflow-y-auto h-[300px]">
          {data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
