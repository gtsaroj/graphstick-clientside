import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [SliderContainer, setSliderContainer] = useState(images[0]);
  const [sliderNumber, SetSliderNumber] = useState(0);

  const sliderChange = (index, event) => {
    event.preventDefault();
    const matchingsliderindex = images.find((singleimage, imageindex) =>
      imageindex === index ? singleimage : ""
    );

    if (matchingsliderindex) {
      return setSliderContainer(matchingsliderindex);
    }
  };

  useEffect(() => {
    const matchingsliderIndex = images.find((singleimage, imageindex) =>
      sliderNumber === imageindex ? singleimage : ""
    );

    setSliderContainer(matchingsliderIndex);

    const timer = setInterval(() => {
      SetSliderNumber((prev)=> prev >= 2 ? 0 : prev+1)
    }, 5000);

    return () => {
      clearInterval(timer)
    }
  }, [sliderNumber]);


  return (
    <div className="py-2">
      <div className="relative w-full flex flex-col items-center justify-center sm:px-10  px-1">
        <div className=" slide  transition-all duration-150  w-full sm:h-[450px] h-[200px]">
          <img
            className=" w-full h-full rounded-md "
            src={SliderContainer}
            alt=""
          />
        </div>
        <div className="absolute bottom-3 flex justify-center items-center gap-2 sm:gap-4">
          {images?.map((item, index) => (
            <button
              key={index}
              className={` ${
                index === sliderNumber
                  ? "border-[3px] border-bg[var(--dark-border)]  "
                  : ""
              } sm:w-5 sm:h-5 w-3 h-3 cursor-pointer rounded-full bg-[var(--dark-background)] duration-100  focus:border-[3px] focus:border-[var(--dark-border)]`}
              onClick={(event) => sliderChange(index, event)}
            ></button>
          ))}
        </div>
        <div className=" absolute   flex justify-between w-full sm:px-12 px-2 ">
          <button
            onClick={() =>
              SetSliderNumber((prev) => (prev <= 0 ? 2 : prev - 1))
            }
            className=" p-1  sm:p-2 rounded-full bg-[var(--dark-background)]"
          >
            <ArrowLeft className="text-[var(--light-text)] w-5 h-5 " />
          </button>
          <button className=" p-1  sm:p-2 rounded-full bg-[var(--dark-background)]">
            <ArrowRight
              className="text-[var(--light-text)] w-5 h-5 "
              onClick={() =>
                SetSliderNumber((prev) => (prev >= 2 ? 0 : prev + 1))
              }
            />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Slider;
