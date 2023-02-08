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
 
const BannerDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
 
  const formHandaler = (e) => {
    e.preventDefault();
    const form = e.target;
    const pickupLocation = form.pickup_location.value;
    const destination = form.destination.value;
 
    // random code
 
    const makeid = (length) => {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    };
 
    if (!pickupLocation) {
      toast.error("Please enter Pickup location");
    } else if (!destination) {
      toast.error("Please enter destination");
    } else {
      axios
        .post("https://easy-transport-server.vercel.app/store/booking", {
          boooking_code: makeid(10),
          pickupLocation: pickupLocation,
          destination: destination,
          email: user?.email,
        })
        .then((response) => {
          if (response.data.acknowledged) {
            navigate("/dashboard");
          }
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
 
  // data fetch
  const [divisions, setDivisions] = useState([]);
  fetch("https://easy-transport-server.vercel.app/division")
    .then((res) => res.json())
    .then((data) => setDivisions(data));
 
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={car} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm custom-card-box shadow-2xl">
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
                  className="select w-full max-w-xs custom-input-box">
                  {divisions.map((division, idx) => (
                    <option value={division.name} key={idx}>
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
                  className="select w-full max-w-xs custom-input-box">
                  {divisions.map((division, idx) => (
                    <option value={division.name} key={idx}>
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
 
          {/* <div className="card flex-shrink-0 w-full max-w-sm ">
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
 
          </div> */}
        </div>
      </div>
    </div >
  );
}

export default BannerDetails;