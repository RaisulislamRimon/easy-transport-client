import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Direction from "../Home/Direction";
import LeaveModal from "../Home/LeaveModal";
const Banner = () => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('Leave ')
  const [time, setTime] = useState('Now')
  const { user } = useContext(AuthContext)
  const formHandaler = (e) => {
    e.preventDefault();
    const form = e.target;
    const origin = form.origin.value;
    const destination = form.destination.value;
    setOrigin(origin);
    setDestination(destination)
    console.log(origin, destination);
    const makeid = (length) => {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    };



    if (!origin) {
      toast.error("Please enter Pickup location");
    } else if (!destination) {
      toast.error("Please enter destination");
    } else {
      axios
        .post("https://easy-transport-server-eosin.vercel.app/store/booking", {
          boooking_code: makeid(10),
          origin: origin,
          destination: destination,
          email: user?.email,
          date: date,
          time: time
        })
        .then((response) => {
          if (response.data.acknowledged) {

          }

        })
        .catch((error) => {
          console.error(error);
        });
    }

  }
  const handleChildData = (childData1, childData2) => {
    setDate(childData1)
    setTime(childData2)
  }
  return (
    <div>
      <div className="flex mb-5">
        <div className="w-1/3">
          <form onSubmit={formHandaler}>
            <div className="card-body ">
              <h1 className="text-2xl font-bold">Request a ride now?</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold">
                    Enter a pickup location:
                  </span>
                </label>
                <input type="text" name="origin" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Enter destination:
                  </span>
                </label>
                <input type="text" name="destination" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              </div>
              <div>
                <div className="form-control w-full max-w-xs mt-5">
                  <label htmlFor="leaveModal" className="select select-bordered "><p className="pt-2">{`${date} ${time}`}</p></label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full max-w-xs">Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-2/3 rounded rounded-lg">
          <Direction origin={origin} destination={destination}></Direction>
        </div>
      </div>
      <LeaveModal onChildData={handleChildData}></LeaveModal>
    </div>
  );
};

export default Banner;
