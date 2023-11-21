import React from "react";
import { Link } from "react-router-dom";
import { HeaderLayout, HomeLogo, MenuBox } from "./styles/header.styles";

const Header = () => {
  return (
    <HeaderLayout>
      <MenuBox>
        <Link to="/posts/new">새 글</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </MenuBox>
      <Link to="/">
        <HomeLogo>JI Blog</HomeLogo>
      </Link>
    </HeaderLayout>
  );
};

export default Header;
