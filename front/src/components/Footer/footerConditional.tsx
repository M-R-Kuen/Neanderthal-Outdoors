"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface FooterConditionalProps {
  children: React.ReactNode;
}

const FooterConditional: React.FC<FooterConditionalProps> = ({ children }) => {
  const pathname = usePathname();
  return <>{pathname !== "/" ? children : null}</>;
};

export default FooterConditional;
