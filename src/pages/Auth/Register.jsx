import "../../index.css";
import { EnvelopeIcon, KeyIcon, EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onChangeEmail = (e) => {
    setUsername(e.target.value);
    setError("");
    setSuccess("");
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
    setSuccess("");
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const bodyPayload = {
      username: username,
      password: password,
    };

    axios
      .post(`https://reqres.in/api/register`, bodyPayload)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        localStorage.setItem("accesstoken", token);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <div className="login-wrapper md:flex justify-center items-center h-screen relative">
        <div className="-z-10 backdrop-blur-xl brightness-95 absolute top-0 left-0 w-full h-full"></div>
        <div className="md:w-3/4 md:h-4/5 bg-red-100 md:flex md:flex-row flex-col md:p-28 p-10 h-full md:rounded-3xl relative z-10">
          <div className="flex flex-col">
            <p className="text-4xl md:mt-10 mt-5">
              DeeFood
            </p>
            <img
              src="../../public/assets/register.png"
              alt=""
              className="h-100 w-100"
            />
            
          </div>

          <div className="form bg-[#E9967A] md:item-center rounded-lg md:ml-auto mt-10 p-10 flex flex-col md:w-[25rem] w- md:justify-center">
            <span className="mx-auto mb-7 text-xl uppercase tracking-widest">
              Register
            </span>

            <form className="max-w-sm mx-auto">
              <label className="block mb-1 text-sm text-gray-900 dark:text-white">
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
                  <KeyIcon className="w-5 h-5 text-gray-400 mb-12" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Password"
                  onChange={onChangePassword}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3 mb-10"
                  type="button"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <label className="block mb-1 mt-8 text-sm text-gray-900 dark:text-white">
                Konfirmasi Password
                </label>
              </div>
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
              className="bg-red-400 mt-8 w-32 p-2 rounded-md mx-auto flex justify-center tracking-widest"
              onClick={onSubmit}>
              Register
            </button>
            <p className="text-xs font-normal mt-8 mx-auto">
              have an account?
              <Link to="/login" className="pl-1">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
