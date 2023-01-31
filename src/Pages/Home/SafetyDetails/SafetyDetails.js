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
          <h1 className="card-title text-3xl">Our commitment to safety</h1>
          <p>
            We want you to move freely, make the most of your time, and be
            connected to the people and places that matter most to you. That’s
            why we are committed to safety, from the creation of new standards
            to the development of technology with the aim of reducing incidents.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyDetails;
