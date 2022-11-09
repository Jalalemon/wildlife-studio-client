import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// register
import './styles.css'

const Register = () => {
  const { createUser } = useContext(AuthContext);


  // register handler

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    const name = form.name.value;
    console.log(email, password, name);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("congrats! registered successfully");
        form.reset();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero w-full capp my-20">
      <div className="hero-content w-full p-0">
        <div className="card flex-shrink-0 py-20 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl  text-center font-bold">Register Now!</h1>

          <div className="w-20 mx-auto">
            <img
              className="rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYLKfwvwN1K8im_05pqHzJ6suRhzQ8NeKDMtfW7Q&s"
              style={{ width: "185px" }}
              alt="logo"
            />
          </div>
          <div className="mx-auto">
            <h4 className="mt-1 mb-5 pb-1">We are The photographer Team</h4>
          </div>

          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
              <ToastContainer />
            </div>
          </form>
          <p className="text-center">
            Already have an account? please{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
