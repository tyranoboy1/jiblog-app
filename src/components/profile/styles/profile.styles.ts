import styled from "styled-components";

export const ProfileBox = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 18px;
  margin: 0 auto;
  max-width: 680px;
  text-align: left;
  line-height: 24px;
  justify-content: space-between;
  padding: 20px;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;
export const ProfileInfoBox = styled.div``;
export const ProfileImage = styled.div`
  width: 72px;
  height: 72px;
  background-color: gray;
  border-radius: 50%;
`;
export const ProfileEmail = styled.div`
  font-weight: 500;
`;
export const ProfileName = styled.div`
  font-size: 16px;
  padding-top: 4px;
`;

export const LogOut = styled.div`
  &:a {
    color: gray;
    font-size: 14px;
  }
`;
