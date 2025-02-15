import React from "react";

import LoginForm from "@/components/ReusableForm/LoginReusableForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const LoginComponent: React.FC = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="absolute inset-0 z-0 min-h-screen">
        <video
          autoPlay
          src="/videos/rocks.mp4"
          className=" absolute w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-40 "></div>
      </div>
      <div className="relative flex flex-col items-center mt-52 z-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginComponent;
