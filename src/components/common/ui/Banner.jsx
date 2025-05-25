import React from "react";

const Banner = ({
  backgroundImage,
  heading = "Advice Room",
  description,
  children,
}) => {
  return (
    <div
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl xl:text-[38px] font-semibold mb-4 font-playfair">
            {heading}
          </h1>
          {description && (
            <p className="font-poppins text-base md:text-lg max-w-2xl font-normal mx-auto mb-6">
              {description}
            </p>
          )}

          {/* Optional Children (e.g., SearchInput, Buttons, etc.) */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
