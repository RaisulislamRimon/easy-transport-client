import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import "./Finder.css";
import ShowRide from "./ShowRide";

const Finder = () => {
  const [finderData] = useSearchParams();
  const pickupLocation = finderData.get("pickup_location");
  const destination = finderData.get("destination");

  const [rides, setRides] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetch(`http://localhost:5000/rides/${pickupLocation}/${destination}`)
      .then((res) => res.json())
      .then((data) => {
        setRides(data);
        setLoader(false);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="p-10">
        <div class="flex flex-wrap -mx-2 mb-8">
          <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="border border-2 p-5 rounded-lg col-span-1 w-[300px] h-[220px]">
              <h6 className="text-lg">Get a ride</h6>
              <input
                type="text"
                placeholder="Type here"
                value={pickupLocation}
                className="input w-full max-w-xs mb-5 mt-5 ride-selected"
              />
              <input
                type="text"
                placeholder="Type here"
                value={destination}
                className="input w-full max-w-xs ride-selected"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <h3 class="text-xl mt-4 font-bold">Choose a ride</h3>
            {loader && (
              <div className="flex justify-center items-center mt-[40px]">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
              </div>
            )}

            {!loader && rides.length > 0 ? (
              rides.map((ride) => (
                <ShowRide key={ride._id} ride={ride}></ShowRide>
              ))
            ) : (
              <div className="flex justify-center items-center">
                <p>Nothing found!</p>
              </div>
            )}
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8643.98116881353!2d89.87599373953984!3d24.369250627734104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf05a4014cf01%3A0x92168f4a6366c12f!2z4Kav4Kau4KeB4Kao4Ka-IOCmleCmsuCnh-CmnCwg4Ka54Ka-4Kak4Ka_4Kef4Ka-LCDgppXgpr7gprLgpr_gprngpr7gpqTgp4AsIOCmn-CmvuCmmeCnjeCml-CmvuCmh-Cmsg!5e0!3m2!1sen!2sbd!4v1675058345646!5m2!1sen!2sbd"
              width="100%"
              height="420px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Finder;
