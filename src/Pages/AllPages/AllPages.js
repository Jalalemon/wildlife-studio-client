import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ServicesCart from '../../Services/ServicesCart';

const AllPages = () => {
    const [allServices, setAllServices] =useState([]);
    useEffect(() => {
        fetch("https://wildlife-studio-server-jalalemon.vercel.app/allServices")
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
    return (
      <div>
        <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
          allServices.map((service) => (
            <ServicesCart key={service._id} service={service}></ServicesCart>
          ))
          }
        </div>
      </div>
    );
};

export default AllPages;