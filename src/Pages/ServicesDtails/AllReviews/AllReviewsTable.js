import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider/AuthProvider';

const AllReviewsTable = ({reviews}) => {
    const {user} = useContext(AuthContext)
    console.log(reviews);
    const { _id,phone, message
, email,serviceName, balance, name} = reviews;
      
    return (
      <div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col">
            <>
              {user?.photoURL ? (
                <img
                  src={user?.photoURl}
                  alt=""
                  className="w-20 rounded-full h-20 shadow-2xl"
                />
              ) : (
                <img
                  src={phone}
                  alt=""
                  className="w-20 rounded-full h-20 shadow-2xl"
                />
              )}
            </>
            <div className="">
              <h1 className="text-xl font-bold">Name: {serviceName}!</h1>
              <h1 className="text-xl text-orange-600"> Email: {email}!</h1>
              <h1 className=""> service Id: {_id}!</h1>
              <h1 className=""> balance: {balance}!</h1>
            
              <p className="py-6">Review: {message}</p>

              <>
                <Link to="/">
                  {" "}
                  <button className="btn btn-primary">Go home</button>
                </Link>
              </>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllReviewsTable;