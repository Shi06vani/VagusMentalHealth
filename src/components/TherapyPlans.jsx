
import emrold from "../assets/icons/emrald.svg"
import diamong from "../assets/icons/diamond.svg"
import ruby from "../assets/icons/ruby.svg"
import inofficevarguemenatl from "../assets/images/inoffice.svg"
import greenRight from "../assets/icons/green-right.svg"
export const FeatureList = () => {
  const features = [
    "Smart therapist matching",
    "Time-zone friendly",
    "Easy-to-switch therapists",
    "Get urgent appointments swiftly, as early as 24 hrs before",
    "Private and Safe",
    "No auto-subscription",
  ];

  return (
    <div className="bg-[#FFFFFF] font-poppins py-10 px-6 rounded-2xl shadow-xl shadow-[#63636326] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Features */}
        <div className="flex-1 ">
          <h2 className="text-xl font-normal text-[#101828] mb-2">
            Beyond Ordinary Care
          </h2>
          <p className="text-xs text-[#667085] mb-6">
            How we are redefining mental health support
          </p>
          <ul className="space-y-2">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-1 text-[#667085] text-xs">
                {/* <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5" /> */}
                <img src={greenRight} alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Comparison Chart (simple mockup) */}
        <div className="flex-1 flex justify-center items-center">
          <img src={inofficevarguemenatl} alt="" />
        </div>
      </div>
    </div>
  );
};



const TherapyPlans = () => {
  const plans = [
    {
      name: "Emerald",
      experience: "Therapists with 2–3 years of hands-on experience.",
      color: "bg-[#CEEFEC]",
      icon:emrold, // Replace with actual SVG or image if available
    },
    {
      name: "Ruby",
      experience: "Therapists with 3–5 years of hands-on experience.",
      color: "bg-[#FF525236]",
      icon:ruby, // Replace with actual SVG or image if available
    },
    {
      name: "Diamond",
      experience: "Therapists with 8–10 years of hands-on experience.",
      color: "bg-[#F3F5FF]",
      icon: diamong, // Replace with actual SVG or image if available
    },
  ];

  return (
    <div className="bg-[#FFFFFF] font-poppins pt-12 px-4 rounded-3xl shadow-xl shadow-[#63636326] ">
      <div className="">
        <h2 className="  text-[#101828] font-normal text-xl">Tailored for everyone</h2>
        <p className="text-[#667085] font-normal mt-2 text-sm">
          No matter where you are in life, our therapy plans are designed to meet your
          unique needs—offering the right support, at the right time, just for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.color} rounded-[20px] px-3 py-6 shadow-xl shadow-[#EEEEEE]  `}
          >
            <img src={plan.icon}/>
            <h3 className="text-sm font-semibold text-[#101828]">{plan.name}</h3>
            <p className="text-xs text-[#667085] mt-2">{plan.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapyPlans;
