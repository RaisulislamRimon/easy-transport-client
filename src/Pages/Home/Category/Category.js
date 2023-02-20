import React from "react";
import { Link } from "react-router-dom";

const Category = ({ cars }) => {
  const { picture, Catagory_name, description, _id } = cars;
  return (
    <div className="min-h-screen mt-10">
      <div>
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg h-64 w-full" src={picture} alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-bold  mb-2">{Catagory_name}</h5>
              <p className="text-gray-700 font-bold text-base mb-4">
                {description.slice(0, 100)}...
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {" "}
                <Link to={`/services/${_id}`} className="text-white hover:text-white hover:no-underline">See all</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
