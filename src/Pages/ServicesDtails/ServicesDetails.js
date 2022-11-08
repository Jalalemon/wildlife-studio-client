import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewsForm from './ReviewsForm/ReviewsForm';

const ServicesDetails = () => {
    const detailsServices = useLoaderData();
    console.log(detailsServices);
    const { name, about, picture, balance } = detailsServices;

    return (
      <div>
        <div className="card mb-5 card-compact w-96 mx-auto bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
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
          <Link to='/allreviews'>
            {" "}
            <button className="btn btn-secondary">All Reviews </button>
          </Link>
          <p className="text-2xl text-orange-600 font-semibold">
            Service: {name}{" "}
          </p>
          <ReviewsForm></ReviewsForm>
        </div>
      </div>
    );
};

export default ServicesDetails;