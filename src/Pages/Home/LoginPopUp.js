import React from "react";
import { Link } from "react-router-dom";

const LoginPopUp = () => {
  return (
    <div className="flex justify-center align-">
      <label htmlFor="my-modal-6" className="btn btn-primary btn-wide">
        Request Now
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            You first need to login !
          </h3>
          <div className="flex justify-center items-center	 mt-20">
            <Link to="/login" className="btn btn-dark mr-4 no-underline">
              Login
            </Link>
            <span>OR</span>
            <Link to="/register" className="btn btn-dark ml-4 no-underline">
              Register
            </Link>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-ghost">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUp;
