/* eslint-disable @next/next/no-img-element */
import HomeComponent from "@/components/HomeComponent/HomeComponent";
import React from "react";
import { CarouselComponent } from "@/components/Carousel/CarouselComponent";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeComponent />

      <div className="py-[5rem] z-10 bg-white  w-full ">
        <h2 className="text-3xl font-cyBold uppercase text-darkMustard text-center pb-[2rem]">
          Featured Products
        </h2>

        <CarouselComponent />
      </div>
    </div>
  );
};

export default Home;
