"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";

const CheckoutComponent: React.FC = () => {
  const {
    cart,
    checkOutOrders,
    loadOrdersState,
    clearCart,
    clearUserCart,
    removeItem,
  } = useCart();
  const { token, isLogged, user } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  const handleCheckOut = () => {
    checkOutOrders();
    loadOrdersState(token);
    alert("Checkout success");
    router.push("/profile-dashboard/orders");

    clearCart();
    clearUserCart();
  };

  const handleClearCart = () => {
    clearCart();
    clearUserCart();
    alert("Cart Cleared");
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    alert("Item removed from cart");
  };

  const subTotal = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className=" relative flex flex-col justify-center items-center  ">
      <div className="absolute inset-0 ">
        <Image
          className=" w-full h-full  object-cover"
          width={3000}
          height={3000}
          alt="photo"
          src="/images/sky.jpg"
        ></Image>
      </div>
      <div className="container  my-[10rem] flex flex-col justify-center items-center text-white  glass-background p-6">
        <h1 className="mb-10 text-center text-2xl md:text-6xl typography-custom">
          Cart Items
        </h1>
        <div className=" relative  mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 flex-grow">
          <div className="rounded-lg md:w-2/3">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div
                  key={product.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full rounded-lg sm:w-40"
                    width={160}
                    height={160}
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {product.name}
                      </h2>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-md text-gray-900">${product.price}</p>
                      <Button
                        className="text-sm font-medium"
                        onClick={() => handleRemoveItem(product.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-2xl typography-thin">
                <h2>Your cart is empty ! </h2>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 ">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold text-gray-900">Total</p>
                <div>
                  <p className="mb-1 text-lg font-bold text-gray-900">{`$${
                    subTotal + 4.99
                  }`}</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Button
                className="mt-6 w-3/4 rounded-md bg-black py-2 font-medium text-white"
                onClick={onOpen}
              >
                Check out
              </Button>
              <Link href={"/store"}>
                <Button className="mt-6 w-3/4 rounded-md bg-black py-2 font-medium text-white">
                  Go Back
                </Button>
              </Link>
              <Button
                className="mt-6 w-3/4 rounded-md bg-black py-2 font-medium text-white"
                onClick={handleClearCart}
              >
                Clear Cart
              </Button>
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent className="bg-white p-4 rounded-md shadow-md w-1/2 m-auto">
          <ModalHeader>Proceed to checkout</ModalHeader>
          <ModalBody>Are you sure you want to checkout ?</ModalBody>
          <ModalFooter>
            <Button color="green" onClick={handleCheckOut}>
              Confirm
            </Button>
            <Button color="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CheckoutComponent;
