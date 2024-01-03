import React from "react";

import Header from "../Components/Header/Header";
import Banner from "../Components/Featured/Banner";
import TopRated from "../Components/Featured/TopRated";
import Popular from "../Components/Featured/Popular";

const Layout = () => {
  return (
    <div className="h-full bg-hero max-[450px]:w-screen">
      <Header />
      <div className="text-2xl relative h-hero max-[450px]:w-full">
        <Banner />
        <div
          className="text-textColor top-20 right-40 absolute flex flex-col gap-5 
        max-[450px]:left-0 max-[450px]:bottom-16 max-[450px]:top-auto max-[450px]:right-auto max-[450px]:h-auto max-[450px]:overflow-scroll max-[450px]:w-full
        max-[450px]:px-4 z-50 "
        >
          <TopRated />
        </div>
      </div>
      <div className="py-16 w-full text-textColor">
        <Popular />
      </div>
    </div>
  );
};

export default Layout;
