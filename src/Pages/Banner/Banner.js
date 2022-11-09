import React from "react";
import img1 from "../../assets/banner/1.jpeg";
import img2 from "../../assets/banner/2.jpeg";
import img3 from "../../assets/banner/3.jpeg";
import img4 from "../../assets/banner/4.jpeg";
import img5 from "../../assets/banner/5.jpeg";
import img6 from "../../assets/banner/6.jpeg";
import BannerItem from "./BannerItem";


const Banner = () => {
  const bannerData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      prev: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
  
      <div className="carousel py-10 w-full">
        {bannerData.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
   
  );
};

export default Banner;
