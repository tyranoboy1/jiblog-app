import { Link, useNavigate } from "react-router-dom";
import {
  HeaderLayout,
  HeaderLogoButton,
  Wrapper,
  WrapperButton,
} from "./styles/layout.styles";
import { useSelector } from "react-redux";
import { RootState } from "redux/slices";
import write from "assets/svg/write_icon.svg";
import board from "assets/svg/board_icon.svg";
import profile from "assets/svg/avatar_profile_icon.svg";

/** Header => header 컴포넌트 */
const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.blog.isAuthenticated
  );

  return (
    <HeaderLayout className="header">
      <HeaderLogoButton onClick={() => navigate("/")}>
        <p>Blog</p>
      </HeaderLogoButton>
      {isAuthenticated && (
        <Wrapper>
          <WrapperButton onClick={() => navigate("/posts/new")}>
            <img src={write} alt="write" />
            <p>글쓰기</p>
          </WrapperButton>
          <WrapperButton onClick={() => navigate("/posts")}>
            <img src={board} alt="board" />
            <p>게시글</p>
          </WrapperButton>
          <WrapperButton onClick={() => navigate("/profile")}>
            <img src={profile} alt="profile" />
            <p>프로필</p>
          </WrapperButton>
        </Wrapper>
      )}
    </HeaderLayout>
  );
};

export default Header;
