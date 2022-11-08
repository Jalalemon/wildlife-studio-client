import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import Board from '../Board/Board';


const Home = () => {
    return (
      <div className="mx-auto text-center">
        <h2> home</h2>
        <Board></Board>
   
          <Services></Services>
          <Link to="/allPages">
            {" "}
            <button className="btn">See all service</button>
          </Link>
    
      </div>
    );
};

export default Home;