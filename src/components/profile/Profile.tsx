import React from "react";
import { Link } from "react-router-dom";
import {
  FlexBox,
  LogOut,
  ProfileBox,
  ProfileEmail,
  ProfileImage,
  ProfileInfoBox,
  ProfileName,
} from "./styles/profile.styles";

const Profile = () => {
  return (
    <ProfileBox>
      <FlexBox>
        <ProfileImage />
        <ProfileInfoBox>
          <ProfileEmail>test@test.com</ProfileEmail>
          <ProfileName>jirrrr</ProfileName>
        </ProfileInfoBox>
      </FlexBox>
      <LogOut>
        <Link to="/">로그아웃</Link>
      </LogOut>
    </ProfileBox>
  );
};

export default Profile;
