"use client";
import React from "react";
import { StoreCardDetails } from "./utils/StoreCardDetails";
import { Props } from "../../types/products/productTypes";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const ProductsCards: React.FC<Props> = ({ products }) => {
  if (!products || products.length === 0) {
    return <div></div>;
  }

  return (
    <div className="bg-white m-10">
      <div className="mx-auto max-w-3xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <StoreCardDetails
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              categoryId={product.categoryId}
              stock={product.stock}
            />
          ))}
        </div>
      </div>
      <Link href="/home">
        <Button className="m-5">Go Back</Button>
      </Link>
    </div>
  );
};

export default ProductsCards;
