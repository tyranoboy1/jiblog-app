import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { HomeContainer, PostListBox } from "./styles/home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <PostListBox>PostList</PostListBox>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
