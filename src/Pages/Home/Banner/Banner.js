import React from 'react';
import BannerDetails from '../BannerDetails';
import CommunitiesCards from '../Communities/CommunitiesCards';
import Rides from '../Rides/Rides';

const Banner = () => {
  return (
    <div>
      <BannerDetails></BannerDetails>
      <Rides></Rides>
      <CommunitiesCards></CommunitiesCards>
    </div>
  );
};

export default Banner;