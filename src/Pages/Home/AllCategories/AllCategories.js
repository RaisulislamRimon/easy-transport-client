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
      <div>
        <h2 className="text-center my-5">All Cetagories</h2>
      </div>

      {/* search bar */}
      <div className="flex justify-end mt-5 mb-10 mr-10">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {/* <div className="card w-96 bg-base-100 shadow-xl">
        <h2>All Cetagories</h2>
      </div> */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={service?.product2[1]?.picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service?.product2[1]?.name}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ride Now</button>
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
              <button className="btn btn-primary">Ride Now</button>
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
              <button className="btn btn-primary">Ride Now</button>
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
              <button className="btn btn-primary">Ride Now</button>
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
              <button className="btn btn-primary">Ride Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
