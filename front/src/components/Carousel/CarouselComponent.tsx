/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel, Typography } from "@material-tailwind/react";

import type { CarouselProps } from "@material-tailwind/react";
import Image from "next/image";

import { useEffect, useState } from "react";

interface CustomCarouselProps extends Partial<CarouselProps> {
  className?: string;
  autoplay?: boolean;
}

export const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = 3; // Número total de imágenes en el carousel

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos (ajusta el valor según tus necesidades)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-[200px] mx-auto md:w-full lg:w-3/4 md:h-[300px] ">
      <Carousel className="rounded-xl border-none " autoplay={true}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1663054418461-19b342c3749c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlraW5nJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
          alt="image 1"
          width={2000}
          height={2000}
          className="h-full w-full object-cover"
          style={{ maxHeight: "500px" }}
        />

        <Image
          src="https://images.unsplash.com/photo-1620953749696-38989c40eadb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nJTIwYmFja3BhY2t8ZW58MHx8MHx8fDA%3D"
          alt="image 2"
          width={2000}
          height={2000}
          className="h-full w-full object-cover"
          style={{ maxHeight: "500px" }}
        />

        <Image
          src="https://images.unsplash.com/photo-1522212541436-a0b0d2139e2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlraW5nJTIwbXVnfGVufDB8fDB8fHww"
          alt="image 3"
          width={2000}
          height={2000}
          className="h-full w-full object-cover "
          style={{ maxHeight: "500px" }}
        />
      </Carousel>
    </div>
  );
};
