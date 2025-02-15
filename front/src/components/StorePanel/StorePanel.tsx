/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

import ProductsCards from "@/components/StoreComponent";

import { fetchProducts } from "@/lib/server/fetchProducts";
import { ProductCardProps } from "@/types/products/productTypes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import Image from "next/image";

const StorePanel: React.FC = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  const [allProducts, setAllProducts] = useState<ProductCardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  //LOAD PRODUCTS
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();

      setProducts(products);
      setAllProducts(products);
    };
    getProducts();
  }, []);

  //CHANGE INPUT SEARCH
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    console.log(term);
    setSearchTerm(term);

    // Reset to all products if search term is empty
    if (term === "") {
      setIsModalOpen(false);
      setProducts(allProducts);
    }
  };

  //SUBMIT SEARCH
  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchTerm) {
      setIsModalOpen(false);
      setProducts(allProducts);

      alert("Please enter a search term");
    }
    const filtered = allProducts.filter((product: ProductCardProps) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length === 0) {
      setIsModalOpen(true);
    }

    setProducts(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="absolute inset-0 z-0 h-[80vh]">
        <Image
          src="/images/sky.jpg"
          alt="hiking"
          width={3000}
          height={3000}
          className="w-full h-full object-cover"
        ></Image>
      </div>

      <div className="flex flex-col items-center mt-36">
        <div className="z-10 flex flex-col items-center justify-center mx-auto  h-[50vh]  p-6 flex-grow">
          <h1
            className={`text-darkMustard tracking-tight text-3xl md:text-6xl md:w-1/2 font-cyBold text-center `}
          >
            Store. The best way to buy the products you love.
          </h1>
          <h3 className={`m-5 text-white `}>
            The latest. Take a look at what is new, right now.
            <hr />
          </h3>
          <form
            onSubmit={handleSubmitSearch}
            className="flex w-full md:w-3/4 mx-auto"
          >
            <input
              placeholder="Search"
              name="search"
              type="search"
              className="w-full md:w-1/2 mx-auto h-auto rounded-lg p-2 bg-white text-black"
              onChange={handleChange}
              value={searchTerm}
            />
          </form>
        </div>
        <div className="relative z-10 bg-white">
          {isModalOpen ? (
            <div>
              <p className="text-black text-2xl"> Oops! No products found.</p>
            </div>
          ) : (
            <div>
              <ProductsCards products={products} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorePanel;
