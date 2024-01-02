import React, { useState } from "react";
import { Movies } from "../../Data/MovieData";
// import PopularCard from "../Cards/PopularCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";

const Popular = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  return (
    <div className="py-16 text-textColor">
      <h3 className="text-textColor text-3xl  font-semibold">Popular Movies</h3>
      <div className="mt-14 ">
        <Swiper
          navigation={{ nextEl, prevEl }}
          // direction="horizontal"
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={(Navigation, Autoplay)}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-popular w-25  rounded-3xl border border-opacity-45 border-textColorS p-3 overflow-hidden">
                <img
                  src={`/img/${movie.titleImage}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-3xl object-center"
                />
                <div className="absolute top-0 left-0 bg-red-500 z-30 h-full"></div>
                <Link className="absolute h-full w-full top-0 p-6 flex flex-col justify-between">
                  <div className="text-3xl font-semibold flex flex-col">
                    <h4 className="text-right">HD</h4>
                    <h3>{movie.name}</h3>
                  </div>
                  <ul className="text-2xl">
                    <li>Genre: Fantasy</li>
                    <li>Premiere: July 24, 2019</li>
                    <li>Director</li>
                    <li>Year: {movie.year}</li>
                    <li className="mt-5">Rating</li>
                  </ul>
                </Link>
              </div>
            </SwiperSlide>
            // <PopularCard key={index} movie={movie} />
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
