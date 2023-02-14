import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookins, setBookins] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookins(data));
  }, []);

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
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {bookins.map((booking) => (
              <tr>
                <th>#{booking.boooking_code}</th>
                <td>{booking.pickupLocation}</td>
                <td>{booking.destination}</td>
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
