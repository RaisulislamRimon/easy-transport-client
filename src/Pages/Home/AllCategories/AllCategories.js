import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import ReviewModal from "./ReviewModal/ReviewModal";

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
        <div className="card w-96  ml-12 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500  shadow-xl">
          <figure>
            <img src={service?.product1[0]?.picture} alt="Shoes" className='h-72' />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{service?.product1[0]?.name}</h2>
            <p className='font-bold'>{service?.product1[0]?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ride Now</button>
              <label htmlFor="book-modal" className="btn btn-primary text-white">Review</label>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 ml-6 shadow-xl">
          <figure>
            <img src={service?.product2[0]?.picture} alt="Shoes" className='h-72' />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{service?.product2[0]?.name}</h2>
            <p className='font-bold'>{service?.product2[0]?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ride Now</button>
              <label htmlFor="book-modal" className="btn btn-primary text-white">Review</label>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 shadow-xl">
          <figure>
            <img src={service?.product3[0]?.picture} alt="Shoes" className='h-72' />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{service?.product3[0]?.name}</h2>
            <p className='font-bold'>{service?.product3[0]?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ride Now</button>
              <label htmlFor="book-modal" className="btn btn-primary text-white">Review</label>

            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mb-8 ml-12 mt-8 shadow-xl">
          <figure>
            <img src={service?.product4[0]?.picture} alt="Shoes" className='h-72' />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{service?.product4[0]?.name}</h2>
            <p className='font-bold'>{service?.product4[0]?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ride Now</button>
              <label htmlFor="book-modal" className="btn btn-primary text-white">Review</label>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mb-8 ml-6 mt-8 shadow-xl">
          <figure>
            <img src={service?.product5[0]?.picture} alt="Shoes" className='h-72' />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{service?.product5[0]?.name}</h2>
            <p className='font-bold'>{service?.product5[0]?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ride Now</button>
              <label htmlFor="book-modal" className="btn btn-primary text-white">Review</label>

            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mt-8 mb-8 shadow-xl">
          <figure>
            <img src={service?.product6[0]?.picture} alt="Shoes" className='h-72' />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{service?.product6[0]?.name}</h2>
            <p className='font-bold'>{service?.product6[0]?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ride Now</button>
              <label htmlFor="book-modal" className="btn btn-primary text-white">Review</label>

            </div>
          </div>
        </div>
      </div>
      {
        <ReviewModal></ReviewModal>
      }
    </div>

  );
};

export default AllCategories;
