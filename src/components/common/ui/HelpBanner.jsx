import React from "react";

const HelpBanner = ({
  title,
  description,
  buttonText,
  backgroundImage,
  buttonIcon,
  onButtonClick,
}) => {
  return (
    <div className="container mx-auto mt-20 lg:mt-28">
      <div
        className="relative font-poppins lg:mx-20 xl:mx-0 flex justify-center items-center rounded-[20px] overflow-hidden h-[233px] lg:h-[300px] xl:h-[351px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-[23px] lg:text-3xl xl:text-4xl font-normal mb-2 xl:mb-3">
            {title}
          </h2>
          <div className="flex justify-center items-center">
            <p className="text-sm lg:text-base font-normal mb-4 sm:mb-6 sm:px-20 lg:w-[70%]">
              {description}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={onButtonClick}
              className="font-semibold text-lg xl:text-xl text-white flex items-center gap-2"
            >
              {buttonText}
              {buttonIcon && (
                <span>
                  <img src={buttonIcon} alt="icon" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpBanner;
