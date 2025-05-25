import React, { useState } from "react";
import CustomInput from "../../field/CustomInput";
const formFields = [
  { label: "Name", placeholder: "Name", name: "name", type: "text" },
  {
    label: "Email",
    placeholder: "example@mail.com",
    name: "email",
    type: "email",
  },
  {
    label: "Phone number",
    placeholder: "123456789",
    name: "phone",
    type: "tel",
    hasCountryCode: true,
  },
  {
    label: "Company",
    placeholder: "Vagus Mind Health",
    name: "company",
    type: "text",
  },
];

const BookACallForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="sm:mx-6 lg:mx-10 xl:mx-20">
      <div className="bg-[#E9F3FF] rounded-[20px] px-6 py-14 sm:px-12  xl:px-20 lg:py-16">
        <h1 className="text-[#3E3E3E]  font-medium text-2xl  lg:text-3xl pb-5 lg:mb-8 ">
          Better mental health leads to higher employee productivity
        </h1>
        <div className="">
          {formFields.map((field) => (
            <CustomInput
              key={field.name}
              label={field.label}
              placeholder={field.placeholder}
              name={field.name}
              type={field.type}
              hasCountryCode={field.hasCountryCode}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>
        <div>
            <button className="bg-[#094C9F] rounded-lg px-6 py-2 text-white font-semibold text-sm">Book a Call</button>
        </div>
      </div>
    </div>
  );
};

export default BookACallForm;
