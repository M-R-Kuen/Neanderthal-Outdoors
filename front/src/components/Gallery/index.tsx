"use client";

import React, { useState } from "react";
import { data } from "./utils/photosList";
import styles from "./gallery.module.css";
import Image from "next/image";

const Gallery = () => {
  const [active, setActive] = useState(data[0].imgelink);

  return (
    <div className="grid gap-4 grid-rows-1 mt-10 ">
      {/* Imagen activa grande en la parte superior */}
      <div>
        <Image
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[500px]"
          src={active}
          alt="active-image"
          width={3000}
          height={3000}
        />
      </div>

      {/* Galería de miniaturas */}
      <div className="grid gap-3 grid-cols-5 mt-10">
        {data.map(({ imgelink }, index) => (
          <div
            key={index}
            className="shadow-lg rounded-md  hover:shadow-lg hover:shadow-blue-500/80 "
          >
            <Image
              onClick={() => setActive(imgelink)}
              width={3000}
              height={3000}
              src={imgelink}
              className="h-60 w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
