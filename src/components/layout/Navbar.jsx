import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.svg";
import { navItems } from "../../data/navIteams";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const navItems = [
  //   {
  //     label: "Specific Disorder",
  //     submenu: [
  //       { label: "Anxiety", path: "/disorder/anxiety" },
  //       { label: "Depression", path: "/disorder/depression" },
  //     ],
  //   },
  //   {
  //     label: "Life and Work",
  //     submenu: [
  //       { label: "Work Stress", path: "/life/work-stress" },
  //       { label: "Burnout", path: "/life/burnout" },
  //     ],
  //   },
  //   {
  //     label: "Relationship",
  //     submenu: [
  //       { label: "Marriage", path: "/relationship/marriage" },
  //       { label: "Family", path: "/relationship/family" },
  //     ],
  //   },
  //   { label: "Therapist", path: "/therapist" },
  //   { label: "Plans", path: "/plans" },
  //   { label: "Business", path: "/business" },
  //   { label: "The Advice Room", path: "/advice" },
  // ];

  return (
    <nav className="bg-white  lg:px-6 py-5  mt-9">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl">
          <Link to="/">
            <img src={logo} alt="Logo" className="" />
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, idx) =>
            item.submenu ? (
              <li key={idx} className="relative group">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="text-sm font-normal text-[#3E3E3E]  flex items-center gap-1"
                >
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                {openDropdown === idx && (
                  <ul className="absolute left-0 top-full mt-6 bg-white border rounded z-10 min-w-[150px]">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="text-sm font-normal text-gray-700 "
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <li className="hidden lg:flex">
          <Link
            to="/login"
            className="text-sm font-normal text-gray-700  list-none"
          >
            Login
          </Link>
        </li>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden mt-4 space-y-2">
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    className="w-full text-left text-sm font-normal text-[#3E3E3E] flex items-center justify-between"
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  {openDropdown === idx && (
                    <ul className="ml-4 mt-4 space-y-1">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={sub.path}
                            className="block text-sm text-gray-700 hover:underline"
                            onClick={() => {
                              setOpenDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="block text-sm font-normal text-gray-700 "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="text-sm font-normal text-gray-700 "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
