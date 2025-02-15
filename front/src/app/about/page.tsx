/* eslint-disable @next/next/no-img-element */
import AboutComponent from "@/components/AboutComponent";
import Gallery from "@/components/Gallery";
import styles from "../../components/AboutComponent/about.module.css";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <div className=" flex flex-col min-h-screen inset-0 z-0 w-full">
        <AboutComponent />
      </div>

      <div className="  z-10 bg-white p-6 w-full ">
        <div className="flex flex-col items-center w-full md:flex-col md:w-3/4 md:m-auto">
          <h2 className="text-4xl mt-10  md:text-5xl  text-darkMustard font-cyBold uppercase text-center">
            Our Story.
          </h2>
          <p
            className={`text-md mt-10 m-auto text-center text-gray-800  md:text-xl font-suisse`}
          >
            Founded by a group of avid adventurers and nature lovers,
            Neanderthal was born out of a shared passion for the outdoors and a
            desire to create reliable gear.
            <br />
            Frustrated with the lack of durable, eco-friendly options in the
            market, they embarked on a journey to design and produce their own
            line of outdoor products.
            <br />
            Each product is meticulously designed with the latest technology and
            sustainable materials, ensuring durability and functionality without
            compromising the planet.
          </p>
        </div>
        <div className="w-full h-screen flex-row md:w-3/4 md:m-auto md:justify-center">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default About;
