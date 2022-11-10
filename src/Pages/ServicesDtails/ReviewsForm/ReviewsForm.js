import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../assets/UseTitle';
import { AuthContext } from '../../../Auth/AuthProvider/AuthProvider';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// reviews form
// 
const ReviewsForm = () => {
    UseTitle('reviewsForm')
        const { _id, company, name, balance, address } = useLoaderData();
        const { user } = useContext(AuthContext);

        const handlePlaceReview = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = `${form.firstName.value} ${form.lastName.value}`;
          const email = user?.email || "unregistered";
          const phone = form.phone.value;
          const message = form.message.value;

            console.log(name);
          const allReview = {
            serviceId: _id,
            serviceName: name,
            balance,
            address,
            names: name,
            customer: company,
            email,
            phone,
            message,

          };
          fetch("https://wildlife-studio-server.vercel.app/allReviews", {
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
                toast.success("your review added successsfully");
                form.reset();
              }
            })
            .catch((error) => console.error(error));
        };
// 
// services section
//
    return (
      <div className="py-20 w-3/4 mx-auto">
        <p className="text-orange-600 text-5xl py-5 text-center">
          Add Your Reviews{" "}
        </p>
        <form onSubmit={handlePlaceReview}>
          <h2 className="">service Id: {_id} </h2>
          <h2 className="text-primary-600">price: {balance} </h2>
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
        
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full h-24"
            placeholder="your review"
          ></textarea>
          <input type="submit" className="btn" value="place your review" />
          <ToastContainer></ToastContainer>
        </form>
      </div>
    );
};

export default ReviewsForm;