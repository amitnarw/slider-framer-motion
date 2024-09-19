"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage from "./components/BackgroundImage";
import Header from "./components/Header";
import SliderInfo from "./components/SliderInfo";
import Slides from "./components/Slides";
import Controls from "./components/Controls";

const MovingScreen = () => {
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });
  return (
    <main className="relative min-h-screen select-none overflow-hidden text-white">
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          {/* Header section */}
          <Header />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            {/* Slider left section content */}
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-end md:px-10 pb-52">
              <SliderInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>

            {/* Slider right carousel content */}
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-end md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

const sliderData = [
  {
    img: "/1.jpg",
    location: "India",
    description:
      "A close-up view of ice and water reveals intricate patterns and textures, with crystalline formations shimmering against the gentle ripples of the liquid beneath, creating a captivating interplay of transparency and reflection.",
    title: "ICE AND WATER",
  },
  {
    img: "/2.jpg",
    location: "Maldives",
    description:
      "From a bird's-eye view, the Maldives is a stunning chain of over 1,000 coral islands, characterized by crystal-clear turquoise waters, vibrant coral reefs, and lush green vegetation.",
    title: "BIRD'S EYE-VIEW",
  },
  {
    img: "/3.jpg",
    location: "Nepal",
    description:
      "The majestic peak loomed shrouded in mist, as if nature itself had wrapped it in a soft, mysterious embrace.",
    title: "MIST ENSHROUDED",
  },
  {
    img: "/4.jpg",
    location: "Australia",
    description:
      "A man in a white dress shirt sits on a rock near lush green trees, soaking in the breathtaking view from the edge of a cliff on a sunny day.",
    title: "ENJOYING THE VIEW",
  },
  {
    img: "/5.jpg",
    location: "Canada",
    description:
      "A bunch of stones on the rocks in Canada showcases the raw beauty of the landscape, with rugged formations and vibrant natural colors set against serene lakes or sweeping coastlines.",
    title: "ON THE ROCKS",
  },
  {
    img: "/6.jpg",
    location: "Georgia",
    description:
      "standing in front of this amazing view, thinking about the life that was waiting for me back in capital. Suddenly, I had a very strong desire to talk with the fog. Loudly.",
    title: "GREENERY IN FOG",
  },
];

const initData = sliderData[0];

export default MovingScreen;
