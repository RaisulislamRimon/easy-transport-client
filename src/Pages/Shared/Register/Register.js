import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [checked, setChecked] = useState("");
  const { createUser, updateUserProfile, providerLogin } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (email === "" || password === "" || checked === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "All fields are required",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must be at least 6 characters",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    createUser(email, password).then((result) => {
      const userIdFirebase = result.user.uid;

      const userInfo = {
        name,
        email,
        password,
        checked,
        userIdFirebase,
        emailVerified: false,
      };
      console.log(userInfo);

      // fetch("http://localhost:5000/signup", {
      fetch("https://easy-transport-server.vercel.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Account created successfully",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });

      // form.reset();
      updateUserProfile({
        displayName: name,
        // photoURL: photoUrl,
      });
      //   fetch("url/jwt", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(email),
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       // console.log(data);
      //       localStorage.setItem("easytransport", data?.token);
      //       navigate(from, { replace: true });
      //     });
      // })
      // .catch((error) => {
      //   console.error(error);
      //   Swal.fire({
      //     position: "center",
      //     icon: "error",
      //     title:
      //       (error?.code && error?.code) ||
      //       "The email address is already in use by another account.",
      //     showConfirmButton: false,
      //     timer: 2000,
      //   });
    });
  };

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        if (result?.user?.uid) {
          const userInfo = {
            name: result?.user?.displayName,
            email: result?.user?.email,
            checked: "rider",
            userIdFirebase: result?.user?.uid,
            emailVerified: result?.user?.emailVerified,
          };

          // fetch("http://localhost:5000/signup", {
          fetch("https://easy-transport-server.vercel.app/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Account created successfully",
                  showConfirmButton: false,
                  timer: 2000,
                });
                // fetch("url/jwt", {
                //   method: "POST",
                //   headers: {
                //     "content-type": "application/json",
                //   },
                //   body: JSON.stringify(userInfo.email),
                // })
                //   .then((response) => response.json())
                //   .then((data) => {
                //     // console.log(data);
                //     localStorage.setItem("easytransport", data?.token);
                //     navigate(from, { replace: true });
                //   });
              }
            });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please try again",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up | Easy Transport</title>
      </Helmet>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="">
          <img
            src="https://i.ibb.co/T8K4wK4/signup.gif"
            // src="https://i.ibb.co/HHZ4t2T/login.gif"
            alt="login"
            className="w-4/5 mx-auto mt-10"
          />
        </div>
        <div className="lg:w-2/3 ">
          <div className="mt-5">
            <h2 className="text-center text-4xl font-bold mb-10">
              Sign Up to create your account
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-xs mx-auto mb-10">
                <div className="mb-5">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="name" className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
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
                <div className="mt-3">
                  <div className="form-control">
                    <h3>Are you a - {checked} </h3>
                    <label className="label cursor-pointer">
                      <span className="label-text">Rider</span>
                      <input
                        type="radio"
                        name="userType"
                        value="rider"
                        // checked
                        className="radio checked:bg-blue-500"
                        onChange={() => {
                          setChecked("rider");
                        }}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Driver</span>
                      <input
                        type="radio"
                        name="userType"
                        value="driver"
                        className="radio checked:bg-blue-500"
                        onChange={() => {
                          setChecked("driver");
                        }}
                      />
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-wide btn-primary mx-auto my-10 text-lg"
                >
                  Sign Up
                </button>

                <div onClick={handleGoogleLogin} className="mx-auto btn mb-4">
                  <p className="">Or, Sign up with Google</p>
                  <div className="flex justify-around text-2xl text-center">
                    <FaGoogle className="hover:cursor-pointer ml-3 text-lg" />
                  </div>
                </div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="link link-primary underline-offset-4"
                  >
                    Please log in now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
