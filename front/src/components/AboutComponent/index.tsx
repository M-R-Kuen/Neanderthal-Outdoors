/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import styles from "./about.module.css";
import Image from "next/image";

const AboutComponent: React.FC = () => {
  const isMdScreen = useMediaQuery({ minWidth: 720 });

  return (
    <ParallaxProvider>
      <div className="absolute flex flex-col min-h-screen align-center bg-black z-10 w-full">
        <Parallax className="absolute  inset-0 z-0 mt-10 ">
          <div className="absolute  inset-0 overflow-hidden ">
            <img
              src="./images/sol.jpg"
              alt="photo"
              className="w-full h-full object-cover md:object-cover   "
            ></img>
          </div>
        </Parallax>

        <Parallax className="absolute inset-0 z-0" translateY={[80, -40]}>
          <Image
            src="/images/backp.png"
            alt="laptop"
            width={2000}
            height={2000}
            className="absolute top-0 left-0 w-1/2 h-auto  md:h-[400px] md:w-[300px] "
            style={{
              filter: "brightness(0.8) opacity(0.8)",
            }}
          />
        </Parallax>
        <Parallax className="absolute inset-0 z-3" translateY={[170, -20]}>
          <img
            src="/images/lantern.png"
            alt="lens"
            className="absolute top-0 left-0 w-1/2 h-auto  md:h-[300px] md:w-[200px] "
            style={{
              filter: "brightness(0.9) opacity(0.8)",
            }}
          />
        </Parallax>

        <Parallax className="absolute inset-0 z-0" translateY={[150, -20]}>
          <Image
            src="/images/mug.webp"
            alt="phone"
            width={2000}
            height={2000}
            className="absolute left-1/2 transform -translate-x-1/2 sm:left-3/4 sm:transform-none w-[100px] h-[100px] md:w-[300px] md:h-[300px]"
            style={{
              filter: "brightness(0.4) opacity(0.6) blur(1px)",
              left: "80%",
            }}
          />
        </Parallax>
        {/* imagen extra */}
        <Parallax
          className="absolute inset-0 z-0"
          translateY={[100, -60]}
          speed={0.2}
        >
          <Image
            src="/images/boots.png"
            alt="apple"
            width={2000}
            height={2000}
            className="absolute top-60 md:top-20 left-3/4 transform -translate-x-1/2 md:left-3/4 sm:transform-none w-[200px] h-[200px]"
            style={{
              filter: "brightness(0.4) opacity(0.7) blur(0px)",
              left: "70%",
            }}
          />
        </Parallax>

        <div className="relative z-10 flex flex-col items-center justify-end h-screen lg:justify-end md:h-screen  pb-20 md:pb-60 lg:pb-28 flex-grow ">
          <h1
            className={`text-4xl font-cyBold text-white tracking-tight sm:text-6xl text-center `}
          >
            From Beginning of Times
          </h1>
          <p
            className={`mb-[40px] text-lg leading-6 text-center text-white font-suisse px-2 md:text-2xl md:px-6 md:leading-8 md:pl-20 md:pr-20 `}
          >
            Discover top-notch gear and equipment to enhance your outdoor
            adventures.
          </p>
          <hr className="w-1/2 border-white"></hr>
          <div className="my-10 flex items-center justify-center gap-x-6">
            <a
              href="/store"
              className={`rounded-md bg-darkMustard px-4 py-3 font-suisse text-xl text-white `}
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default AboutComponent;
