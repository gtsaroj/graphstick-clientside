import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import useFetch from "../../Hook/useFetch.js";
import { useNavigate } from "react-router-dom";

const SearchUI = () => {
  const [SearchProduct, SetSearchProduct] = useState();
  const { data, error, loading } = useFetch("/products?populate=*&");
  const [SearchedValue, setSearchedValue] = useState([]);

  const navigate = useNavigate();

  const HandleProduct = (event) => {
    const value = event.target.value;
    SetSearchProduct(value);
  };

  useEffect(() => {
    const filterProducts = data?.filter((singleproduct) =>
      singleproduct.attributes.title.toLowerCase().includes(SearchProduct)
    );
    console.log(filterProducts);
    setSearchedValue(filterProducts);
  }, [SearchProduct, data]);

  return (
    <div className="relative flex flex-col gap-5 w-full ">
      <form action="" className={`  flex items-center duration-200`}>
        <input
          type="text"
          className={`  right-0 w-full py-1 px-1 sm:w-[300px]  transition-all duration-100 outline-none `}
          value={SearchProduct}
          onChange={HandleProduct}
        />
        <label className={`cursor-pointer  py-1 px-3 duration-200 bg-[var(--light-text)]`}>
          <Search />
        </label>
      </form>
      <div
        className={`absolute top-16  gap-6 px-5 pt-16 overflow-y-auto ${
          SearchProduct?.length > 0
            ? "bg-[var(--dark-background)] visible"
            : "hidden"
        } overflow-hidden  h-[200px] flex flex-col justify-center items-stretch  w-full left-0 right-0 bottom-0`}
      >
        {SearchedValue?.map((item) => (
          <div
            className=" cursor-pointer bg-[var(--light-text)] w-full flex justify-start py-[4px] rounded-md px-1 items-center gap-6"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <h3>{item.attributes.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchUI;
