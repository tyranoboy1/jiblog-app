import React from "react";
import { FooterLayout } from "./styles/footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterLayout>
      <Link to="">Menu1</Link>
      <Link to="">Menu2</Link>
      <Link to="">Menu3</Link>
    </FooterLayout>
  );
};

export default Footer;
