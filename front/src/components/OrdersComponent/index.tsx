"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { OrderTypes } from "../../types/context/contextTypes";
import formatOrderDateTime from "../CheckoutComponent/utils/formatDate";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const OrdersComponent: React.FC = () => {
  const { token, isLogged } = useAuth();
  const { orders, loadOrdersState } = useCart();

  useEffect(() => {
    if (token) {
      loadOrdersState(token);
    }
  }, [token]);

  return (
    <div className="z-10 mx-auto  my-[10rem]  w-full flex-col justify-center items-center flex-grow ">
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className=" text-center text-4xl typography-custom text-white">
          My Orders
        </h2>
        <div className="z-10 justify-center items-center mt-[2rem]  py-[2rem] glass-background">
          {isLogged && orders && orders.length > 0 ? (
            orders.map((order: OrderTypes) => (
              <div
                key={order.id}
                className="z-10 mx-auto mt-4 w-[90%] flex-col md:gap-2 text-white p-6 md:w-[90%] lg:grid lg:grid-cols-2 lg:gap-10"
              >
                {/* Columna de izquierda (Fecha, Productos, Estado) */}
                <div className="flex flex-col">
                  <p>
                    <strong>Date:</strong> {formatOrderDateTime(order.date)}
                  </p>

                  <p>
                    <strong>Products:</strong>{" "}
                    {order.products.map((product) => product.name).join(", ")}
                  </p>

                  <div className="bg-green-400 rounded-md w-full lg:w-3/4 max-h-10 my-2 p-2 flex items-center justify-center">
                    <p className="text-white text-md">
                      <strong>Status:</strong> {order.status}
                    </p>
                  </div>
                </div>

                {/* Columna de derecha (Imágenes de los productos) */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap bg-white rounded-lg">
                  {order.products.map((product) => (
                    <div key={product.id} className="m-2">
                      <Image
                        src={product.image[0]}
                        alt={product.name}
                        className="h-40 w-40 object-contain"
                        width={160}
                        height={160}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="w-full mx-auto mt-20 justify-center align-center grid-cols-none">
              <h2 className="text-center justify-center text-2xl typography-thin text-white">
                Oops nothing here!
              </h2>
              <div className="flex justify-center w-3/4 mx-auto">
                <Link href="/profile-dashboard" className="flex py-10">
                  <Button className="m-5 hover:bg-white hover:text-black">
                    Go Back
                  </Button>
                </Link>
                <Link href="/store" className="flex py-10">
                  <Button className="m-5 hover:bg-white hover:text-black">
                    Store
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersComponent;
