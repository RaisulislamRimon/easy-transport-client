import React from "react";
import { AiFillCar, AiTwotoneQuestionCircle } from "react-icons/ai";

const Driving = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="/"
          src="https://tb-static.uber.com/prod/bliss-helpdot/asset/images/driver.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">Driving & Delivering</h1>
          <p className="py-6">
            Drivers don't get to keep all of the money a rider pays. Uber takes
            100% of riders' booking fees. Then, Uber takes a 25% cut from each
            fare. Drivers keep 100% of tips and bonuses.
          </p>
          <h3 className="text-3xl font-bold mb-10">All Topices</h3>
          <div>
            <div
              tabIndex={0}
              className="collapse show collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>
                  <AiFillCar />
                </div>
                <div>Help With a trip</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Trip price adjustments
                  </button>
                </div>
                <div>
                  <button className="font-semibold">Issue with a rider</button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse show collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>
                  <AiTwotoneQuestionCircle />
                </div>
                <div>Account And App Issue</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Updating Your Vehicle
                  </button>
                </div>
                <div>
                  <button className="font-semibold">Updating Documents</button>
                </div>
                <div>
                  <button className="font-semibold">
                    Common Phone And App Issue
                  </button>
                </div>
                <div>
                  <button className="font-semibold">
                    Change Account Setting
                  </button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse show collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>
                  <AiTwotoneQuestionCircle />
                </div>
                <div>Earnings and payments</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    {" "}
                    General Earning Information
                  </button>
                </div>
                <div>
                  <button className="font-semibold"> Promotions</button>
                </div>
                <div>
                  <button className="font-semibold">
                    {" "}
                    Wallet And Earnings
                  </button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse show collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>
                  <AiTwotoneQuestionCircle />
                </div>
                <div>Booking appointments</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Can not SignIn or go Online
                  </button>
                </div>
                <div>
                  <button className="font-semibold">Managing Documents</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driving;
