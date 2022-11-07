import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext);
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
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 py-20 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl  text-center font-bold">Register Now!</h1>
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
