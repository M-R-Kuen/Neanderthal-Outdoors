import React from "react";
import ParallaxComponent from "@/components/Parallax";
import Image from "next/image";
import { NavigateButton } from "@/components/UI/Buttons/NavigateButton/NavigateButton";

const LandingPage: React.FC = () => {
  const text = "bariloche argentina 2023";
  return (
    <div className="flex flex-col h-screen  ">
      <div className=" absolute inset-0 w-full h-full  ">
        <Image
          src="/images/torn.png"
          alt="hiking"
          width={3000}
          height={3000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* <ParallaxComponent /> */}
      </div>

      <div className="  h-full flex flex-col z-10 items-start justify-center w-[60%] ml-[5rem]">
        <Image
          src="/images/sapienslogo.png"
          alt="logo"
          width={200}
          height={200}
          className="mb-4"
        />
        <h1 className="text-darkMustard font-cyBold  uppercase text-[6rem] leading-[5rem]  ">
          Empowering adventurous souls
        </h1>
        <div className="flex">
          <NavigateButton
            href="/home"
            className="text-white px-4 py-3 text-md font-suisse uppercase flex"
          >
            Enter
            <Image
              src="/images/Group.svg"
              alt="arrow"
              width={32}
              height={8}
              className="ml-2"
            />
          </NavigateButton>
        </div>
      </div>
      {/* Contenedor con el texto vertical y las líneas */}
      <div className="absolute top-1/2 right-[5rem] transform -translate-y-1/2 flex flex-col items-center text-white gap-y-[3rem]">
        {/* Línea superior */}
        <div className="w-[1px] h-20 bg-white"></div>

        {/* Texto vertical (usando map para dividir las letras) */}
        <div className="flex flex-col items-center">
          <span className="uppercase font-suisse text-xs ">
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className={`block ${letter === " " ? "h-[1rem]" : ""}`}
              >
                {letter === " " ? " " : letter}
              </span>
            ))}
          </span>
        </div>

        {/* Línea inferior */}
        <div className="w-[1px] h-20 bg-white"></div>
      </div>
    </div>
  );
};

export default LandingPage;
