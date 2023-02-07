import React from "react";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";

const Bikes = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="/"
          src="https://tb-static.uber.com/prod/bliss-helpdot/asset/images/emobility.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">Bikes && Cars</h1>
          <p className="py-6">
            The most popular products under this bracket are the Ather 450X(Rs.
            1.37 Lakh), Ola S1(Rs. 84,999) and TVS iQube Electric(Rs. 1.25 Lakh)
            (all prices Ex-showroom). The popular new EV two wheelers making
            their debut in 2023 include the EeVe Forseti, Matter Electric Bike
            and PURE EV EcoDryft.
          </p>
          <h3 className="text-3xl font-bold mb-10">All Topices</h3>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>
                  <FaBookOpen />
                </div>
                <div>Signing up and riding</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">Starting a trip</button>
                </div>
                <div>
                  <button className="font-semibold">Unlocking a vehicle</button>
                </div>
                <div>
                  <button className="font-semibold">
                    What are ride zones?
                  </button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>
                  <BsFillCalendar3WeekFill />
                </div>
                <div>Account and payments Options</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    {" "}
                    Using Uber Promotions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
