import React from "react";
import GoogleMaps from "../../../Components/GoogleMaps";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CommunitiesCards from "../Communities/CommunitiesCards";
import EmailOptin from "../EmailOptin/EmailOptin";
import Rides from "../Rides/Rides";
import Safety from "../Safety/Safety";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <GoogleMaps></GoogleMaps>
      <EmailOptin />
      <Rides></Rides>
      <Category></Category>
      <CommunitiesCards></CommunitiesCards>
      <Safety></Safety>
    </React.Fragment>
  );
};

export default Home;
