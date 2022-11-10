import React, { useEffect, useState } from 'react';
import UseTitle from '../../../assets/UseTitle';
import AllReviewsTable from './AllReviewsTable';

const AllReviews = () => {
    UseTitle('allreviews')
    const [allReviews, setAllreviews] = useState([])
     useEffect(() => {
       fetch(`https://wildlife-studio-server-jalalemon.vercel.app/allReviews`)
       .then(res => res.json())
       .then(data => setAllreviews(data) )
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