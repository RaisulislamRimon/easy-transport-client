import React, { useContext, useState } from "react";
import car from "../../assets/car.jpg";
import "./BannerDetails.css";
import toast from "react-hot-toast";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import LoginPopUp from "./LoginPopUp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Iframe from "react-iframe";

const BannerDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const formHandaler = (e) => {
    e.preventDefault();
    const form = e.target;
    const pickupLocation = form.pickup_location.value;
    const destination = form.destination.value;

    // random code

    // const makeid = (length) => {
    //   let result = "";
    //   const characters =
    //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //   const charactersLength = characters.length;
    //   let counter = 0;
    //   while (counter < length) {
    //     result += characters.charAt(
    //       Math.floor(Math.random() * charactersLength)
    //     );
    //     counter += 1;
    //   }
    //   return result;
    // };

    if (!pickupLocation) {
      toast.error("Please enter Pickup location");
    } else if (!destination) {
      toast.error("Please enter destination");
    } else {
      const searchUrl = `/ride/finder?pickup_location=${pickupLocation}&destination=${destination}`;
      navigate(searchUrl);
    }
  };

  // data fetch
  const [divisions, setDivisions] = useState([]);
  // fetch("http://localhost:5000/division")
  fetch("https://easy-transport-server.vercel.app/division")
    .then((res) => res.json())
    .then((data) => setDivisions(data));

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={car} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm custom-card-box">
          <form onSubmit={formHandaler}>
            <div className="card-body">
              <h1 className="text-2xl font-bold">Request a ride now?</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Enter a pickup location:
                  </span>
                </label>
                <select
                  name="pickup_location"
                  className="select w-full max-w-xs custom-input-box"
                >
                  {divisions.map((division) => (
                    <option value={division.name}>
                      {division.name} - {division.bn_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Enter destination:
                  </span>
                </label>
                <select
                  name="destination"
                  className="select w-full max-w-xs custom-input-box"
                >
                  {divisions.map((division) => (
                    <option value={division.name}>
                      {division.name} - {division.bn_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control mt-6">
                {user?.email ? (
                  <button className="btn btn-primary">Request Now</button>
                ) : (
                  <LoginPopUp></LoginPopUp>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
