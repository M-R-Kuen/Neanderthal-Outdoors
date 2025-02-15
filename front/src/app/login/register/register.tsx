import React from "react";
import RegisterForm from "@/components/ReusableForm/RegisterReusableForm";

const RegisterComponent: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 ">
        <video
          autoPlay
          loop
          muted
          src="/videos/rocks.mp4"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 "></div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center mt-48 z-10 ">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterComponent;
