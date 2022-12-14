import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/nav/nav.jpg";
import UseTitle from "../../assets/UseTitle";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// header section
//

const Header = () => {
    UseTitle('header')
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
      toast.success('logOut successfully')
  };

  // header
  //
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>{" "}
      </li>
      <li className="font-semibold">
        <Link to="/blogs">Blogs</Link>{" "}
        <ToastContainer></ToastContainer>
      </li>

      <li className="font-semibold">
        <Link to="/">{user?.email}</Link>{" "}
      </li>
      <li className="font-semibold">
        <Link to="/addservices">Add Services</Link>{" "}
        <ToastContainer></ToastContainer>
      </li>
          <li className="font-semibold">
            <Link to="/MyReviews">My reviews</Link>{" "}
            <ToastContainer></ToastContainer>
          </li>
      {user?.email ? (
        <>

          <li className="font-semibold">
            <Link>
              <button onClick={handleLogOut} className="btn">
                LogOut
              </button>{" "}
              <ToastContainer></ToastContainer>
            </Link>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>{" "}
        </li>
      )}
      <li className="font-semibold">
        <Link to="/register">Register</Link>{" "}
      </li>
    </>
  );

// heading added

  return (
    <div className="pt-5" data-theme="dark">
      <div className="navbar h-20 mb-12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img className="w-20 h-15 rounded-full" src={logo} alt="" />
          <Link className="btn btn-ghost normal-case text-xl"> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning">all Photo</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
