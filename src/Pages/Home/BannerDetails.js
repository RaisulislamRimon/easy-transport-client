import React from "react";
import car from "../../assets/car.jpg";

const BannerDetails = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={car} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Request a ride now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Enter a pickup location:
                </span>
              </label>
              <input
                type="text"
                className="input bg-pink-100 shadow-md shadow-slate-500"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Enter destination:
                </span>
              </label>
              <input
                type="text"
                className="input bg-pink-100 shadow-md shadow-slate-500"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Request Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
