import React, { useEffect } from "react";

const AuthModal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center py-2 px-2 sm:px-20">
      {/* Modal content wrapper */}
      <div className="relative bg-white rounded-xl  w-full  max-h-[100%] lg:max-w-3xl sm:p-10 lg:p-14 shadow-lg scrollbar-hide  overflow-y-scroll ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-7 text-gray-600 text-3xl font-bold  "
        >
          &times;
        </button>

        {/* Render passed content (Login / Signup) */}
        {children}
      </div>
    </div>
  );
};

export default AuthModal;
