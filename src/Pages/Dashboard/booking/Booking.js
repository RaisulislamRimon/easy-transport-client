import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookins, setBookins] = useState([]);
  useEffect(() => {
    fetch(`https://easy-transport-server-eosin.vercel.app/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookins(data));
  }, [user?.email]);

  console.log(bookins);
  return (
    <div className="m-5">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Pickup Location</th>
              <th>Destination</th>
              <th>Date && Time</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {bookins.map((booking, idx) => (
              <tr key={idx}>
                <th>#{booking?.boooking_code}</th>
                <td>{booking?.origin}</td>
                <td>{booking?.destination}</td>
                <td>{`${booking?.date} ${booking?.time}`}</td>
                <td>{booking.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
