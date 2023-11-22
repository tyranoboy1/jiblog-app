import React from "react";
import Header from "layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "layouts/Footer";

const CommonLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default CommonLayOut;
