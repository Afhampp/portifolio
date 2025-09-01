import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900" >
      <div className="w-full sm:w-3/5 mx-auto">{children}</div>
    </div>
  );
}
