import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tmgd8kf",
        "template_ac405gr",
        e.target,
        "d5x4HI78w9ww73nEB"
      )
      .then((result) => {
        toast.success("Message sent successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <h3 className="text-3xl text-center mt-10 text-orange-600 font-bold">
        Contact Us
      </h3>
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row w-full gap-5">
            <div className="text-center lg:text-left lg:w-1/2">
              <img
                className="w-full h-[300px]"
                src="https://static.vecteezy.com/system/resources/previews/006/445/627/original/illustration-graphic-cartoon-character-of-business-contract-free-vector.jpg"
                alt=""
                srcset=""
              />
              <p className="text-orange-500 text-2xl font-bold">
                Easy Transport
              </p>
              <p className="text-orange-500 text-2xl font-bold">
                Address: Dhaka,Bangladesh
              </p>
              <p className="text-orange-500 text-2xl font-bold">
                Email: easytransport@gmail.com
              </p>
            </div>
            <div className="card flex-shrink-0 lg:w-1/2 shadow-lg">
              <form onSubmit={sendEmail} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Type Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Massage</span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered"
                    placeholder="Massage"
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
