"use client";

import React from "react";
import styles from "./home.module.css";

const HomeComponent: React.FC = () => {
  return (
    <div className="flex flex-col h-screen md:h-[80vh] z-10 ">
      <div className={`absolute inset-0 z-0 `}>
        <video
          autoPlay
          muted
          loop
          className="w-full h-screen object-cover md:object-cover    md:h-[700px] lg:h-[900px]"
        >
          <source src="/videos/hiking.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex flex-col h-screen  items-center justify-center mt-60 md:mt-none  md:justify-start  lg:mt-none   flex-grow   text-white">
        <h1
          className={` font-cyBold tracking-tight text-4xl px-4 text-center sm:mb-10 md:text-6xl  lg:text-6xl uppercase `}
        >
          Made for Adventurers.
        </h1>
        <p
          className={` text-sm leading-4 text-center px-10 md:px-20 md:text-lg md-leading-8 lg:mb-10 font-suisse `}
        >
          Enjoy being part of the nature with our collection of outdoor gear.
        </p>
        <hr className=" h-[1px] z-10 mx-auto w-3/4 bg-whiteborder-white pb-[2rem]"></hr>
        <div className="mt-4 mb-20 flex items-center justify-center gap-x-6 lg:mb-32">
          <a
            href="/store"
            className={`rounded-md bg-darkMustard text-md px-2 py-1 md:px-4 md:py-3 md:text-xl font-suisse  text-white `}
          >
            Shop Now
          </a>
          <a href="/about" className="text-md font-suisse leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
