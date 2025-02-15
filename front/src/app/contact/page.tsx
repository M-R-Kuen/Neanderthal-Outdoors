/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContactComponent from "@/components/Contact";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contact.jpg"
          alt="outdoor"
          className="w-full h-full object-cover"
        />
      </div>

      <ContactComponent />
    </div>
  );
};

export default Contact;
