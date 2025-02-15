import React from "react";
import OrdersComponent from "@/components/OrdersComponent";
import Image from "next/image";

const Orders: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkMustard/50 ">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/sky.jpg"
          alt="outdoor"
          width={3000}
          height={3000}
          className="w-full h-screen object-cover"
        />
      </div>
      <OrdersComponent />
    </div>
  );
};

export default Orders;
