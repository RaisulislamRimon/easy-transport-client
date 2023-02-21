import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookins, setBookins] = useState([]);
  useEffect(() => {
    fetch(`https://easy-transport-server-eosin.vercel.app/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookins(data));
  }, [user?.email]);


  const handleDelete = (id) => {
    fetch(`https://easy-transport-server-eosin.vercel.app/bookings/${id}`, {
      method: 'DELETE',

    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('delete successfully')
          const remaing = bookins.filter(book => book._id !== id)
          setBookins(remaing)
        }
      })
  }

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
              <th>Action</th>
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
                <button onClick={() => handleDelete(booking._id)} className="btn btn-secondary">Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
