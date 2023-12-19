import React from 'react'
import "./Slider.css"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";



const Slider = () => {
    return (
        <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
         style={{
        
         }}>
          <SwiperSlide className="swiper">
            <img
              src="https://img.freepik.com/premium-photo/happy-teen-child-with-shopping-bag-blue-yellow_474717-130139.jpg?w=826"
              alt=" "
            />
          </SwiperSlide>
  
          <SwiperSlide className="swiper">
            <img
              src="https://cdn.pixabay.com/photo/2023/04/14/09/03/shopping-street-7924559_1280.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              src="https://img.freepik.com/free-psd/e-commerce-discount-facebook-template_23-2149937090.jpg?size=626&ext=jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
    )
}

export default Slider
