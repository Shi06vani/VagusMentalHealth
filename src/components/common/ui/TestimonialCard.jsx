import React from "react";

const TestimonialCard = ({ rating, text, name, role, image }) => {
  return (
    <div className="bg-white p-4 sm:p-6 border rounded-3xl shadow-lg  max-w-lg w-full h-[280px] flex flex-col justify-between">
      <div>
        {/* Rating Stars */}
        <div className="flex mb-3">
          {[...Array(rating)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.287 3.943c.3.921-.755 1.688-1.538 1.118l-3.36-2.443a1 1 0 00-1.175 0l-3.36 2.443c-.783.57-1.838-.197-1.538-1.118l1.287-3.943a1 1 0 00-.364-1.118L2.075 9.37c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.943z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Text (ellipsis after 3 lines) */}
        <p className="text-[#3E3E3E] text-sm xl:text-base font-normal leading-relaxed line-clamp-4">
          {text}
        </p>
      </div>

      {/* Profile at bottom */}
      <div className="flex items-center gap-4 mt-6">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-[#3E3E3E]">{name}</p>
          <p className="text-[#3E3E3ECC] font-normal text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};



export default TestimonialCard;
