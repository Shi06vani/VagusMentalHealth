// // FreeConsultationButton.jsx
// import React from "react";
// import Video from "../../../assets/icons/video.svg";

// const FreeConsultationButton = ({
//   text = "Get Free Consultation",
//   onClick = () => {},
//   className = "",
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex shadow-lg shadow-[#507BB04D] items-center  text-sm lg:text-base gap-2 px-5 py-1.5 rounded-xl text-white font-semibold bg-[#094C9F] hover:bg-blue-900 transition duration-300 ${className}`}
//     >
//       {text}
//       <img src={Video} alt="" className="  w-6 h-6 lg:w-7 lg:h-7"/>{" "}
//     </button>
//   );
// };

// export default FreeConsultationButton;



import React from "react";
import Video from "../../../assets/icons/video.svg";

const FreeConsultationButton = ({
  text = "Get Free Consultation",
  phone = "919876543210", // Replace with your WhatsApp number (without +)
  message = "Hi, I would like to get a free consultation.",
  className = "",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex shadow-lg shadow-[#507BB04D] items-center text-sm lg:text-base gap-2 px-5 py-1.5 rounded-xl text-white font-semibold bg-[#094C9F] hover:bg-blue-900 transition duration-300 ${className}`}
    >
      {text}
      <img src={Video} alt="" className="w-6 h-6 lg:w-7 lg:h-7" />
    </a>
  );
};

export default FreeConsultationButton;
