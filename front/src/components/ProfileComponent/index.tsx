/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useState, useEffect } from "react";
import { ProfileCard } from "../ProfileDashboard";
import { useAuth } from "@/context/AuthContext";

const ProfileComponent: React.FC = () => {
  const { token, isLogged } = useAuth();

  const userData = JSON.parse(
    (typeof window !== "undefined" && localStorage.getItem("userData")) || "{}"
  );
  const { name, email, address, phone } = userData;

  return (
    <div className="flex flex-col h-[90vh] w-full">
      <div className="absolute inset-0 z-0 h-full">
        <video
          loop
          autoPlay
          src="/videos/rocks.mp4"
          className=" absolute w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-40 "></div>
      </div>

      <div className=" w-full flex flex-col lg:flex-row items-center justify-around mx-auto mt-2 gap-2 ">
        {isLogged ? (
          <ProfileCard
            name={name}
            email={email}
            address={address}
            phone={phone}
          />
        ) : (
          <h1 className="text-white">Please login</h1>
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
