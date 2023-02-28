import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ModalFive = ({ service }) => {
  const { user } = useContext(AuthContext);
  const handelModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      name,
      address,
      phone,
      email,
    };
    console.log(booking);
    fetch(`https://easy-transport-server-tau.vercel.app/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully Booking",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            action=""
            onSubmit={handelModal}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text"
              readOnly
              placeholder={service?.product2[0]?.name}
              className="input w-full font-bold text-black-500 input-bordered"
            />
             <input
              name="name"
              type="text"
              disabled
              placeholder="Enter Your Name :"
              defaultValue={user?.displayName}
              className="input w-full font-bold text-black-500  input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Enter Your Email"
              className="input w-full  font-bold text-black-500 input-bordered"
            />
            <input
              name="phone"
              type="number"
              placeholder="Enter Your Phone Number"
              className="input w-full font-bold text-black-500 input-bordered"
            />
            <input
              name="address"
              type="text"
              placeholder="Enter Your Address"
              className="input w-full  font-bold text-black-500 input-bordered"
            />
            <button
              htmlFor="booking-modal5"
              className="btn w-full btn-accent font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalFive;
