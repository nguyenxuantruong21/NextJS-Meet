import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const WorkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-10">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default WorkLayout;
