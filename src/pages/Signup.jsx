import React, { useState } from "react";
import facebook from "../assets/icons/facebook_1.svg";
import google from "../assets/icons/google.svg";
import x from "../assets/icons/ri_twitter.svg";
import logo from "../dashboard/assets/icons/logo.svg";
import RadioGroupField from "../components/field/RadioGroupField";
import cn from "../utils/cn";
import { signupUser } from "../services/api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RenderInput } from "../components/common/ui/RenderInput";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    state: "",
    age: "",
    gender: "",
    serviceLookingFor: "",
    takenTherapyBefore: "",
  });
  const navigate = useNavigate();

  const serviceOptions = [
    { label: "Teenagers 18+", value: "Teenagers 18+" },
    { label: "Children under 18", value: "Children under 18" },
    { label: "Adults", value: "Adults" },
  ];

  const handleRadioChange = (e) => {
    setFormData({ ...formData, serviceLookingFor: e.target.value });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const RenderLabel = ({ text, className }) => {
    return (
      <>
        <label
          className={cn(
            "block text-base sm:text-lg font-medium text-[#3E3E3E]",
            className
          )}
        >
          {text}
        </label>
      </>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        country: formData.country,
        state: formData.state,
        age: formData.age,
        gender: formData.gender,
        serviceLookingFor: formData.serviceLookingFor,
        takenTherapyBefore: formData.takenTherapyBefore,
      };

      const response = await signupUser(userData);
      console.log(response)
      toast.success(response.msg || "Signup successful!");
      navigate("/login");

      setFormData({
        name: "",
        email: "",
        password: "",
        country: "",
        state: "",
        age: "",
        gender: "",
        serviceLookingFor: "",
        takenTherapyBefore: "",
      });
    } catch (error) {

      toast.error(error.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className=" flex items-center font-poppins justify-center  px-4">
        <div className="w-full max-w-3xl bg-white p-5 sm:p-20 lg:p-24 rounded-md shadow-md">
          <div className="flex justify-center items-center mb-10 sm:mb-6">
            <img src={logo} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Name */}
              <div>
                <RenderLabel text="Name" />
                {/* <RenderInput
                  name={"name"}
                  type={"text"}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={"Enter your Name"}
                  required
                /> */}
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <RenderLabel text="Email" />
                {/* <RenderInput
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                /> */}
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <RenderLabel text="Password" />

                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  required
                  autoComplete="current-password"
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Country */}
              <div>
                <RenderLabel text="Country" />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter Country"
                  required
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* State */}
              <div>
                <RenderLabel text="State" />

                <input
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                  required
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Age */}
              <div>
                <RenderLabel text="Age" />
                <input
                  name="age"
                  type="text"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter Age"
                  required
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Gender */}
              <div>
                <RenderLabel text="Gender" />
                <select
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="PreferNotToSay">Prefer not to say</option>
                </select>
              </div>

              {/* Service Looking For */}
              <div>
                <RenderLabel text="Service Looking For" />
                <RadioGroupField
                  name="serviceLookingFor"
                  options={serviceOptions}
                  value={formData.serviceLookingFor}
                  onChange={handleRadioChange}
                  required
                />
              </div>

              {/* Taken Therapy Before */}
              <div>
                <RenderLabel text="Taken Therapy Before" />
                <RadioGroupField
                  label="Have you taken therapy before?"
                  name="takenTherapyBefore"
                  value={
                    formData.takenTherapyBefore
                      ? formData.takenTherapyBefore.toString()
                      : ""
                  }
                  onChange={handleChange}
                  options={[
                    { label: "Yes", value: "true" },
                    { label: "No", value: "false" },
                  ]}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full my-8 bg-[#094C9F] text-white py-2 rounded-xl hover:bg-blue-800 transition"
            >
              Signup
            </button>
          </form>

          <div className="flex items-center my-8">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="text-center mb-4">
            <a href="#" className="text-[#094C9F] text-base font-semibold">
              Signup with Email
            </a>
          </div>

          <div className="text-center mb-4">
            <span className="text-sm font-light text-[#000000]">
              Already have an account ?{" "}
            </span>
            <a href="/login" className="text-[#094C9F] text-base font-semibold ">
              Login
            </a>
          </div>

          <div className="flex items-center my-8  mx-28">
            <hr className="flex-grow border-[#B5B5B5] " />
            <div className="text-center bg-white absolut text-[#0B0C0D] text-sm px-2 font-normal pb-0">
              Or signup with
            </div>
            <hr className="flex-grow  border-[#B5B5B5]" />
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 pt-10">
            <img src={facebook} alt="" className=" w-7 h-7  sm:w-10 sm:h-10" />
            <img src={google} alt="" className=" w-7 h-7  sm:w-10 sm:h-10" />

            <img src={x} alt="" className=" w-7 h-7  sm:w-10 sm:h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
