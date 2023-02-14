import React from "react";

const ShowRide = (props) => {
  const { title, dropoff, description, price, img } = props.ride;

  console.log(props);
  return (
    <React.Fragment>
      <div class="border w-full rounded mt-5 flex p-4  items-center relative">
        <img src={img} class="max-w-[100px]" />
        <div class="w-2/2">
          <div className="flex items-center">
            <h3 class="text-lg font-bold">{title}</h3>
            <svg
              className="ml-[10px]"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none">
              <title>Person</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3H3v-3z"
                fill="currentColor"></path>
            </svg>
          </div>
          <p>{dropoff} dropoff</p>
          <p>{description}</p>
        </div>
        <div class="w-[200px] absolute right-[-45px]">
          <h6 class="font-bold">BDT {price}</h6>
          <button className="btn btn-[black] btn-sm mt-[10px]">Book now</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowRide;
