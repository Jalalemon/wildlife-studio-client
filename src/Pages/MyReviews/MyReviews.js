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

    }, [user?.email])
    return (
      <div>
        <h3> my review: {myReviews.length} </h3>
        <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {myReviews.map((reviews) => (
            <EditMyReviews key={reviews._id} reviews={reviews}></EditMyReviews>
          ))}
        </div>
      </div>
    );
};

export default MyReviews;