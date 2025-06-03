// import React, { useState } from "react";
// import facebook from "../assets/icons/facebook_1.svg";
// import google from "../assets/icons/google.svg";
// import x from "../assets/icons/ri_twitter.svg";
// import logo from "../dashboard/assets/icons/logo.svg";
// import RadioGroupField from "../components/field/RadioGroupField";
// import cn from "../utils/cn";
// import { signupUser } from "../services/api/auth";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { RenderInput } from "../components/common/ui/RenderInput";

// const Signup = () => {
//   const [formErrors, setFormErrors] = useState({});

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     country: "",
//     state: "",
//     age: "",
//     gender: "",
//     serviceLookingFor: "",
//     takenTherapyBefore: "",
//   });
//   const navigate = useNavigate();

//   const serviceOptions = [
//     { label: "Teenagers 18+", value: "Teenagers 18+" },
//     { label: "Children under 18", value: "Children under 18" },
//     { label: "Adults", value: "Adults" },
//   ];

//   const handleRadioChange = (e) => {
//     setFormData({ ...formData, serviceLookingFor: e.target.value });
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const RenderLabel = ({ text, className }) => {
//     return (
//       <>
//         <label
//           className={cn(
//             "block text-base sm:text-lg font-medium text-[#3E3E3E]",
//             className
//           )}
//         >
//           {text}
//         </label>
//       </>
//     );
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const userData = {
//   //       name: formData.name,
//   //       email: formData.email,
//   //       password: formData.password,
//   //       country: formData.country,
//   //       state: formData.state,
//   //       age: formData.age,
//   //       gender: formData.gender,
//   //       serviceLookingFor: formData.serviceLookingFor,
//   //       takenTherapyBefore: formData.takenTherapyBefore,
//   //     };

//   //     const response = await signupUser(userData);
//   //     console.log(response);
//   //     toast.success(response.msg || "Signup successful!");
//   //     navigate("/login");

//   //     setFormData({
//   //       name: "",
//   //       email: "",
//   //       password: "",
//   //       country: "",
//   //       state: "",
//   //       age: "",
//   //       gender: "",
//   //       serviceLookingFor: "",
//   //       takenTherapyBefore: "",
//   //     });
//   //   } catch (error) {
//   //     toast.error(error.message || "Signup failed. Please try again.");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const errors = {};

//     if (!formData.name.trim()) errors.name = "Name is required";
//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Invalid email format";
//     }
//     if (!formData.password.trim()) errors.password = "Password is required";
//     if (!formData.country.trim()) errors.country = "Country is required";
//     if (!formData.state.trim()) errors.state = "State is required";
//     if (!formData.age.trim()) {
//       errors.age = "Age is required";
//     } else if (isNaN(formData.age)) {
//       errors.age = "Age must be a number";
//     }
//     if (!formData.gender) errors.gender = "Gender is required";
//     if (!formData.serviceLookingFor)
//       errors.serviceLookingFor = "Please select a service";
//     if (formData.takenTherapyBefore === "")
//       errors.takenTherapyBefore = "Please choose an option";

//     setFormErrors(errors);

//     if (Object.keys(errors).length > 0) {
//       return; // Stop if there are validation errors
//     }

//     try {
//       const userData = {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         country: formData.country,
//         state: formData.state,
//         age: formData.age,
//         gender: formData.gender,
//         serviceLookingFor: formData.serviceLookingFor,
//         takenTherapyBefore: formData.takenTherapyBefore,
//       };

//       const response = await signupUser(userData);
//       console.log(response);
//       toast.success(response.msg || "Signup successful!");
//       navigate("/login");

//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         country: "",
//         state: "",
//         age: "",
//         gender: "",
//         serviceLookingFor: "",
//         takenTherapyBefore: "",
//       });
//       setFormErrors({});
//     } catch (error) {
//       toast.error(error.message || "Signup failed. Please try again.");
//     }
//   };

//   return (
//     <div className="container mx-auto my-10">
//       <div className=" flex items-center font-poppins justify-center  px-4">
//         <div className="w-full max-w-3xl bg-white p-5 sm:p-20 lg:p-24 rounded-md shadow-md">
//           <div className="flex justify-center items-center mb-10 sm:mb-6">
//             <img src={logo} alt="" />
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-5">
//               {/* Name */}
//               <div>
//                 <RenderLabel text="Name" />

//                 <input
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your Name"
//                   className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {formErrors.name && (
//                   <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <RenderLabel text="Email" />

//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                   className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <RenderLabel text="Password" />

//                 <input
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter Password"
//                   autoComplete="current-password"
//                   className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Country */}
//               <div>
//                 <RenderLabel text="Country" />
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   placeholder="Enter Country"
//                   className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* State */}
//               <div>
//                 <RenderLabel text="State" />
//                 <input
//                   name="state"
//                   type="text"
//                   value={formData.state}
//                   onChange={handleChange}
//                   placeholder="Enter State"
//                   className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Age */}
//               <div>
//                 <RenderLabel text="Age" />
//                 <input
//                   name="age"
//                   type="text"
//                   value={formData.age}
//                   onChange={handleChange}
//                   placeholder="Enter Age"
//                   className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Gender */}
//               <div>
//                 <RenderLabel text="Gender" />
//                 <select
//                   className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                 >
//                   <option value="" disabled>
//                     Select Gender
//                   </option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                   <option value="PreferNotToSay">Prefer not to say</option>
//                 </select>
//               </div>

//               {/* Service Looking For */}
//               <div>
//                 <RenderLabel text="Service Looking For" />
//                 <RadioGroupField
//                   name="serviceLookingFor"
//                   options={serviceOptions}
//                   value={formData.serviceLookingFor}
//                   onChange={handleRadioChange}
//                 />
//               </div>

//               {/* Taken Therapy Before */}
//               <div>
//                 <RenderLabel text="Taken Therapy Before" />
//                 <RadioGroupField
//                   label="Have you taken therapy before?"
//                   name="takenTherapyBefore"
//                   value={
//                     formData.takenTherapyBefore
//                       ? formData.takenTherapyBefore.toString()
//                       : ""
//                   }
//                   onChange={handleChange}
//                   options={[
//                     { label: "Yes", value: "true" },
//                     { label: "No", value: "false" },
//                   ]}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full my-8 bg-[#094C9F] text-white py-2 rounded-xl hover:bg-blue-800 transition"
//             >
//               Signup
//             </button>
//           </form>

//           <div className="flex items-center my-8">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-2 text-sm text-gray-500">or</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           <div className="text-center mb-4">
//             <a href="#" className="text-[#094C9F] text-base font-semibold">
//               Signup with Email
//             </a>
//           </div>

//           <div className="text-center mb-4">
//             <span className="text-sm font-light text-[#000000]">
//               Already have an account ?{" "}
//             </span>
//             <a
//               href="/login"
//               className="text-[#094C9F] text-base font-semibold "
//             >
//               Login
//             </a>
//           </div>

//           <div className="flex items-center my-8  mx-28">
//             <hr className="flex-grow border-[#B5B5B5] " />
//             <div className="text-center bg-white absolut text-[#0B0C0D] text-sm px-2 font-normal pb-0">
//               Or signup with
//             </div>
//             <hr className="flex-grow  border-[#B5B5B5]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import facebook from "../assets/icons/facebook_1.svg";
import google from "../assets/icons/google.svg";
import x from "../assets/icons/ri_twitter.svg";
import logo from "../dashboard/assets/icons/logo.svg";
import RadioGroupField from "../components/field/RadioGroupField";
import cn from "../utils/cn";
import validator from "validator";
import { signupUser } from "../services/api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RenderInput } from "../components/common/ui/RenderInput";

const Signup = () => {
  const [formErrors, setFormErrors] = useState({});

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

  // const handleRadioChange = (e) => {
  //   setFormData({ ...formData, serviceLookingFor: e.target.value });
  // };

  // const handleChange = (e) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the field as user types
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // or use: undefined
      }));
    }
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userData = {
  //       name: formData.name,
  //       email: formData.email,
  //       password: formData.password,
  //       country: formData.country,
  //       state: formData.state,
  //       age: formData.age,
  //       gender: formData.gender,
  //       serviceLookingFor: formData.serviceLookingFor,
  //       takenTherapyBefore: formData.takenTherapyBefore,
  //     };

  //     const response = await signupUser(userData);
  //     console.log(response);
  //     toast.success(response.msg || "Signup successful!");
  //     navigate("/login");

  //     setFormData({
  //       name: "",
  //       email: "",
  //       password: "",
  //       country: "",
  //       state: "",
  //       age: "",
  //       gender: "",
  //       serviceLookingFor: "",
  //       takenTherapyBefore: "",
  //     });
  //   } catch (error) {
  //     toast.error(error.message || "Signup failed. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allowedTLDs = ["com", "net", "org", "in", "edu", "gov", "co"];
    const email = formData.email.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";

    if (!email) {
      errors.email = "Email is required";
    } else if (!regex.test(email)) {
      errors.email = "Invalid email format";
    } else {
      const tld = email.split(".").pop().toLowerCase();
      if (!allowedTLDs.includes(tld)) {
        errors.email = "Unsupported email domain";
      }
    }
    if (!formData.password.trim()) errors.password = "Password is required";
    if (!formData.country.trim()) errors.country = "Country is required";
    if (!formData.state.trim()) errors.state = "State is required";
    if (!formData.age.trim()) {
      errors.age = "Age is required";
    } else if (isNaN(formData.age)) {
      errors.age = "Age must be a number";
    }
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.serviceLookingFor)
      errors.serviceLookingFor = "Please select a service";
    if (formData.takenTherapyBefore === "")
      errors.takenTherapyBefore = "Please choose an option";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Stop if there are validation errors
    }

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
      console.log(response);
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
      setFormErrors({});
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

                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.name && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <RenderLabel text="Email" />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
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
                  autoComplete="current-password"
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.password}
                  </p>
                )}
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
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.country && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.country}
                  </p>
                )}
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
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.state && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.state}
                  </p>
                )}
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
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.age && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.age}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <RenderLabel text="Gender" />
                <select
                  className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="PreferNotToSay">Prefer not to say</option>
                </select>
                {formErrors.gender && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.gender}
                  </p>
                )}
              </div>

              {/* Service Looking For */}
              <div>
                <RenderLabel text="Service Looking For" />
                <RadioGroupField
                  name="serviceLookingFor"
                  options={serviceOptions}
                  value={formData.serviceLookingFor}
                  onChange={handleRadioChange}
                />
                {formErrors.serviceLookingFor && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.serviceLookingFor}
                  </p>
                )}
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
                />
                {formErrors.takenTherapyBefore && (
                  <p className="text-red-600 text-sm mt-1">
                    {formErrors.takenTherapyBefore}
                  </p>
                )}
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
            <a
              href="/login"
              className="text-[#094C9F] text-base font-semibold "
            >
              Login
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
