import React from 'react';
import image from '../../assets/nav/nav.jpg'
const Board = () => {
    return (
      <div className="grid lg:grid-cols-2 py-10" data-theme="lemonade">
        <div className=" mx-auto">
          <div className="w-full">
            <img src={image} className="w-full rounded-full " alt="" />
          </div>
        </div>
        <div className="w-1/2 mx-auto my-6">
          <p className="text-4xl text-orange-600 font-bold"> Wildlife Studio</p>
          <p className="font-semibold my-6">
            Wildlife photography is a genre of photography concerned with
            documenting various forms of wildlife in their natural habitat.See
            Examples of the Variety of Beautiful Biodiversity Encountered During
            our Expeditions.
          </p>
        </div>
      </div>
    );
};

export default Board;