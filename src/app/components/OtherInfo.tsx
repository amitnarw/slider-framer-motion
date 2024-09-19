import { motion } from "framer-motion";
import React from "react";
import { Poppins } from "next/font/google";

const item = {
  hidden: {
    y: "100%",
    trasition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const OtherInfo = ({ data }: any) => {
  return (
    <motion.div initial="hidden" animate={"visible"} className="flex flex-col">
      <AnimateText
        className={`spacing overflow-hidden text-[#D5D5D6] text-lg ${poppins.className}`}
        data={data?.location}
      />
      <AnimateText
        className="my-1 text-3xl font-semibold md:my-3 md:text-8xl md:leading-[100px]"
        data={data?.title}
      />
      <AnimateText
        className={`text-md text-[#D5D5D6] font-light ${poppins.className}`}
        data={data?.description}
      />
    </motion.div>
  );
};

export default OtherInfo;

const AnimateText = ({ data, className }: any) => {
  return (
    <span style={{ overflow: "hidden", display: "inline-block" }}>
      <motion.p className={`${className}`} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};
