import React, { useContext } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';

const AddServices = () => {
 const {user} = useContext(AuthContext);

 const addServices = useLoaderData();
 console.log(addServices);
        const handleAddServices = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = `${form.firstName.value} ${form.lastName.value}`;
          const email = user?.email || "unregistered";
          const phone = form.phone.value;
          const balance = form.balance.value;
          const message = form.message.value;

          const addServices = {
            name: name,
            email: email,
            balance: balance,
            picture: phone,
            about: message,
            message,
          };
          fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addServices),
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
            <p className="text-orange-600 text-5xl py-5 text-center">
              Add Your Service{" "}
            </p>
            <form onSubmit={handleAddServices}>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Name"
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
                  placeholder="service PhotoUrl"
                  className="input input-bordered input-ghost w-full"
                />
                <input
                  type="text"
                  name="balance"
                  placeholder="balance"
                  className="input input-bordered input-ghost w-full"
                />
                <input
                  type="email"
                  placeholder="contact email"
                  name="email"
                  className="input input-bordered input-ghost w-full"
                  required
                />
              </div>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full h-24"
                placeholder="service description"
              ></textarea>
              <input type="submit" className="btn" value="place your service" />
            </form>
          </div>
        );
};

export default AddServices;