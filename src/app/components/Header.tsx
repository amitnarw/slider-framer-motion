import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const Header = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-sm font-medium">
      <Head>
        <title>NExt JS Slider</title>
      </Head>

      {/* Logo section */}
      <div className="flex items-center gap-2 text-xl font-medium tracking-[4px]">
        <IoIosGlobe className="text-4xl" />
        Travel
      </div>

      {/*Menu section */}
      <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={`${
                active === index
                  ? "border-b-2 border-b-yellow-500 font-bold"
                  : "font-light"
              } inline-block cursor-pointer border-b-yellow-500 text-lg transition duration-300 ease-in-out hover:border-b-2 hover:text-white ${
                poppins.className
              }`}
            >
              {menu}
            </motion.li>
          );
        })}
        <div className="flex items-center gap-6">
          <IoMdSearch className="text-lg" />
          <IoMdPerson className="text-lg" />
        </div>
      </ul>
    </div>
  );
};

export default Header;

const menus = [
  "Home",
  "Holidays",
  "Destinations",
  "Flights",
  "Offers",
  "Contact",
];
