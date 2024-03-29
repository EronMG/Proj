import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="second h-[100vh] flex items-center justify-center">
      <div className="blockInf rounded-2xl py-2 px-2 ml:px-10">
        <h2 className="text-primary text-3xl font-jura font-normal">Sign in</h2>
        <div className="flex flex-col gap-4 pt-7 ml:items-center">
          <div className="flex justify-between ml:gap-16 flex-col ml:flex-row">
            <span className="text-white text-2xl font-juru font-[400]">
              E-mail
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className=" bg-transparent outline-none border-[1px] border-line text-white text-xl rounded-[10px] font-gil"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between ml:gap-8 flex-col ml:flex-row">
            <span className="text-white text-2xl font-juru font-[400]">
              Password
            </span>
            <input
              type="password"
              name="password"
              id="password"
              className=" bg-transparent outline-none border-[1px] border-line text-white text-xl rounded-[10px] font-gil"
              placeholder="Password"
            />
          </div>
          <Link
            to="/form"
            className="text-white text-xl font-gilSemi flex items-center justify-center w-[240px] py-3 border-[1px] border-line rounded-full mt-4"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
