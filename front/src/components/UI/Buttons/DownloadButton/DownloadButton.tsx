import React from "react";

interface ButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}
const DownloadButton: React.FC<ButtonProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      download={href.split("/").pop()}
      onClick={() => console.log("Enlace clickeado")}
    >
      {children}
    </a>
  );
};

export default DownloadButton;
