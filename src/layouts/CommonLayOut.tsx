import React from "react";
import Header from "layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "layouts/Footer";
import styled from "styled-components";

const CommonLayOut = () => {
  return (
    <BlogLayout>
      <Header />
      <Outlet />
      <Footer />
    </BlogLayout>
  );
};

export default CommonLayOut;

const BlogLayout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1920px;
`;
