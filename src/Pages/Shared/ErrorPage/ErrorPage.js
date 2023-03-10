import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>404 | Not Found</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">404 Page not found !</h1>
            <h2 className="text-2xl py-6">
              Sorry, we couldn't find the page you were looking for.
            </h2>

            <Link to="/">
              <button className="btn btn-error">Go to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
