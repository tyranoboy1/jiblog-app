import styled from "styled-components";

export const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  border-bottom: 1px solid #f2f2f2;
  min-height: 40px;
  align-items: center;
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
