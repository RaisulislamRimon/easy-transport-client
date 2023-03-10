import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { providerLogin, signIn, githubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email === "" || password === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please fill up all the fields",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must be at least 6 characters",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.code && error.code,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please try again",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  // const handleGithubSignIn = () => {
  //   githubSignIn(githubProvider)
  //     .then((result) => {
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         position: "center",
  //         icon: "error",
  //         title: "Please try again",
  //         showConfirmButton: false,
  //         timer: 3000,
  //       });
  //     });
  // };

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="">
          <img
            src="https://i.ibb.co/HHZ4t2T/login.gif"
            alt="login"
            className="w-4/5 mx-auto mt-10"
          />
        </div>
        <div className="lg:w-2/3 mt-5">
          <h2 className="text-center text-4xl font-bold mb-4">
            Sign in to your account
          </h2>
          <p className="text-center mb-10">Or, start your 14-day free trial</p>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xs mx-auto mb-10">
              <div className="mb-5">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div>
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <button
                type="submit"
                className="btn btn-wide  btn-warning mx-auto my-10 text-lg"
              >
                Sign in
              </button>

              <div className="mx-auto mb-4">
                <p className="">
                  Or, Sign in with Google
                  {/* or Github */}
                </p>
                <div className="flex justify-around text-2xl m-5">
                  <FaGoogle
                    onClick={handleGoogleSignIn}
                    className="hover:cursor-pointer hover:ring-2 hover:rounded"
                  />
                  {/* <FaGithub
                    onClick={handleGithubSignIn}
                    className="hover:cursor-pointer hover:ring-2 hover:rounded"
                  /> */}
                </div>
              </div>
              <p>
                New to this website?{" "}
                <Link
                  to="/register"
                  className="link link-primary"
                >
                  Register a New Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
