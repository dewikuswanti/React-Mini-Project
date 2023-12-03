import "../../index.css";
import {
  EnvelopeIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
    setError("");
    setSuccess("");
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const bodyPayload = {
      email: email,
      password: password,
    };

    axios
      .post(`https://reqres.in/api/login`, bodyPayload)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        localStorage.setItem("accesstoken", token);
        setSuccess(res.data.message);
        console.log(res);
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Logged in successfully!",
        });
        Navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.error);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.response.data.error,
        });
      });
  };

  return (
    <>
      <div className="login-wrapper md:flex justify-center items-center h-screen relative">
        <div className="-z-10 backdrop-blur-xl brightness-95 absolute top-0 left-0 w-full h-full"></div>
        <div className="md:w-3/4 md:h-4/5 bg-gradient-to-br from-[#6DB9EF] to-gray-200 md:flex md:flex-row flex-col md:p-28 p-10 h-full md:rounded-3xl relative z-10">
          <div className="flex flex-col">
            <img
              src="../../public/assets/Logo.png"
              alt=""
              className="h-10 w-36"
            />
            <p className="text-4xl md:mt-20 mt-10">
              Login into <br />
              your account
            </p>
          </div>

          <div className="form bg-[#F6F2DD] md:item-center rounded-lg md:ml-auto mt-10 p-10 flex flex-col md:w-[25rem] w- md:justify-center">
            <span className="mx-auto mb-2 text-xl uppercase tracking-widest">
              Login
            </span>

            <form className="max-w-sm mx-auto">
              {error.length ? (
                <h1 className="text-center text-sm text-red-500">
                  {error} dude
                </h1>
              ) : null}
              <label className="block mb-1 mt-3 text-sm text-gray-900 dark:text-white">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                  <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[20rem] w-[15rem] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email@reqres.in"
                  onChange={onChangeEmail}
                />
              </div>

              <label className="block mb-1 mt-8 text-sm text-gray-900 dark:text-white">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                  <KeyIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Password"
                  onChange={onChangePassword}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  type="button"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            </form>
            <button
              className="bg-[#FF993A] mt-8 w-32 p-2 rounded-md mx-auto flex justify-center tracking-widest"
              onClick={onSubmit}>
              Login
            </button>
            <p className="text-xs font-normal mt-8 mx-auto">
              Don't have an account?
              <Link to="/register" className="pl-1">
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
