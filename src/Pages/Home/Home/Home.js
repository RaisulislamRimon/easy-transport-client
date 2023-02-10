import GoogleMaps from "../../../Components/GoogleMaps";
import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CommunitiesCards from "../Communities/CommunitiesCards";
import Rides from "../Rides/Rides";
import Safety from "../Safety/Safety";
import { Chat } from "./Chat";
import { Link } from "react-router-dom";
import AuthProvider, {
  AuthContext,
} from "../../../contexts/AuthProvider/AuthProvider";

const Home = () => {
  // importing existing user email from authprovider context api
  const { user, logOut } = useContext(AuthContext);

  // const componentDidMount = () => {
  //   (function (d, m) {
  //     var kommunicateSettings =
  //       { "appId": "3ce183b100432935f6dadb3141dab7242", "popupWidget": true, "automaticChatOpenOnNavigation": true };
  //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  //     window.kommunicate = m; m._globals = kommunicateSettings;
  //   })(document, window.kommunicate || {});
  //   /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  // }
  const [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() => {
    fetch("https://easy-transport-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const Paragraph = lazy(() => import("./Paragraph.js"));
  const [showModal, setShowModal] = useState("block");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal("hidden");
  //   }, 5000);
  // }, []);
  return (
    <div className="relative">
      <div>
        <Suspense fallback={<div></div>}>
          <Paragraph />
        </Suspense>
      </div>
      <div className={`${showModal} `}>
        {/* <div className="absolute w-2/3 flex justify-center items-center"> */}
        <div
          className="text-center min-h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          // style={{ left: "50%", top: "50%" }}
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
      <Banner /> <GoogleMaps></GoogleMaps>
      <Rides></Rides>
      <h1 className=" text-center text-4xl font-bold mb-12 ">
        What Do You Need?
      </h1>
      <div className="grid gap-3 mt-8 mx-6 mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((cars) => (
          <Category key={cars._id} cars={cars}></Category>
        ))}
      </div>
      <CommunitiesCards></CommunitiesCards>
      <Safety></Safety>
      <Chat></Chat>
    </div>
  );
};

export default Home;
