import React from "react";
import { Link } from "react-router-dom";
import { BiCar, BiBuoy, BiRestaurant, BiBusSchool } from "react-icons/bi";
import { MdOutlineBikeScooter, MdBusinessCenter } from "react-icons/md";

const Help = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?cs=srgb&dl=pexels-pixabay-53594.jpg&fm=jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6">
        <div className="w-[150px] h-[150px] bg-white rounded">
          <Link to="/help/riders">
            <button>
              <p className=" text-3xl ml-9 mt-6  ">
                <BiCar />{" "}
              </p>
              <p className="mt-3 ml-7 font-semibold">Riders</p>
            </button>
          </Link>
        </div>
        <div className="w-[150px] h-[150px] bg-white rounded">
          <Link to="/help/driving">
            <button>
              <p className=" text-3xl ml-9 mt-6  ">
                <BiBuoy />{" "}
              </p>
              <p className="mt-3 ml-1 font-semibold">Driving & Delivering</p>
            </button>
          </Link>
        </div>
        <div className="w-[150px] h-[150px] bg-white rounded">
          <Link to="/help/marchants">
            <button>
              <p className=" text-3xl ml-9 mt-6  ">
                <BiRestaurant />{" "}
              </p>
              <p className="mt-3 ml-2 font-semibold">Merchants & Resturents</p>
            </button>
          </Link>
        </div>
        <div className="w-[150px] h-[150px] bg-white rounded">
          <Link to="/help/bikes">
            <button>
              <p className=" text-3xl ml-9 mt-6  ">
                <MdOutlineBikeScooter />{" "}
              </p>
              <p className="mt-3 ml-3  font-semibold">Bikes & Cars</p>
            </button>
          </Link>
        </div>
        <div className="w-[150px] h-[150px] bg-white rounded">
          <Link to="/help/business">
            <button>
              <p className=" text-3xl ml-9 mt-6  ">
                <MdBusinessCenter />{" "}
              </p>
              <p className="mt-3 ml-7  font-semibold">Business</p>
            </button>
          </Link>
        </div>
        <div className="w-[150px] h-[150px] bg-white rounded">
          <Link to="/help/freight">
            <button>
              <p className=" text-3xl ml-9 mt-6  ">
                <BiBusSchool />{" "}
              </p>
              <p className="mt-3 ml-7  font-semibold">Freight</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
