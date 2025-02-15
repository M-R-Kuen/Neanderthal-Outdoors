"use client";

import React from "react";

import CheckoutComponent from "@/components/CheckoutComponent/CheckoutComponent";
import { useAuth } from "../../context/AuthContext";
import LoginForm from "../ReusableForm/LoginReusableForm";
import Image from "next/image";

const CartPanel = () => {
  const { token, isLogged } = useAuth();
  return (
    <div>
      {!isLogged ? (
        <div className=" justify-center items-center h-screen bg-black text-white">
          <div className="absolute inset-0  ">
            <Image
              className=" w-full h-full  object-cover"
              width={3000}
              height={3000}
              alt="photo"
              src="/images/sky.jpg"
            ></Image>
          </div>
          <div className=" z-10 flex flex-col mx-auto mt-10 md:mt-32 justify-center h-screen ">
            <h1 className="z-10  text-white w-3/4 mx-auto text-center text-lg leading-snug md:text-2xl lg:text-6xl md:w-full logged-subtitle">
              Hey! You need to be logged in to checkout
            </h1>
            <LoginForm />
          </div>
        </div>
      ) : (
        <CheckoutComponent />
      )}
    </div>
  );
};

export default CartPanel;
