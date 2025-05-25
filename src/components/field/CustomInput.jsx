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

const CustomInput = ({ label, placeholder, name, type, value, onChange, hasCountryCode }) => {
  return (
    <div className="mb-5 sm:mb-6 w-full">
      <label className="block text-xs font-medium text-[#667085]  mb-2">{label}</label>
      <div className="flex">
        {hasCountryCode && (
          <span className=" items-center px-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-700 text-sm">
            🇺🇸 +1
          </span>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-2 sm:py-3 border  text-[#98A2B3]  border-[#E2E2E2]  ${hasCountryCode ? 'rounded-r-md border-l-0' : 'rounded-md'} shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200`}
        />
      </div>
    </div>
  );
};

 export default CustomInput;
