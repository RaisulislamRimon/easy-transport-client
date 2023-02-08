import React from "react";
import { AiFillCar, AiTwotoneQuestionCircle } from "react-icons/ai";

const Riders = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="/"
          src="https://tb-static.uber.com/prod/bliss-helpdot/asset/images/rider.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">Riders</h1>
          <p className="py-6">
            Riders is an educational platform built for a very different future.
            A future that is digital-first. A future in which we recognize play
            as the most powerful learning tool. A future where the most
            effective STEM education is accessible to every student.
          </p>
          <h3 className="text-3xl font-bold mb-10">All Topices</h3>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>
                  <AiFillCar />
                </div>
                <div>Help With a trip</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">Concellations</button>
                </div>
                <div>
                  <button className="font-semibold">Cash Payment Issue</button>
                </div>
                <div>
                  <button className="font-semibold">Delibery Issue</button>
                </div>
                <div>
                  <button className="font-semibold">
                    Feedback About The driver or vehicle
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
                  <AiTwotoneQuestionCircle />
                </div>
                <div>Account</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Can't Sign In or Request a trip
                  </button>
                </div>
                <div>
                  <button className="font-semibold">Account Setting</button>
                </div>
                <div>
                  <button className="font-semibold">Payment Methods</button>
                </div>
                <div>
                  <button className="font-semibold">
                    I lost My phone Number in Easy Transport
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
                  <AiTwotoneQuestionCircle />
                </div>
                <div>Membership & layalty</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    {" "}
                    Easy Transport Rewards is leaving
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
                  <AiTwotoneQuestionCircle />
                </div>
                <div>Accessbility</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Resourses for Riders with disabilities
                  </button>
                </div>
                <div>
                  <button className="font-semibold">
                    Using TalkBack and VoiceOver
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

export default Riders;
