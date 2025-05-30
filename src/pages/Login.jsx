import React from "react";
import facebook from "../assets/icons/facebook_1.svg";
import google from "../assets/icons/google.svg";
import x from "../assets/icons/ri_twitter.svg";
import CustomInput from "../components/field/CustomInput";
import logo from "../dashboard/assets/icons/logo.svg";

const Login = () => {
  const handleChange = () => {};

  return (
     <div className="container mx-auto">
      <div className=" flex items-center font-poppins justify-center  px-4">
      <div className="w-full max-w-3xl bg-white p-5 sm:p-20 lg:p-24 rounded-md shadow-md">
        <div className="flex justify-center items-center mb-10 sm:mb-6">
          <img src={logo} alt="" />
        </div>

        <div className="mb-5">
          <label className="block text-base sm:text-lg font-medium text-[#3E3E3E]">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="mt-1.5 w-full px-4 py-2.5  text-sm sm:text-base  border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="">
          <label className="block text-base sm:text-lg font-medium text-[#3E3E3E]">OTP</label>
          <input
            type="text"
            placeholder="Enter OTP"
            className="mt-1.5 w-full px-4 py-2.5  text-sm sm:text-base  border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      

        <button className="w-full my-8 bg-[#094C9F] text-white py-2 rounded-xl hover:bg-blue-800 transition">
          Login
        </button>

        <div className="flex items-center my-8">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="text-center mb-4">
          <a href="#" className="text-[#094C9F] text-base font-semibold">
            Login with password
          </a>
        </div>

        <div className="text-center mb-4">
          <span className="text-sm font-light text-[#000000]">
            Don’t have an account ?{" "}
          </span>
          <a href="#" className="text-[#094C9F] text-base font-semibold ">
            Sign Up
          </a>
        </div>

        <div className="text-center text-[#0B0C0D] text-sm font-normal pb-3">
          Or login with
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6 py-7">
          <img src={facebook} alt="" className=" w-7 h-7  sm:w-10 sm:h-10"/>
          <img src={google} alt="" className=" w-7 h-7  sm:w-10 sm:h-10" />

          <img src={x} alt="" className=" w-7 h-7  sm:w-10 sm:h-10"/>
        </div>
      </div>
    </div>
     </div>
    
  );
};

export default Login;
