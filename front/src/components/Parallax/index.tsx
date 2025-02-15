"use client";

import React from "react";
import { Parallax } from "react-next-parallax";
import Image from "next/image";
import styles from "./page.module.css";

const ParallaxComponent: React.FC = () => {
  return (
    <Parallax
      offsetMultiplier={2}
      scale={0.8}
      animationMode="edge-to-edge-x"
      rotationMultiplier={1}
      spotGlareSizePercent={30}
    >
      <div className="relative w-screen h-screen bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-contain md:object-contain sm:h-[500px] md:h-[700px] lg:h-[900px] "
          >
            <source
              src="https://www.apple.com/105/media/us/apple-events/2024/74a575ba-d3c9-4cca-8db2-8469c46dd2b0/anim/phase3/large_2x.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center md:justify-center h-full text-white p-8">
          <Image
            src="/images/apple-256.png"
            width={40}
            height={40}
            alt="logo"
            className="mx-auto mb-4  lg:w-20 lg:h-20 xl:w-30 xl:h-30"
            data-parallax-offset="3"
          />

          <h1
            className={`text-4xl sm:text-6xl font-bold mb-2 mt-0 text-center ${styles.intro}`}
          >
            The Limit is the Sky.
          </h1>
          <p className={`text-xl leading-8 mb-6 text-center ${styles.introp}`}>
            Empowering creativity and innovation.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxComponent;
