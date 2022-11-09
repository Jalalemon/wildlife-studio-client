import React from "react";
import UseTitle from "../../assets/UseTitle";
import './Banner.css'
const BannerItem = ({ slide }) => {
    UseTitle('bannerItem')
  const { image, id, prev, next } = slide;
  return (
    <div className="stack w-3/4">
      <div className="text-center border border-base-content card w-3/4 bg-base-100">
        <div className="card-body w-full ">
          <img src={image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
