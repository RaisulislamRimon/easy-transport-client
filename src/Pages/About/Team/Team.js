import React, { useEffect } from "react";
import "../Team/Team.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <h1 className="text-center text-3xl font-bold font-serif mt-10 p-10 bg-base-200 ">
        ..... Meet Our Team .....
      </h1>
      <div className=" p-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-base-200">
        <div data-aos="fade-right" data-aos-duration='2000'>
          <img
            src="https://cdn.pixabay.com/photo/2020/02/20/06/24/team-4864038_1280.jpg"
            className="max-w-sm rounded-lg lg:ml-52  image-fluid lg:w-96 lg:h-80 md:w-1/2  fluid   shadow-3xl"
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
