import React, { useEffect, useState } from 'react';
import AllReviewsTable from './AllReviewsTable';

const AllReviews = () => {
    const [allReviews, setAllreviews] = useState([])
     useEffect(() => {
       fetch(`http://localhost:5000/allReviews`)
       .then(res => res.json())
       .then(data => setAllreviews(data) )
        }, []);

        

    return (
      <div className="grid mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allReviews.map((reviews) => (
          <AllReviewsTable
            key={reviews._id}
            reviews={reviews}
          ></AllReviewsTable>
        ))}
      </div>
    );
};

export default AllReviews;