import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewsForm from './ReviewsForm/ReviewsForm';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import UseTitle from '../../assets/UseTitle';
const ServicesDetails = () => {
    UseTitle('servicedetaild')
    const detailsServices = useLoaderData();
    console.log(detailsServices);
    const { name,_id, about,email, picture, balance } = detailsServices;
    console.log(_id );

    return (
      <div className="w-410 h-500">
        <div className="card mb-5 card-compact w-96 mx-auto bg-base-100 shadow-xl">
          <PhotoProvider>
            <PhotoView src={picture}>
              <img src={picture} alt="" />
            </PhotoView>
          </PhotoProvider>

          {/* <figure>
            <img className="w-full" src={picture} alt="Shoes" />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h2 className="text-xl">{email}</h2>
            <p className="text-2xl text-orange-600 font-semibold">
              price: {balance}{" "}
            </p>
            <p className="font-semibold">{about}</p>
            <div className="card-actions justify-end">
              {/* <Link to={`/ser/${_id}`}>
                <button className="btn btn-primary">Book Now</button>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to={`/allreviews`}>
            {" "}
            <button className="btn btn-secondary">All Reviews </button>
          </Link>
          <p className="text-2xl text-orange-600 font-semibold">
            Service: {name}{" "}
          </p>
          {/* <ReviewsForm></ReviewsForm> */}
          <Link to={`/ReviewsForm/${_id}`}>
            <button className="btn btn-primary my-5">Add Your Review</button>
          </Link>
        </div>
      </div>
    );
};

export default ServicesDetails;