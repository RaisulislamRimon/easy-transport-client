import React from "react";
import { useLoaderData } from "react-router-dom";
import ModalFive from "../../Modals/ModalFive";
import ModalFour from "../../Modals/ModalFour";
import ModalOne from "../../Modals/ModalOne";
import ModalSix from "../../Modals/ModalSix";
import ModalThree from "../../Modals/ModalThree";
import ModalTwo from "../../Modals/ModalTwo";
import ReviewModal from "./ReviewModal/ReviewModal";
const AllCategories = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div>

      <h1>
        All Categories
      </h1>

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
            <img
              src={service?.product1[0]?.picture}
              alt="Shoes"
              className="h-72"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              {service?.product1[0]?.name}
            </h2>
            <p className="font-bold">{service?.product1[0]?.description}</p>
            <div className="card-actions justify-end">
              <label htmlFor="booking-modal1" className="btn btn-primary">
                Ride Now
              </label>
              <label
                htmlFor="book-modal"
                className="btn btn-primary text-white"
              >
                Review
              </label>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 ml-6 shadow-xl">
          <figure>
            <img
              src={service?.product2[0]?.picture}
              alt="Shoes"
              className="h-72"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              {service?.product2[0]?.name}
            </h2>
            <p className="font-bold">{service?.product2[0]?.description}</p>
            <div className="card-actions justify-end">
              <label htmlFor="booking-modal2" className="btn btn-primary">
                Ride Now
              </label>
              <label
                htmlFor="book-modal"
                className="btn btn-primary text-white"
              >
                Review
              </label>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 shadow-xl">
          <figure>
            <img
              src={service?.product3[0]?.picture}
              alt="Shoes"
              className="h-72"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              {service?.product3[0]?.name}
            </h2>
            <p className="font-bold">{service?.product3[0]?.description}</p>
            <div className="card-actions justify-end">
              <label htmlFor="booking-modal3" className="btn btn-primary">
                Ride Now
              </label>
              <label
                htmlFor="book-modal"
                className="btn btn-primary text-white"
              >
                Review
              </label>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mb-8 ml-12 mt-8 shadow-xl">
          <figure>
            <img
              src={service?.product4[0]?.picture}
              alt="Shoes"
              className="h-72"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              {service?.product4[0]?.name}
            </h2>
            <p className="font-bold">{service?.product4[0]?.description}</p>
            <div className="card-actions justify-end">
              <label htmlFor="booking-modal4" className="btn btn-primary">
                Ride Now
              </label>
              <label
                htmlFor="book-modal"
                className="btn btn-primary text-white"
              >
                Review
              </label>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mb-8 ml-6 mt-8 shadow-xl">
          <figure>
            <img
              src={service?.product5[0]?.picture}
              alt="Shoes"
              className="h-72"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              {service?.product5[0]?.name}
            </h2>
            <p className="font-bold">{service?.product5[0]?.description}</p>
            <div className="card-actions justify-end">
              <label htmlFor="booking-modal5" className="btn btn-primary">
                Ride Now
              </label>
              <label
                htmlFor="book-modal"
                className="btn btn-primary text-white"
              >
                Review
              </label>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mt-8 mb-8 shadow-xl">
          <figure>
            <img
              src={service?.product6[0]?.picture}
              alt="Shoes"
              className="h-72"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              {service?.product6[0]?.name}
            </h2>
            <p className="font-bold">{service?.product6[0]?.description}</p>
            <div className="card-actions justify-end">
              <label htmlFor="booking-modal6" className="btn btn-primary">
                Ride Now
              </label>
              <label
                htmlFor="book-modal"
                className="btn btn-primary text-white"
              >
                Review
              </label>
            </div>
          </div>
          <ModalOne key={service._id} service={service}></ModalOne>

          <ModalTwo key={service._id} service={service}></ModalTwo>
          <ModalThree key={service._id} service={service}></ModalThree>
          <ModalFour key={service._id} service={service}></ModalFour>

          <ModalFive key={service._id} service={service}></ModalFive>

          <ModalSix key={service._id} service={service}></ModalSix>
        </div>
      </div>
      {<ReviewModal></ReviewModal>}
    </div>
  );
};

export default AllCategories;