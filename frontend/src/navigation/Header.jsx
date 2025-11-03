import React, { useEffect, useState } from "react";
import { navigationData } from "../assets/ConstantData";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isBg, setIsBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsBg(true);
      } else {
        setIsBg(false);
      }
    };

    // event listener add karo
    window.addEventListener("scroll", handleScroll);

    // cleanup function (jab component unmount ho)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={`fixed z-20 w-full top-0 ${isBg && 'bg-[var(--light-primary-color)]'}`}>
      <div className="">
        <div className="container mx-auto">
          <div className="flex justify-between items-center w-full px-3">
            <ul className="hidden lg:flex justify-center items-center gap-5 ">
              {navigationData.map((nav, index) => {
                return (
                  <li
                    key={index}
                    className="bg-[#F1E5D8] py-1 px-3 rounded-full"
                  >
                    <NavLink
                      to={nav.link}
                      className="flex justify-center items-center gap-2.5 text-[var(--text-color)] font-[500]"
                    >
                      <span>{nav.text}</span>
                      <img src={nav.icon} className="h-6 w-6 object-contain" alt="" />
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <NavLink to="/">
              <img src="/assets/images/home/logo.png" alt="" />
            </NavLink>

            <Button
              className="py-1 hidden lg:flex px-3 bg-[var(--text-color)] text-[var(--btn-text-color)] rounded-full"
              text="Nehmen Sie Kontakt auf"
              img="/assets/images/home/button-img.svg"
            />
            <IoMenu
              onClick={() => setOpenModal(!openModal)}
              className="text-4xl text-[var(--text-color)] font-[600] lg:hidden block fixed z-20 right-0"
            />
          </div>
        </div>
      </div>

      <div
        className={
          openModal
            ? "h-[100vh] w-[100%] bg-[#F1E5D8] absolute top-0 right-0 transform transition-all duration-300 translate-x-[0%] flex flex-col justify-start items-center"
            : "h-[100vh] w-[100%] bg-[#F1E5D8] absolute top-0 right-0 transform transition-all duration-300 translate-x-[100%] flex flex-col justify-start items-center"
        }
      >
        <ul className="flex flex-col justify-center items-center gap-5 mt-[100px]">
          {navigationData.map((nav, index) => {
            return (
              <li
              onClick={() => setOpenModal(false)} 
              key={index} className="bg-[#c9b9a9] py-1 px-3 rounded-full">
                <NavLink
                  to={nav.link}
                  className="flex justify-center items-center gap-2.5 text-[var(--text-color)] font-[500]"
                >
                  <span>{nav.text}</span>
                  <img src={nav.icon} alt="" />
                </NavLink>
              </li>
            );
          })}
        </ul>

        <Button
          className="py-2 lg:flex px-3 bg-[var(--text-color)] text-[var(--btn-text-color)] rounded-full my-5"
          text="Get in touch"
          img="/assets/images/home/touch-img.png"
        />
      </div>
    </div>
  );
};

export default Header;
