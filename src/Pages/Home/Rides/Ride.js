import React from "react";

const Ride = ({ card }) => {
  const { name, description, img } = card;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-semibold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Ride;
