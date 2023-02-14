import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className="navbar bg-base-100 header-sso">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/ride">Ride</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="logo">
            <img src={logo}></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/ride">Ride</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {user?.email ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button onClick={logOut} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn login-btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
