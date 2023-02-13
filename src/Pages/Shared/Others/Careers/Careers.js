import React from "react";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div>
      <h1 className="text-center pt-5 pb-10">Careers</h1>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Teams</h1>
              <p className="py-6 text-lg text-justify">
                An effective transportation system is vital for a functioning
                community, offering convenience and affordability. A safe, fast,
                reliable, and accessible system is important for all members.
                The success of the system depends on the team operating and
                maintaining it, made up of professionals with diverse skills.
                Good communication and collaboration among team members ensure a
                high-quality experience for the community.
              </p>
              <button>
                <Link to="/" className="hover:no-underline">
                  <h1 className="text-2xl font-bold">Apply Now</h1>
                </Link>
              </button>
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                <img
                  src="
                https://i.ibb.co/Xx9dLC4/pexels-max-avans-5093029.jpg"
                  alt="car img"
                  className="border-2 border-base-200 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
