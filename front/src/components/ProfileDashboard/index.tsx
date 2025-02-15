"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";

interface ProfileCardProps {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  address,
  phone,
}) => {
  return (
    <div className="w-3/4 flex items-center h-auto lg:h-screen flex-wrap mx-auto my-10 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-2xl  shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          {/* <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-profile-mobile-bg"></div> */}

          <h1 className="text-3xl typography-custom pt-8 lg:pt-0 uppercase">
            {" "}
            {`Welcome, ${name}!`}
          </h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black opacity-40"></div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="pt-2 text-gray-600 text-xs lg:text-sm text-center lg:text-left typography-custom">
              Your Location - {address}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm text-center lg:text-left typography-custom">
              Your Phone - {phone}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm text-center lg:text-left typography-custom">
              Your Email - {email}
            </p>
          </div>
          <p className="pt-8 text-sm typography-thin">
            Have a look at your orders or start buying our products through our
            store!
          </p>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <Link href="/profile-dashboard/orders">
              <button className="bg-black text-white typography-thin py-2 px-4 rounded-lg typography-custom">
                Orders
              </button>
            </Link>
            <Link href="/store">
              <button className="bg-black text-white typography-thin py-2 px-4 rounded-lg typography-custom">
                Shop
              </button>
            </Link>
          </div>

          <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between"></div>
        </div>
      </div>
    </div>
  );
};
