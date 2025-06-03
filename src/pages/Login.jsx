// import React from "react";
// import facebook from "../assets/icons/facebook_1.svg";
// import google from "../assets/icons/google.svg";
// import x from "../assets/icons/ri_twitter.svg";
// import CustomInput from "../components/field/CustomInput";
// import logo from "../dashboard/assets/icons/logo.svg";

// const Login = () => {
//   const handleChange = () => {};

//   return (
//      <div className="container mx-auto my-10">
//       <div className=" flex items-center font-poppins justify-center  px-4">
//       <div className="w-full max-w-3xl bg-white p-5 sm:p-20 lg:p-24 rounded-md shadow-md">
//         <div className="flex justify-center items-center mb-10 sm:mb-6">
//           <img src={logo} alt="" />
//         </div>

//         <div className="mb-5">
//           <label className="block text-base sm:text-lg font-medium text-[#3E3E3E]">
//             Email
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Email"
//             className="mt-1.5 w-full px-4 py-2.5  text-sm sm:text-base  border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="">
//           <label className="block text-base sm:text-lg font-medium text-[#3E3E3E]">Password</label>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="mt-1.5 w-full px-4 py-2.5  text-sm sm:text-base  border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button className="w-full my-8 bg-[#094C9F] text-white py-2 rounded-xl hover:bg-blue-800 transition">
//           Login
//         </button>

//         <div className="flex items-center my-8">
//           <hr className="flex-grow border-gray-300" />
//           <span className="mx-2 text-sm text-gray-500">or</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         <div className="text-center mb-4">
//           <a href="#" className="text-[#094C9F] text-base font-semibold">
//             Login with password
//           </a>
//         </div>

//         <div className="text-center mb-4">
//           <span className="text-sm font-light text-[#000000]">
//             Don’t have an account ?{" "}
//           </span>
//           <a href="/signup" className="text-[#094C9F] text-base font-semibold ">
//             Sign Up
//           </a>
//         </div>

//         <div className="text-center text-[#0B0C0D] text-sm font-normal pb-3">
//           Or login with
//         </div>

//         <div className="flex justify-center space-x-4 sm:space-x-6 pt-10">
//           <img src={facebook} alt="" className=" w-7 h-7  sm:w-10 sm:h-10"/>
//           <img src={google} alt="" className=" w-7 h-7  sm:w-10 sm:h-10" />

//           <img src={x} alt="" className=" w-7 h-7  sm:w-10 sm:h-10"/>
//         </div>
//       </div>
//     </div>
//      </div>

//   );
// };

// export default Login;

import React, { useState } from "react";
import toast from "react-hot-toast";
import { loginUser } from "../services/api/auth";
import facebook from "../assets/icons/facebook_1.svg";
import google from "../assets/icons/google.svg";
import x from "../assets/icons/ri_twitter.svg";
import logo from "../dashboard/assets/icons/logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // const handleLogin = async () => {
  //   setLoading(true);

  //   try {
  //     const data = await loginUser(email, password);
  //     console.log("Login success:", data);
  //     toast.success("Login successful!");
  //     localStorage.setItem("token", data.token);
  //     navigate("/");
  //   } catch (err) {
  //     toast.error(err || "Login failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors before login
    setErrors({});
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      console.log("Login success:", data);
      toast.success("Login successful!");
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex items-center font-poppins justify-center px-4">
        <div className="w-full max-w-3xl bg-white p-5 sm:p-20 lg:p-24 rounded-md shadow-md">
          <div className="flex justify-center items-center mb-10 sm:mb-6">
            <img src={logo} alt="Logo" />
          </div>

          {/* <div className="mb-5">
            <label className="block text-base sm:text-lg font-medium text-[#3E3E3E]">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />


          </div> */}

          <div className="mb-5">
            <label className="block text-base sm:text-lg font-medium text-[#3E3E3E]">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* <div>
            <label className="block text-base sm:text-lg font-medium text-[#3E3E3E]">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          <div>
            <label className="block text-base sm:text-lg font-medium text-[#3E3E3E]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full my-8 bg-[#094C9F] text-white py-2 rounded-xl hover:bg-blue-800 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
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
              Don’t have an account?{" "}
            </span>
            <a
              href="/signup"
              className="text-[#094C9F] text-base font-semibold"
            >
              Sign Up
            </a>
          </div>

          <div className="text-center text-[#0B0C0D] text-sm font-normal pb-3">
            Or login with
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
