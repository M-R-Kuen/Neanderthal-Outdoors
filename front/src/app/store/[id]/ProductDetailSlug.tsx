import React from "react";
import ProductDetail from "@/components/ItemDetail/index";
import axios from "axios";
import Image from "next/image";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

async function fetchDetail(id: number) {
  const response = await axios.get(`${API_PUBLIC}/products/${id}`);
  if (!response) {
    console.error("Failed to fetch products");
  }
  return response.data;
}

const ProductDetailSlug = async ({ params }: { params: { id: string } }) => {
  const { id, name, description, price, stock, image, categoryId } =
    await fetchDetail(Number(params.id));

  return (
    <div className=" flex flex-col min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact.jpg"
          alt="outdoor"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center md:w-3/4 md:mx-auto lg:w-full ">
        <ProductDetail
          id={id}
          name={name}
          description={description}
          price={price}
          stock={stock}
          image={image}
          categoryId={categoryId}
        />
      </div>
    </div>
  );
};

export default ProductDetailSlug;
