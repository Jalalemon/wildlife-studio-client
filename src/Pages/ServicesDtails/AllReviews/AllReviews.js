import React, { useEffect, useState } from 'react';
import UseTitle from '../../../assets/UseTitle';
import AllReviewsTable from './AllReviewsTable';

const AllReviews = () => {
    UseTitle('allreview');

    const [allReviews, setAllreviews] = useState([]);

     useEffect(() => {
       fetch(`https://wildlife-studio-server.vercel.app/allReviews`, {
         headers: {
           authorization: `Bearer ${localStorage.getItem("wildlife-token")}`,
         },
       })
         .then((res) => res.json())
         .then((data) => setAllreviews(data));
        }, []);

    return (
      <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allReviews?.map((reviews) => (
          <AllReviewsTable
            key={reviews._id}
            reviews={reviews}
          ></AllReviewsTable>
        ))}
      </div>
    );
};

export default AllReviews;