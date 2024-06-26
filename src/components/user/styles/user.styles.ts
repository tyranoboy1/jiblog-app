import styled from "styled-components";

export const LoginContainer = styled.div`
  margin: 0 auto;
  height: 850px;
  max-width: 680px;
  min-height: 680px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  margin-top: 20px;
`;
export const LoginCard = styled.div`
  min-height: 70vh;
  margin-top: 10vh;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 20px;
  > p {
    flex: 0 100px;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    justify-content: center;
  }
`;
export const LoginFormContainer = styled.div`
  flex: 1;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > button {
    margin-top: 80px;
  }
`;
export const LoginFormBox = styled.div`
  width: 100%;
`;
export const LoginLabel = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const LoginInput = styled.input`
  height: 20px;
  padding: 10px 10px;
  font-size: 16px;
  border-radius: 0.3rem;
  border: 1px solid lightgray;
  width: 96%;
  max-width: 680px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  font-weight: 600;
  padding: 10px 10px;
  float: right;
  cursor: pointer;
  margin: 0 auto;
  font-size: 16px;
  background-color: #2563eb;
  color: white;
  display: block;
  &:hover {
    background-color: #1945a4;
  }
  &:active {
    background-color: #1945a4;
  }
`;

export const ErrorBox = styled.div`
  color: red;
`;

export const LinkButton = styled.button`
  margin-left: 10px;
  text-decoration: none;
  color: gray;
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;
