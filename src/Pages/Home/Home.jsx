import React from "react";
import Slider from "../../Components/Slider/Slider";
import Featured from "../../Components/Featured/Featured";
import FeaturedProduct from "../../Components/FeaturedProducts/FeaturedProduct";
import CrazyDeal from "../../Components/CrazyDeal/CrazyDeal";
import Suscriber from "../../Components/Suscriber/Suscriber";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Slider />
      <Featured />
      <FeaturedProduct type={"featured"} />
      <CrazyDeal />
      <Suscriber />
      <FeaturedProduct type={"trending"} />
     
    </div>
  );
};

export default Home;
