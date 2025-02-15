import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404 | Not Found</h1>
      <p className="text-3xl font-bold text-gray-500 mb-4">
        This page does not exist
      </p>
    </div>
  );
};

export default NotFound;
