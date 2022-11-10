import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../assets/UseTitle';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import AllReviewsTable from '../ServicesDtails/AllReviews/AllReviewsTable';
import EditMyReviews from './EditMyReviews';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
// my reviews
//

const MyReviews = () => {
 const navigate = useNavigate();
    const {logOut} = useContext(AuthContext)

    UseTitle('myreviews')
    const {user} = useContext(AuthContext);
    const [allReviews, setAllreviews] = useState([])


    useEffect(() => {
      fetch(`https://wildlife-studio-server.vercel.app/allReviews?email=${user?.email}`)
      // fetch("https://wildlife-studio-server.vercel.app/allReviews?email=web2@ph.com")
        .then((res) => res.json())
        .then((data) => setAllreviews(data));
    } , [user?.email])
    useEffect(() => {
        fetch(
          `https://wildlife-studio-server.vercel.app/allReviews?email=${user?.email}`)
          .then((res) =>  {

          if(res.status === 401 || res.status === 403){
                 navigate('/');
            }
          
           return res.json();
          })
          .then((data) => setAllreviews(data));

    }, [user?.email]);

   


const handleDelete = (id) => {
  const proceed = window.confirm("are your sure want to delete?");
  if (proceed) {
    fetch(`https://wildlife-studio-server.vercel.app/allReviews/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("wildlife-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast("deleted successfully");
          const remaining = allReviews?.filter((odr) => odr._id !== id);
          setAllreviews(remaining);
        }
      });
  }
};



    //  const handleUpdate = (id) => {
    //    fetch(`https://wildlife-studio-server.vercel.app/allReviews/${id}`, {
    //      method: "PUT",
    //      headers: {
    //        "content-type": "application/json",
    //        //    authorization: `Bearer ${localStorage.getItem("wildlife-token")}`,
    //      },
    //      body: JSON.stringify(myReviews),
    //    })
    //      .then((res) => res.json())
    //      .then((data) => {
    //        console.log(data);
    //        if (data.modifiedCount > 0) {
    //          alert("mofied count");
          
    //        }
    //      });
    //  };
    return (



      <div>
        
        <div className='mx-auto text-3xl font-semibold text-orange-400'>
         
          {allReviews?.length === 0 ? (
            <p>You have no review</p>
          ) : (
            <p>Show Available review</p>
          )}
        </div>
        <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allReviews?.map((reviews) => (
            <EditMyReviews
              key={reviews._id}
              reviews={reviews}
            //   handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            ></EditMyReviews>
          ))}
        </div>
      </div>
    );
};

export default MyReviews;