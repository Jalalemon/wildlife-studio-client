import React from 'react';

const ServicesCart = ({service}) => {
    const {name, about,picture, balance} = service;
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
            <div className="card-actions justify-end">
              {/* <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary">Book Now</button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServicesCart;