import React from "react";

const SafetyDetails = () => {
  return (
    <div>
      {/* safety banner */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img
          src="https://i.ibb.co/4Y0HwX5/ezgif-com-gif-maker.gif"
          alt="safety_banner"
        />

        <div className="card-body">
          <h1 className="card-title text-5xl lg:mt-28">
            Our commitment to safety
          </h1>
          <p className="text-xl mt-6 text-justify">
            We want you to move freely, make the most of your time, and be
            connected to the people and places that matter most to you. That’s
            why we are committed to safety, from the creation of new standards
            to the development of technology with the aim of reducing incidents.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 mx-auto my-20">
        <h2 className="text-3xl font-bold mt-10">
          Helping to keep each other safe during
          <br /> COVID-19
        </h2>
        <p className="text-2xl mt-5">
          We’re actively monitoring the coronavirus (COVID-19) situation and are
          continually working to help keep those who rely on our platform
          healthy and safe.
        </p>
        <div>
          <button className="btn btn-warning my-3">
            Go to Uber’s COVID-19 hub
          </button>
          <br />
          <button className="btn btn-warning mt-2">
            Read about our new Door-to-Door Safety Standard
          </button>
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-3xl font-bold text-center">
          How safety is built into your experience
        </h1>
        <div className="grid grid-cols-1 gap-6 mx-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold my-5">
              Safety features in the app
            </h3>
            <p>
              Share your trip details with loved ones. Track your trip during
              your ride. Our technology helps put peace of mind at your
              fingertips.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold my-5">
              An inclusive community
            </h3>
            <p>
              Millions of riders and drivers share a set of Community
              Guidelines, holding each other accountable to do the right thing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold my-5">
              Support at every turn
            </h3>
            <p>
              A specially trained team is available 24/7. Reach them in the app,
              day or night, with any questions or safety concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyDetails;
