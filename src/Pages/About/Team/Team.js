import React from "react";
import "../Team/Team.css";

const Team = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold font-serif mt-10 p-10 bg-base-200 ">
        ..... Meet Our Team .....
      </h1>
      <div className=" p-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-base-200">
        <div className=" ">
          <img
            src="https://www.mosio.com/mobileanswers/wp-content/uploads/2019/12/text-messaging-for-team-building.jpg"
            className="max-w-sm rounded-lg wi h-96 ml-52   shadow-3xl"
            alt=""
          />
        </div>

        <div className="w-full mt-10 ml-10">
          <h1 className="text-5xl font-bold"> Join Our Journey </h1>
          <p className="py-6 w-96">
            We want to talk to people who are up for a challenge and want to
            work for a truly unique business. It is even more exciting when I am
            travelling with my friends and family.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Team;
