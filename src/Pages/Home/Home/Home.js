import React from "react";
import GoogleMaps from "../../../Components/GoogleMaps";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CommunitiesCards from "../Communities/CommunitiesCards";
import Rides from "../Rides/Rides";
import Safety from "../Safety/Safety";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Rides></Rides>
      <Category></Category>
      <CommunitiesCards></CommunitiesCards>
      <GoogleMaps></GoogleMaps>
      <Safety></Safety>
    </React.Fragment>
  );
};

export default Home;
