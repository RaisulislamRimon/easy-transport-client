import React from "react";
import { Link } from "react-router-dom";
import SafetyFirst from "../../../Images/safety-first.jpg";

const Safety = () => {
  return (
    <div className="flex items-center my-20 mx-20">
      <div>
        <img src={SafetyFirst} alt="" />
      </div>
      <div className="p-4">
        <h2 className="text-4xl">Your safety comes first always</h2>
        <p>
          We look out for before, during, and after every single ride. And we
          monitor rides to help you get where you need to go. If you ever need
          it. we're standing by, ready to help.
        </p>
        <button className="my-6">
          <Link className="px-5 py-4 bg-orange-600 rounded-2xl text-white">
            Learn About Safety
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Safety;
