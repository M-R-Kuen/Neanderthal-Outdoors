/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ProductCardProps } from "../../../types/products/productTypes";

import Link from "next/link";
import { Button } from "@material-tailwind/react";

export const StoreCardDetails: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  image,
  categoryId,
  stock,
}) => {
  return (
    <div className="group relative shadow-lg rounded-md  hover:shadow-xl hover:shadow-gray-900">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 border-2 ">
        <img
          src={image[0]}
          alt={name}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="rounded-md flex justify-between bg-white ">
        <div>
          <h1 className={`text-lg text-gray-700 m-5 font-bold uppercase`}>
            <a href="#">{name}</a>
          </h1>
        </div>
        <p className="text-sm font-bold text-gray-900 m-5">${price}</p>
      </div>
      <Link href={`/store/${id}`}>
        <Button className="m-5">View Details</Button>
      </Link>
    </div>
  );
};
