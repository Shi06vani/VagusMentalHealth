import React from "react";
import state1 from "../../../assets/images/stats1.png";
import state2 from "../../../assets/images/stats2.png";
import state3 from "../../../assets/images/stats3.png";
import state4 from "../../../assets/images/stats4.png";
import state5 from "../../../assets/images/stats5.png";
import state6 from "../../../assets/images/stats6.png";
import state7 from "../../../assets/images/stats7.png";
import state8 from "../../../assets/images/stats8.png";
import state9 from "../../../assets/images/stats9.png";
import AutoSlider from "../../common/ui/AutoSlider";
const BusinessTrustedBy = () => {
  const statsImages = [
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    state9,
  ];
  return (
    <div className="  ">
      <p className="text-center text-[#667085] font-normal text-lg pb-7 pt-9">
        Internationally certified specialists from
      </p>
      <div className="xl:min-h-[120px] w-full">
        <AutoSlider
          className=""
          slidesToShow={7}
          autoplay={true}
          dots={false}
          data={statsImages}
          renderItem={(image, index) => (
            <div className="flex justify-center items-start xl:p-4 ">
              <img
                src={image}
                alt={`Stats ${index + 1}`}
                className="  object-contain  xl:mx-auto"
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default BusinessTrustedBy;
