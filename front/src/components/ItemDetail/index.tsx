/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductCardProps } from "../../types/products/productTypes";
import { Button } from "@material-tailwind/react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import Link from "next/link";

const ProductDetail: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  stock,
  image,
  categoryId,
}) => {
  const [showShipping, setShowShipping] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [active, setActive] = useState(image[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [backendError, setBackendError] = useState<string | null>(null);
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const { token, isLogged } = useAuth();
  const { addToCart, cart } = useCart();
  const router = useRouter();

  const itemExist = cart.some((product) => product.id === id);

  const handleAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!token) {
      setModalType("error");
      setBackendError("You must be logged in to add products to cart");
      setIsModalOpen(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      return;
    }

    if (itemExist) {
      setModalType("error");
      setBackendError("Sorry mate, one item at a time!");
      setIsModalOpen(true);

      setTimeout(() => {
        router.push("/store");
      }, 2000);
      return;
    }

    const product: ProductCardProps = {
      id,
      name,
      description,
      price,
      stock,
      image,
      categoryId,
    };

    addToCart(product);

    setModalType("success");
    setSuccessMessage("Product added to cart successfully!");
    setIsModalOpen(true);
    setTimeout(() => {
      router.push("/cart");
    }, 2000); // Shorter timeout for user experience
  };

  return (
    <div className="md:flex items-start mt-20 justify-center py-12 2xl:px-20 md:px-6 px-4 z-10">
      <div className="lg:w-full lg:flex-row sm:w-full md:px-10 md:py-15 md:px15 w-full bg-white justify-center flex flex-col rounded-3xl py-10 px-10">
        {/* Imágenes */}
        <div className="xl:w-2/6 lg:w-2/5 w-full md:block hidden h-50">
          <img className="w-full" alt="Outdoor product image" src={active} />
          <div className="w-full flex"></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {image.map((imageUrl, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imageUrl)}
                  src={imageUrl}
                  className="h-50 max-w-full cursor-pointer rounded-lg object-cover object-center mt-3"
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Imágenes (versión móvil) */}
        <div className="md:hidden w-full h-50 px-5">
          <div className="grid grid-cols-1 gap-3 mt-3">
            {image.map((imageUrl, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imageUrl)}
                  src={imageUrl}
                  className="h-auto w-full cursor-pointer rounded-lg object-cover object-center mt-3"
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Detalles del producto */}
        <div className="xl:w-2/5 lg:ml-8 md:mt-0 h-1/6 w-full content-center rounded-md">
          {/* Título y descripción */}
          <div className="border-b border-gray-200 pb-6">
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
              {name}
            </h1>
          </div>

          {/* Opciones de tamaño */}
          <div className="py-4 border-b flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Size</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 mr-3">
                One size
              </p>
            </div>
          </div>

          {/* Botón de agregar al carrito */}
          <Button
            className="rounded-lg text-base flex items-center justify-center mx-auto leading-none text-white bg-gray-800 w-3/4 py-4 hover:bg-indigo-500"
            onClick={handleAddCart}
          >
            Add to Cart {`$${price}`}
          </Button>

          {/* Detalles adicionales del producto */}
          <div className="w-full">
            <p className="text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {description}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Price: {price}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Stock: {stock}
            </p>
          </div>

          {/* Sección de Envío y Devoluciones */}
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShowShipping(!showShipping)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                  Shipping and Returns
                </p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  aria-label="show or hide"
                >
                  <svg
                    className={`transform ${
                      showShipping ? "rotate-180" : "rotate-0"
                    }`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  showShipping ? "block" : "hidden"
                } mt-4 text-gray-600`}
              >
                <p className="text-base leading-4">
                  You can return products up to 14 days after receipt. Please
                  keep the original packaging. For more details, see our return
                  policy.
                </p>
              </div>
              <Link href="/store" className="flex py-10">
                <Button className="m-5 hover:bg-white hover:text-black">
                  Back to Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de éxito o error */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        placement="center"
        className="glass-background w-1/2"
      >
        <ModalContent
          className={`p-4 ${
            modalType === "success" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <ModalHeader>
            <h2
              className={`text-lg font-semibold ${
                modalType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {modalType === "success" ? "Success!" : "Error"}
            </h2>
          </ModalHeader>
          <ModalBody>
            <p>{modalType === "success" ? successMessage : backendError}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              className="typography-custom"
              color={modalType === "error" ? "red" : "green"}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductDetail;
