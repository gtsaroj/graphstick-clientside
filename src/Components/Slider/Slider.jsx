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
          zIndex: '-1'
         }}>
          <SwiperSlide className="swiper">
            <img
              src="https://img.freepik.com/premium-photo/happy-teen-child-with-shopping-bag-blue-yellow_474717-130139.jpg?w=826"
              alt=" "
            />
          </SwiperSlide>
  
          <SwiperSlide className="swiper">
            <img
              src="https://media.licdn.com/dms/image/D5612AQHyHk53qnurYQ/article-cover_image-shrink_720_1280/0/1699099415077?e=2147483647&v=beta&t=6wxCocTcq48YJ6xt6NqI7LjvcNZDgExueNDqORcXmKA"
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
