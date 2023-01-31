import React from "react";

const SafetyDetails = () => {
  return (
    <div>
      {/* safety banner */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <iframe
          width="640"
          height="360"
          frameborder="0"
          src="https://mega.nz/embed/bYdjlahB#A9t2PYb5KB7N44ehuNJmmgXsk03UseUqTQbI5NV-jXc!1a1m"
          allowfullscreen
          allow="autoplay;"
          title="safety-banner"
        ></iframe>

        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyDetails;
