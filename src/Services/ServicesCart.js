import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCart = ({service}) => {
    const {name, about,picture, _id, balance} = service;
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
            <p className='font-semibold'>
                {about.slice(0, 150) + '...'}
            </p>
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