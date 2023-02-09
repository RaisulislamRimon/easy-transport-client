import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";

const AllCategories = () => {
  const service = useLoaderData();
  console.log(service);
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["service"],
  //   queryFn: () =>
  //     fetch("https://easy-transport-server.vercel.app/services")
  //       .then((res) => res.json()
  //       ),
  // });
  // console.log(service)
  // if (isLoading) return <h2>Loader</h2>

  // if (error) return <LoadingError />;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <h2>All Cetagories</h2>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={service?.product2[1]?.picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.product2[1]?.name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={service?.product3[2]?.picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.product3[2]?.name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={service?.product4[3]?.picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.product4[3]?.name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={service?.product5[4]?.picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.product5[4]?.name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={service?.product6[5]?.picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.product6[5]?.name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
