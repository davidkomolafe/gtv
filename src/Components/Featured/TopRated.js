import React from "react";
import TrendsCard from "../Cards/TrendsCard";
import { Movies } from "../../Data/MovieData";

const TopRated = () => {
  return (
    <div>
      <h3 className="text-center max-[450px]:hidden ">Top Trends</h3>
      <div className="flex flex-col  gap-7 max-[450px]:flex-row max-[450px]:w-70 max-[450px]:gap-4 max-[450px]:no-scrollbar">
        {Movies.slice(0, 3).map((movie, index) => (
          <TrendsCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
