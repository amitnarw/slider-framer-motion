import React from "react";
import SliderCard from "./SliderCard";

const Slides = ({ data }: any) => {
  return (
    <div className="flex w-full gap-6">
      {data.map((data: any) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
};

export default Slides;
