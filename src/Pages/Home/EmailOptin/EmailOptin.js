import React from "react";
import "./EmailOptin.css";

const EmailOptin = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
    setEmail(email);
    // clearing the email form field
    form.email.value = "";
  };

  return (
    <div style={{
      position: "relative",
    }}>
      <div class="custom-shape-divider-top-1676907109">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div
        className="pb-5 pt-14 text-center"
        style={{
          backgroundImage: `url("https://i.ibb.co/kGTTX4n/pexels-miguel-padri-n-1111317.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl text-white">
          Popular Offers <br />
          <span>Get the best deals on your favorite rides</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="form-control w-full max-w-md mx-auto mt-10"
        >
          <label className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-md"
            required
          />
          <button className="btn btn-wide btn-primary mt-5 text-white mx-auto">
            Subscribe
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default EmailOptin;
