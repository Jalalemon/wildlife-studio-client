import React from 'react';

const SliderItem = ({slid}) => {
      const { image, id, prev, next } = slid;
    return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="img-gradiant">
          <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform left-24 -translate-y-1/2 top-1/4 left-5 gap-5">
          <h1 className="text-3xl text-orange-400 text-white font-bold">
            {" "}
           Wildlife Photopie
          </h1>
        </div>
        <div className="absolute w-2/5 mt-5 flex justify-end transform left-24 -translate-y-1/2 top-1/2 left-5 gap-5">
          <p className="text-white">
            Photography is the art of capturing light with a camera, usually via
            a digital sensor or film, to create an image. With the right camera
          </p>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0 gap-5">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default SliderItem;