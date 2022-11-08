import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';

const Home = () => {
    return (
      <div className="text-center">
        <h2> home</h2>
        <Services></Services>
        <Link to='/allPages'>
          {" "}
          <button className="btn">See all service</button>
        </Link>
      </div>
    );
};

export default Home;