// "use client";

// import React, { useEffect } from "react";

// const MouseMoveHandler: React.FC = () => {
//   useEffect(() => {
//     const root = document.documentElement;
//     const smoothMove = 0.01;

//     const handleMouseMove = (event: MouseEvent) => {
//       const rotateX = (event.clientY - window.innerHeight / 2) * smoothMove;
//       const rotateY =
//         ((event.clientX - window.innerWidth / 2) * -smoothMove) / 2;

//       root.style.setProperty("--rotate-x", `${rotateX}deg`);
//       root.style.setProperty("--rotate-y", `${rotateY}deg`);
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return null; // Este componente no necesita renderizar nada
// };

// export default MouseMoveHandler;
