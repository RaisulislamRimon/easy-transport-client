import React from "react";

const Marchants = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="/"
          src="https://tb-static.uber.com/prod/bliss-helpdot/asset/images/merchants.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">How can we help?</h1>
          <p className="py-6">
            Information literacy is important because it helps you to be aware
            of such unreliable content and to evaluate sources effectively, both
            in an academic context and more generally.
          </p>
          <h3 className="text-3xl font-bold mb-10">All Topices</h3>
          <div>
            <div
              tabIndex={0}
              className="collapse show collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>Easy Transport Eats Closuer</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Easy Transports Eat Tablet Return Instruction
                  </button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse show collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>Account and payments</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold"> Account Setting</button>
                </div>
                <div>
                  <button className="font-semibold">
                    Submit a privacy Request
                  </button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse show collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>Marketing and Webshop</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">Sponsored listing</button>
                </div>
                <div>
                  <button className="font-semibold"> Webshop</button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse show collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>Easy Transport Direct</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">Managing Deliveries</button>
                </div>
                <div>
                  <button className="font-semibold">
                    About Package Delivery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marchants;
