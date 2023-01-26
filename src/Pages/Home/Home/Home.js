import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CommunitiesCards from "../Communities/CommunitiesCards";
import Rides from "../Rides/Rides";
import Safety from "../Safety/Safety";

const Home = () => {
  return (
    <div>
      <Banner />
      <Rides></Rides>
      <Category></Category>
      <CommunitiesCards></CommunitiesCards>
      <Safety></Safety>

    </div>
  );
};

export default Home;
