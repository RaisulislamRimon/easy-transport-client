import React, { useEffect } from "react";
import "../Team/Team.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold font-serif mt-10 ">
        ..... Meet Our Team .....
      </h1>
      <div>
        <div className="hero mt-12">
          <div className="hero-content flex-col lg:flex-row w-full gap-10">
            <div className="text-center lg:text-left lg:w-1/2">
              <img
                className="w-full"
                src="https://cdn.pixabay.com/photo/2020/02/20/06/24/team-4864038_1280.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="card flex-shrink-0 lg:w-1/2">
              <h1 className="text-5xl font-bold"> Join Our Journey </h1>
              <p className="py-6">
                We want to talk to people who are up for a challenge and want to
                work for a truly unique business. It is even more exciting when I am
                travelling with my friends and family.
              </p>
              <button className="btn btn-primary w-2/6">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
