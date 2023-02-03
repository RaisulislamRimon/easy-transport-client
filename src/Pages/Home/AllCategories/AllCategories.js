import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AllCategories = () => {
  const service = useLoaderData();
  console.log(service);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={service.product1[0].picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.product1[0].name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={service.product2[1].picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.product2[1].name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={service.product3[2].picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.product3[2].name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={service.product4[3].picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.product4[3].name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={service.product5[4].picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.product5[4].name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={service.product6[5].picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.product6[5].name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllCategories;