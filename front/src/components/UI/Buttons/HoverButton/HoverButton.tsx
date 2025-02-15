import Image from "next/image";
import React, { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon: string;
  hoverIcon: string;
  width?: number;
  height?: number;
}

const HoverButton: React.FC<ButtonProps> = ({
  children,
  className,
  icon,
  hoverIcon,
  width = 32,
  height = 32,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`flex items-center gap-4 border border-creme max-w-[14rem] py-2 px-6 justify-center rounded-2xl transition-all duration-300 text-creme hover:bg-creme hover:text-dark ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? hoverIcon : icon}
        alt="icon"
        width={width}
        height={height}
        className="transition-all duration-300"
      />
      {children}
    </button>
  );
};

export default HoverButton;
