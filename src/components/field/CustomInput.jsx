// import React from "react";

// const CustomInput = ({
//   label,
//   placeholder,
//   value,
//   onChange,
//   name,
//   type = "text",
// }) => {
//   return (
//     <div className="w-full">
//       {label && (
//         <label className="block text-xs font-medium text-[#667085] mb-2">
//           {label}
//         </label>
//       )}
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full px-4 py-3  font-normal bg-[#FAFAFA] border text-[#98A2B3]  border-[#E2E2E2] rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-200"
//       />
//     </div>
//   );
// };

// export default CustomInput;
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
const CustomInput = ({
  label,
  placeholder,
  name,
  type,
  value,
  onChange,
  hasCountryCode,
}) => {
  const [phone, setPhone] = useState("");
  return (
    <div className="mb-5 sm:mb-6 w-full">
      <label className="block text-xs font-medium text-[#667085]  mb-2">
        {label}
      </label>
      <div className="flex gap-0.4  h-full">
        {hasCountryCode && (
          <span className=" items-center object-contain    w-44 sm:w-28 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-700 text-sm">
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "100%",
                height:"50px",
                
                
              }}
              dropdownStyle={{ zIndex: 1000 }} // to make sure dropdown overlays
            />
          </span>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-2 sm:py-3 border  text-[#98A2B3]  border-[#E2E2E2]  ${
            hasCountryCode ? "rounded-r-md border-l-0" : "rounded-md"
          } shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200`}
        />
      </div>
    </div>
  );
};

export default CustomInput;
