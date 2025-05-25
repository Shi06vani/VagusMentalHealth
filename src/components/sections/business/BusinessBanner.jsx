import React from "react";
import busniessbanner from "../../../assets/images/businessimage.jpg";

const BusinessBanner = () => {
  return (
    <div>
      <div className="relative w-full  h-[400px] sm:h-[500px] lg:h-screen flex items-center justify-start">
        {/* Flipped Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
          style={{ backgroundImage: `url(${busniessbanner})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl  text-[#FEFEFE] text-left px-4 sm:px-16  xl:px-24">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 font-playfair ">
              Transform your organization <br /> with modern mental health{" "}
              <br></br> support.
            </h1>
            <p className="text-sm font-poppins md:text-base  sm:w-[450px] lg:w-full max-w-xl">
              Empower your organization with comprehensive mental health support
              that enhances employee well-being and productivity. Foster a
              healthier, more engaged workforce with expert care and
              personalized solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;
