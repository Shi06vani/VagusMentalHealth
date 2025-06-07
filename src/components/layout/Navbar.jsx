import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.svg";
import { navItems } from "../../data/navIteams";
import menu from "../../assets/icons/menu.svg";
import arrow from "../../assets/icons/right-half-arroe.svg";
import { useEffect } from "react";
import { is } from "date-fns/locale";
const Navbar = ({ openLogin }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount just in case
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="container mx-auto">
      <nav className=" font-poppins xl:px-6 py-9   ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-bold text-xl">
            <Link to="/">
              <img src={logo} alt="Logo" className="" />
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden  flex gap-4">
            {isLogin ? (
              <div
                className="text-[#3E3E3E] font-poppins text-base font-medium"
                onClick={handleLogout}
              >
                Logout
              </div>
            ) : (
              <div className="" onClick={openLogin}>
                <Link className="text-[#3E3E3E] font-poppins text-base font-medium">
                  Login
                </Link>
              </div>
            )}

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <img src={menu} className="w-6" />
              )}
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
                    className="text-sm  xl:text-[15px] font-normal text-[#3E3E3E]  flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  {openDropdown === idx && (
                    <ul
                      className="absolute left-0 top-full mt-3 pt-4 pb-4 max-h-60 overflow-y-auto shadow-lg bg-white rounded-[30px] border border-gray-200 z-10 min-w-[270px] custom-scrollbar transition-all duration-200 ease-in-out"

                      // className="absolute left-0 top-full mt-3 pt-4 pb-9  h-52 overflow-y-scroll shadow-sm bg-[#FEFEFE] rounded-[30px] border z-10 min-w-[270px] overflow-hidden"
                    >
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={sub.path}
                            className=" px-2 py-2 font-normal text-sm text-[#3E3E3E] hover:bg-gray-100 flex justify-between"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.label}
                            <img src={arrow} alt="" className="w-4" />
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
                    className="text-sm  xl:text-[15px] font-normal text-[#3E3E3E] "
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          {isLogin ? (
            <li className="hidden lg:flex" onClick={handleLogout}>
              <div className="text-sm  xl:text-[15px] font-normal text-[#3E3E3E]  list-none">
                Logout
              </div>
            </li>
          ) : (
            <li className="hidden lg:flex" onClick={openLogin}>
              <Link
                // to=""
                className="text-sm  xl:text-[15px] font-normal text-[#3E3E3E]  list-none"
              >
                Login
              </Link>
            </li>
          )}
        </div>

        {/* Mobile Menu */}

        {isMobileMenuOpen && (
          <>
            {/* Black Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40 "
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
              }}
            />

            {/* Slide-in Menu */}
            <ul
              className="fixed top-0 left-0 h-full w-[75%] sm:w-[50%] bg-white z-50 rounded-r-[30px] px-4 py-7 space-y-4 transform transition-transform duration-300 ease-in-out overflow-y-scroll"
              style={{ transform: "translateX(0)" }}
            >
              <div className="font-bold text-xl pb-4">
                <Link to="/">
                  <img src={logo} alt="Logo" className="" />
                </Link>
              </div>

              {navItems.map((item, idx) => (
                <li key={idx}>
                  {item.submenu ? (
                    <div className="relative">
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
                        <ul className="pt-4 pb-6 px-4 bg-[#FEFEFE] shadow- rounded-[30px] border mt-3 space-y-5 overflow-y-scroll">
                          {item.submenu.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={sub.path}
                                className="text-sm flex justify-between text-[#3E3E3E]"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {sub.label}
                                <img src={arrow} alt="" className="w-4" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-sm font-normal text-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}

              {isLogin ? (
                <li onClick={handleLogout}>
                  <div className="text-sm font-normal text-gray-700">
                    Logout
                  </div>
                </li>
              ) : (
                <li onClick={openLogin}>
                  <Link
                    to=""
                    className="text-sm font-normal text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* {isMobileMenuOpen && (
          <ul className="lg:hidden py-7 absolute px-2.5 rounded rounded-r-[30px] bg-white w-[80%] z-10 space-y-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                {item.submenu ? (
                  <div className="relative">
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
                      <ul className="  pt-4 pb-6 sm:w-72 px-4 bg-[#FEFEFE] shadow-md rounded-[30px] border   mt-3 space-y-1">
                        {item.submenu.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              to={sub.path}
                              className=" text-sm  flex justify-between text-[#3E3E3E] "
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {sub.label}
                              <img src={arrow} alt="" className="w-4" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-sm  xl:text-[15px] font-normal text-gray-700 "
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
                className="text-sm  xl:text-[15px] font-normal text-gray-700 "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        )} */
}
