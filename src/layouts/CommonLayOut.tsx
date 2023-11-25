import React from "react";
import Header from "layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "layouts/Footer";
import styled from "styled-components";

/** CommonLayOut => 헤더 푸터 중복 적용 안하도록 만든 레이아웃 */
/** 모든 컴포넌트에 헤더 푸터 적용 => 로그인 회원 가입 제외 */
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
