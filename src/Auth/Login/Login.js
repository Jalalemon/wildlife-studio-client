import React, { useContext } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Register/styles.css'

import { AuthContext } from "../AuthProvider/AuthProvider";

// login google

const Login = () => {
  const { signIn, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // eventHandler click


  const handleLogin = (event) => {
   toast.success("congrats! logged successfully");
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
toast.success("congrats! logged successfully");
        const currentUser = {
          email: user.email,
        };

        //get token

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(from, { replace: true });
          
            localStorage.setItem("wildlife-token", data.token);
          });
      })
      .catch((error) => console.error(error));
  };

  // handleLOgin


  const handleGoogleSignIn = () =>{
    toast.success("congrats! logged successfully");
      signInGoogle()
      .then((result) => {
          const user = result.user;
         
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));

  }
  return (
    // hero form

    <div className="hero w-full capp my-20">
      <div className="hero-content w-full p-0">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 py-20 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl  text-center font-bold">Login now!</h1>
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
          <form onSubmit={handleLogin} className="card-body">
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <ToastContainer />
            </div>
          </form>
          <p className="text-center">
            New in WildLife studio? please{" "}
            <Link className="text-orange-600 font-bold" to="/register">
              Register
            </Link>{" "}
          </p>
          <div className="mx-auto">
            <button onClick={handleGoogleSignIn} className="btn">
              {" "}
              login with google
            </button>
            <ToastContainer />
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Login;
