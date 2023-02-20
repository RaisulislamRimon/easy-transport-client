import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import Category from "../Category/Category";
import CommunitiesCards from "../Communities/CommunitiesCards";
import Rides from "../Rides/Rides";
import Safety from "../Safety/Safety";
import Banner from "../Banner/Banner"
import { Chat } from "./Chat";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import HomeReviews from "../HomeReviews/HomeReviews";
const Home = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [showModal, setShowModal] = useState("block")
  useEffect(() => {
    fetch("https://easy-transport-server-eosin.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const Paragraph = lazy(() => import("./Paragraph.js"));
  return (
    <div className="relative">
      <div>
        <Suspense fallback={<div></div>}>
          <Paragraph />
        </Suspense>
      </div>
      <div className={`${showModal} `}>
        <div
          className="text-center min-h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://d3bzyjrsc4233l.cloudfront.net/news/Guys_2zHXVKp.png"
                alt="pop-up"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                First time here? Get 10% off your first Ride
              </h2>
              <div className="badge badge-secondary">NEW Offer</div>
              <p>
                This offer is valid for new users only. Click here to get 10%
                off your first ride.
              </p>
              <div className="card-actions justify-end cursor-pointer text-red-600">
                {user?.email ? (
                  <button
                    className="btn btn-error "
                    onClick={() => setShowModal("hidden")}
                  >
                    Close
                  </button>
                ) : (
                  <div>
                    <button className="btn btn-success mr-2">
                      <Link to="/login" className=" hover:no-underline">
                        Login
                      </Link>
                    </button>
                    <button
                      className="btn btn-error "
                      onClick={() => setShowModal("hidden")}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner></Banner>
      <Rides></Rides>
      <h1 className=" text-center text-4xl font-bold mt-[128px]">
        What Do You Need?
      </h1>
      <div className="grid gap-3 mt-8 mx-6 mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((cars) => (
          <Category key={cars._id} cars={cars}></Category>
        ))}
      </div>
      <CommunitiesCards></CommunitiesCards>
      <Safety></Safety>
      <HomeReviews></HomeReviews>
      <Chat></Chat>
    </div>
  );
};

export default Home;
