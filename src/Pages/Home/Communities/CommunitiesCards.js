import React from "react";
import CommunitiesCard from "./CommunitiesCard";
import icon1 from "../../../assets/images/icons/img1.svg";
import icon2 from "../../../assets/images/icons/img2.svg";
import icon3 from "../../../assets/images/icons/img3.svg";

const CommunitiesCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Cities covered",
      number: "50+",
      description: "Across India,Australia,New Zealand and the UK.",
      icon: icon1,
    },
    {
      id: 2,
      name: "Yearly ride",
      number: "10Cr+",
      description: "Booked by our by customer every year.",
      icon: icon2,
    },
    {
      id: 3,
      name: "Kilometers on S1",
      number: "3Cr+",
      description: "Distance covered Ola S1 scooter within a years of launch.",
      icon: icon3,
    },
  ];
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">
          Global mobility ecosystem driving
        </h1>
        <h1 className="text-4xl font-bold"> Communities forward</h1>
      </div>
      <div className="grid mt-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-11">
        {cardData.map((card) => (
          <CommunitiesCard key={card.id} card={card}></CommunitiesCard>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesCards;
