import React from "react";
import { motion } from "framer-motion";

const BackgroundImage = ({ transitionData, currentSlideData }: any) => {
  return (
    <>
      {/* Background Trasition animation */}
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="transition img"
          transition={{
            opacity: { duration: 1, ease: [0.5, 0, 0.2, 1] }, // Increased duration and adjusted easing
            layout: { duration: 1 }, // Match the duration for a cohesive effect
          }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src={transitionData.img}
        />
      )}

      {/* Background Image */}
      <motion.img
        alt="current image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
};

export default BackgroundImage;
