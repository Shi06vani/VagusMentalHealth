// import React from "react";
// import search from "../../assets/icons/search.svg";

// const SearchInput = () => {
//   return (
//     <div className="mx-10 sm:mx-0">
//       <div className="relative font-poppins w-full sm:max-w-md mx-auto ">
//         <input
//           type="text"
//           placeholder="Search for any topic"
//           className="w-full py-2  sm:py-2.5 pl-10 sm:pr-4 text-sm rounded-full bg-white/40 backdrop-blur-md text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-white transition"
//         />
//         <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 text-lg">
//           <img src={search} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchInput;

import React from "react";
import search from "../../assets/icons/search.svg";
import cn from "../../utils/cn";

const SearchInput = ({
  placeholder = "Search for any topic",
  inputClassName = "",
  containerClassName = "",
  icon = search,
  iconColor = "white",
  ...props
}) => {
  return (
    <div className={cn("mx-8 sm:mx-0", containerClassName)}>
      <div className="relative font-poppins w-full sm:max-w-md mx-auto">
        <input
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full py-1.5 px-1.5 sm:py-2.5 pl-10 sm:pr-4 text-sm rounded-full bg-white/40 backdrop-blur-md text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-white transition",
            inputClassName
          )}
          {...props}
        />
        <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-white/70 text-lg`}>
          <img src={icon} alt="search" className={`text-[${iconColor}]`} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
