import React from "react";

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
    <div className="pb-5 pt-14 text-center">
      <h1 className="text-4xl">
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
        <button className="btn btn-wide btn-outline btn-accent mt-5 text-black mx-auto">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default EmailOptin;
