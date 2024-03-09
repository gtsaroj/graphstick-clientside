import React from "react";
import Slider from "../../Components/Slider/Slider";
import FeaturedProduct from "../../Components/FeaturedProducts/FeaturedProduct";
import CrazyDeal from "../../Components/CrazyDeal/CrazyDeal";
import Suscriber from "../../Components/Suscriber/Suscriber";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-stretch justify-center">
      <Slider />
      <FeaturedProduct type={"Latest Stickers"} />
      <CrazyDeal />
      <Suscriber />
      <FeaturedProduct type={"Trending Stickers"} />
    </div>
  );
};

export default Home;
