import React from "react";
import linkdean from "../../assets/icons/Linkedin.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import foot_logo from "../../assets/logo/footer-logo.svg";
import headphone from "../../assets/icons/headphones-icon.svg";
import lock from "../../assets/icons/lock-icon.svg";
import credit from "../../assets/icons/credit-card-check-icon.svg";
import check from "../../assets/icons/check-icon.svg";

const contactInfo = [
  {
    icon: headphone,
    title: "Dedicated Customer Support",
    description: "From 9 AM to 9 PM",
  },
  {
    icon: check,
    title: "Expert-Certified Therapists",
    description: "Verified By Official Institutes",
  },
  {
    icon: lock,
    title: "Secure & Reliable",
    description: "Complete Data Privacy",
  },
  {
    icon: credit,
    title: "SSL Secured Payments",
    description: "Advanced security powered by SSL",
  },
];

const InfoCard = ({ icon, title, description }) => (
  <div className="flex items-center  space-x-3 bg-white rounded-full  px-4 py-2.5">
    <img src={icon} alt="" className="w-8 h-8 sm:w-6 xl:w-8" />
    <div className="flex flex-col gap-1 font-medium">
      <h4 className="font-semibold text-[#101828] text-sm">{title}</h4>
      <p className="text-xs text-[#3E3E3ECC]">{description}</p>
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="bg-[#E9F3FF] mt-16 sm:mt-24 xl:mt-32 pt-5">
      <div className="container mx-auto">
        <div className=" flex flex-col justify-center xl:justify-between items-center sm:pb-5 sm:items-start sm:flex-row sm:justify-between">
          <div>
            <img src={foot_logo} alt="" className="w-16 sm:w-14 xl:w-16" />
          </div>

          <div className="hidden sm:block">
            <ul className="space-y-2 text-[#667085] font-medium text-sm">
              <li className="text-[#3E3E3ECC] font-semibold text-base pb-3">
                Resources
              </li>
              <li>Plans</li>
              <li>Therpaist</li>
              <li>Business</li>
              <li>The Advice Room</li>
              <li>Contact Us</li>
            </ul>
          </div >
          <div className="hidden sm:block">
            <ul className="space-y-2 text-[#667085] font-medium text-sm">
              <li className="text-[#3E3E3ECC] font-semibold text-base pb-3">
                Company
              </li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li></li>
            </ul>
          </div>
          <div >
            <ul className=" pt-5 sm:pt-0 sm:space-y-2 mb-7 sm:mb-0 text-lg font-normal text-[#3E3E3E] sm:text-[#667085] text-center sm:text-start sm:font-medium sm:text-sm">
              <li className="text-[#3E3E3ECC] font-semibold text-base pb-3 hidden sm:flex">
                Contact
              </li>
              <li>+91 954857638</li>
              <li>info@vagusmindhealth@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className=" sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-5 grid-cols-4 justify-center items-center xl:gap-10 py-9 hidden lg:grid ">
          {contactInfo.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-between  border-t-4 sm:border-t-2 bordert-t-[#E4E7EC] pt-5 pb-9">
          <div className="flex gap-2">
            <img src={linkdean} alt="" className="w-5  sm:w-6" />
            <img src={Instagram} alt="" className="w-5  sm:w-6" />
            <img src={Twitter} alt="" className="w-5  sm:w-6" />
            <img src={facebook} alt="" className="w-5  sm:w-6" />
          </div>
          <div>
            <p className="text-[#3E3E3ECC] font-base font-normal">
              Copyright @2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
