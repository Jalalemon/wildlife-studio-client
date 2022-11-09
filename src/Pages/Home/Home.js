import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Carousel from '../Banner/Carousel';
import HeroBrand from '../Banner/HeroBrand';
import Steps from '../Banner/Steps';
import Board from '../Board/Board';


const Home = () => {
    return (
      <div className="mx-auto text-center">
        <HeroBrand></HeroBrand>
        <Banner></Banner>
        <Board></Board>

        <div>
          <Services></Services>
          <Link to="/allPages">
            {" "}
            <button className="btn">See all service</button>
          </Link>
        </div>
        <div className='my-5'>
          <Steps></Steps>
        </div>
      </div>
    );
};

export default Home;