import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import UseTitle from '../assets/UseTitle';
const ServicesCart = ({service}) => {

    // services cart
    //
    
    const {name,phone, about,picture,email, message, _id, balance} = service;
    return (
      <div>

        <div className="card mb-5 card-compact w-96 mx-auto bg-base-100 shadow-xl">
          <figure>
            {picture ? (
                <PhotoProvider>
            <PhotoView src={picture}>
              <img src={picture} alt="" />
            </PhotoView>
          </PhotoProvider>

            //   <img className="w-full" src={picture} alt="Shoes" />
            ) : (

                <PhotoProvider>
            <PhotoView src={picture}>
              <img src={picture} alt="" />
            </PhotoView>
          </PhotoProvider>

            //   <img className="w-full" src={phone} alt="Shoes" />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h2 className="text-xl">{email}</h2>
            <p className="text-2xl text-orange-600 font-semibold">
              price: {balance}{" "}
            </p>
            <>
              {about ? (
                <p className="font-semibold">{about?.slice(0, 150) + "..."}</p>
              ) : (
                <p className="font-semibold">
                  {message?.slice(0, 150) + "..."}
                </p>
              )}
            </>
            <div className="card-actions justify-end">
              <Link to={`/servicesdetails/${_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServicesCart;