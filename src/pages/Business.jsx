import React from "react";
import BusinessBanner from "../components/sections/business/BusinessBanner";
import BusinessTrustedBy from "../components/sections/business/BusinessTrustedBy";
import icon1 from "../assets/icons/productivityicon1.svg";
import icon2 from "../assets/icons/productivityicon2.svg";
import icon3 from "../assets/icons/productivityicon3.svg";
import BookACallForm from "../components/sections/business/BookACallForm";
import CeoCard from "../components/sections/business/CeoCard";
import FAQAccordion from "../components/common/ui/FAQAccordion";
import { businessFaqsData } from "../data/faqs";
import downArrow from "../assets/icons/downarrow.svg";
import HelpBanner from "../components/common/ui/HelpBanner";
import needhelp from "../assets/images/need help.jpg";
import arrow_right from "../assets/icons/arrow-right-Bold.svg";
import ScrollFadeUp from "../components/animations/ScrollFadeUp";

const features = [
  {
    icon: icon1, // Replace with your actual path or imported component
    title: "Work–life balance initiatives",
  },
  {
    icon: icon2,
    title: "Personalized productivity strategies",
  },
  {
    icon: icon3,
    title: "Mental well-being support",
  },
];

const Business = () => {
  return (
    <div className="">
      <ScrollFadeUp>
        <BusinessBanner />
      </ScrollFadeUp>

      <div className="pt-7">
        <ScrollFadeUp>
          <BusinessTrustedBy />
        </ScrollFadeUp>
      </div>
      <div className="container mx-auto">
        <ScrollFadeUp>
          <div className="flex flex-col justify-center items-center  my-20 sm:my-24 lg:my-28">
            <p className=" text-[22px] sm:text-2xl text-center  lg:text-3xl font-medium font-poppins">
              How can we improve the productivity of your employees?
            </p>

            <div className="grid grid-cols-1  sm:grid-cols-3 items-center justify-center gap-12 lg:gap-20 mt-10 lg:mt-14">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center "
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 mb-2"
                  />
                  <p className="text-base text-[#3E3E3E] font-medium">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeUp>
      </div>

      <div className="container mx-auto">
        <ScrollFadeUp>
          <BookACallForm />
        </ScrollFadeUp>
      </div>
      <div className="container mx-auto">
        <ScrollFadeUp>
          <CeoCard />
        </ScrollFadeUp>
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-14  xl:mx-32 sm:py-8">
          <ScrollFadeUp>
            <FAQAccordion data={businessFaqsData} icon={downArrow} />
          </ScrollFadeUp>
        </div>
      </div>
      <div>
        <ScrollFadeUp>
          <HelpBanner
            title="Need Help Choosing?"
            description="Connect with our team and they’ll guide you to the right therapist and support your journey."
            buttonText="Chat on Whatsapp"
            buttonIcon={arrow_right}
            backgroundImage={needhelp}
            onButtonClick={() => {
              window.open("https://wa.me/91954857638", "_blank");
            }}
          />
        </ScrollFadeUp>
      </div>
    </div>
  );
};

export default Business;
