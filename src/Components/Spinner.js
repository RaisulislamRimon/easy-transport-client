import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full spinner">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>
  );
};

export default Spinner;
