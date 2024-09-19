import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const SliderCard = ({ data }: any) => {
  return (
    <motion.div
      className="relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-[50vh] md:min-w-[300px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={data.img}
        alt="traistion image"
        src={data.img}
        className="absolute h-full w-full rounded-2xl object-cover brightness-75"
      />
      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div
            layout
            className=",b-2 h-[2px] w-3 rounded-full bg-white"
          ></motion.div>
          <motion.p
            layoutId={data.location}
            className={`text-md text-white/80 my-1 ${poppins.className}`}
          >
            {data.location}
          </motion.p>
          <motion.h1
            layoutId={data.title}
            className="text-2xl leading-6 text-white"
          >
            {data.title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SliderCard;
