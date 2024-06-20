import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
  padding: 10px 40px;
  min-height: 40px;
  align-items: center;
  background-color: #000000;
`;

export const HeaderLogoButton = styled.button`
  cursor: pointer;
  > p {
    color: #fff;
    font-weight: 700;
    font-size: 20px;
  }
`;
