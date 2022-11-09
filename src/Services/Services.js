import React, { useEffect, useState } from 'react';
import UseTitle from '../assets/UseTitle';
import ServicesCart from './ServicesCart';

const Services = () => {
    UseTitle('services')

    const [services, setServices] =useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
    } , [])
    return (
      <div>
        <h3>services{Services.length} </h3>
        <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicesCart key={service._id} service={service}></ServicesCart>
          ))}
        </div>
      </div>
    );
};

export default Services;