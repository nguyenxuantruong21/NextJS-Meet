"use client";

import React from "react";

const ClientComponents = ({ children }: { children: React.ReactNode }) => {
  console.log("client");
  return (
    <div>
      Client Components
      {children}
    </div>
  );
};

export default ClientComponents;
