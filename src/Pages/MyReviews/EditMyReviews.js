import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../assets/UseTitle';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditMyReviews = ({ reviews,handleUpdate, handleDelete}) => {
    UseTitle('edirmyReviews')
  const { user } = useContext(AuthContext);

  const { _id, phone, message, email, serviceName, balance, name } = reviews;


// editing reviews


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

            <div className="grid grid-cols-2">
              <Link to="">
                {" "}
                <button
                  onClick={() => handleUpdate()}
                  className="btn btn-primary"
                >
                  Edit Review
                </button>
              </Link>
              <Link to="">
                {" "}
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-primary"
                >
                  {" "}
                  Delete Review
                </button>
           <ToastContainer></ToastContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMyReviews;