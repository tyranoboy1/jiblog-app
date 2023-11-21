import styled from "styled-components";

export const FooterLayout = styled.footer`
  background-color: #000000;
  min-height: 40px;
  padding: 20px 40px;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  a {
    margin: 0px 10px;
    color: gray;
    &:hover {
      color: black;
      cursor: pointer;
    }
    &:focus {
      color: blue;
    }
  }
`;
