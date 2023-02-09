import GoogleMaps from "../../../Components/GoogleMaps";
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CommunitiesCards from "../Communities/CommunitiesCards";
import Rides from "../Rides/Rides";
import Safety from "../Safety/Safety";
import { Chat } from "./Chat";

const Home = () => {
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
  return (
    <div>
      <Banner />
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
      <GoogleMaps></GoogleMaps>
      <Safety></Safety>
      <Chat></Chat>
    </div>
  );
};

export default Home;
