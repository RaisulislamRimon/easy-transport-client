import React from "react";

const Ride = ({ card }) => {
  const { name, description, img } = card;
  return (
    <div className="card bg-base-100 shadow-xl mt-10">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-semibold">{name}</h2>
        <p>{description.slice(0, 100)}</p>
      </div>
    </div>
  );
  //>>>>>>> main
};

export default Ride;
