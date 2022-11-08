import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider/AuthProvider';

const ReviewsForm = () => {
        const { _id, company, balance } = useLoaderData();
        const { user } = useContext(AuthContext);

        const handlePlaceOrder = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = `${form.firstName.value} ${form.lastName.value}`;
          const email = user?.email || "unregistered";
          const phone = form.phone.value;
          const message = form.message.value;

          const allReview = {
            serviceId: _id,
            serviceName: name,
            balance,
            customer: company,
            email,
            phone,
            message,
          };
          fetch("http://localhost:5000/allReviews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(allReview),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                alert("your review added successsfully");
                form.reset();
              }
            })
            .catch((error) => console.error(error));
        };

    return (
      <div className="py-20 w-3/4 mx-auto">
        <form onSubmit={handlePlaceOrder}>
          <h2 className="">service: {company} </h2>
          <h2 className="text-orange-600">price: {balance} </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="input input-bordered input-ghost w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="input input-bordered  input-ghost w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="your PhotoUrl"
              className="input input-bordered input-ghost w-full"
            />
            <input
              type="text"
              placeholder="your email"
              name="email"
              className="input input-bordered input-ghost w-full"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full h-24"
            placeholder="your review"
          ></textarea>
          <input type="submit" className="btn" value="place your review" />
        </form>
      </div>
    );
};

export default ReviewsForm;