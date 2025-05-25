import { useState, useRef, useEffect } from "react";
import downarrow from "../../../assets/icons/down-icon.svg";
const FilterButton = ({ icon, label, options = [], onSelect }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onSelect && onSelect(option);
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div className="relative font-poppins" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex  items-center gap-2 px-3 py-2 lg:px-4 lg:py-4 bg-[#f3f8ff] text-[#3E3E3E] rounded-full text-sm hover:bg-[#e5f0ff] transition"
      >
        <img src={icon} alt="" className="w-4 h-4" />
        <span className="text-sm">{selectedOption ? selectedOption : label}</span>
        <img src={downarrow} alt="" />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-48 bg-white rounded-md shadow-lg">
          <ul className="py-1 text-sm text-gray-700">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
