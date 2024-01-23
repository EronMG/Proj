import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="second h-[100vh] flex items-center justify-center">
      <div className="blockInf rounded-2xl py-2 px-10">
        <h2 className="text-primary text-3xl font-jura font-bold">Sign in</h2>
        <div className="flex flex-col gap-4 pt-7 items-center">
          <div className="flex justify-between gap-16">
            <span className="text-white text-2xl font-juru font-[400]">
              E-mail
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className=" bg-transparent outline-none border-[1px] border-line text-white text-xl rounded-[10px]"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-white text-2xl font-juru font-[400]">
              Password
            </span>
            <input
              type="password"
              name="password"
              id="password"
              className=" bg-transparent outline-none border-[1px] border-line text-white text-xl rounded-[10px]"
              placeholder="Password"
            />
          </div>
          <span className="text-primary text-3xl font-jura font-bold text-center cursor-pointer">
            Forget password?
          </span>
          <Link
            to="/main"
            className="text-white font-jura font-bold flex items-center justify-center w-[240px] py-3 border-[1px] border-line rounded-full mt-4"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
