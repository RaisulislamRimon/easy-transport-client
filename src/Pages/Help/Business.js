import React from "react";

const Business = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="/"
          src="https://tb-static.uber.com/prod/bliss-helpdot/asset/images/business.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">Easy Transports for Business</h1>
          <p className="py-6">
            This Help Center is a space for Uber for Business administrators and
            coordinators to browse helpful tips and answers to common questions.
          </p>
          <h3 className="text-3xl font-bold mb-10">All Topices</h3>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>Account and billing</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">Payment options</button>
                </div>
                <div>
                  <button className="font-semibold">
                    Account settings and issues
                  </button>
                </div>
                <div>
                  <button className="font-semibold">Fees and charges</button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>Managing travel and meal programs</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Managing expense codes
                  </button>
                </div>
                <div>
                  <button className="font-semibold">Program vs. group</button>
                </div>
                <div>
                  <button className="font-semibold">
                    Activating and deactivating a program
                  </button>
                </div>
                <div>
                  <button className="font-semibold">
                    Placing a group order
                  </button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>Arranging guest and healthcare rides</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Requesting and scheduling rides
                  </button>
                </div>
                <div>
                  <button className="font-semibold">
                    Issues arranging rides
                  </button>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium flex items-center gap-3">
                <div>Using the dashboard</div>
              </div>
              <div className="collapse-content">
                <div>
                  <button className="font-semibold">
                    Viewing account activity
                  </button>
                </div>
                <div>
                  <button className="font-semibold">
                    Downloading activity reports
                  </button>
                </div>
                <div>
                  <button className="font-semibold">
                    Viewing trip and order receipts
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

export default Business;
