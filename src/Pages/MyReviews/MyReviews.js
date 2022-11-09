import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import AllReviewsTable from '../ServicesDtails/AllReviews/AllReviewsTable';
import EditMyReviews from './EditMyReviews';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))

    }, [user?.email]);

     const handleDelete = (id) => {
       const proceed = window.confirm("are your sure want to delete?");
       if (proceed) {
         fetch(`http://localhost:5000/allReviews/${id}`, {
           method: "DELETE",
           headers: {
             authorization: `Bearer ${localStorage.getItem("wildlife-token")}`,
           },
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             if (data.deletedCount > 0) {
               alert("deleted successfully");
               const remaining = myReviews.filter((odr) => odr._id !== id);
               setMyReviews(remaining);
             }
           });
       }
     };

     
     const handleUpdate = (id) => {
       fetch(`http://localhost:5000/allReviews/${id}`, {
         method: "PUT",
         headers: {
           "content-type": "application/json",
           //    authorization: `Bearer ${localStorage.getItem("wildlife-token")}`,
         },
         body: JSON.stringify(myReviews),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           if (data.modifiedCount > 0) {
             alert("mofied count");
           }
         });
     };
    return (
      <div>
        <h3> my review: {myReviews.length} </h3>
        <div>
          {myReviews.length === 0 ? (
            <p>You have no review</p>
          ) : (
            <p>Show Available review</p>
          )}
        </div>
        <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {myReviews.map((reviews) => (
            <EditMyReviews
              key={reviews._id}
              reviews={reviews}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            ></EditMyReviews>
          ))}
        </div>
      </div>
    );
};

export default MyReviews;