import React from "react";
import { Link } from "react-router-dom";
import { HeaderLayout } from "./styles/header.styles";

const Header = () => {
  return (
    <HeaderLayout>
      <div>
        <Link to="/posts/new">새 글</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </div>
    </HeaderLayout>
  );
};

export default Header;
