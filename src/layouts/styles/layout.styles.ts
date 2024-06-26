import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
  padding: 20px 40px;
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

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 10px;
`;

export const WrapperButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  height: 44px;

  > img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
  }
  &:hover > img {
    transform: translateY(-5px);
  }
  > p {
    display: none;
    color: #ffffff;
    font-size: 10px;
  }
  &:hover > p {
    color: #fff;
    display: block;
  }
`;
