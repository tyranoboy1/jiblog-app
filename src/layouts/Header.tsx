import { Link, useNavigate } from "react-router-dom";
import { HeaderLayout, HeaderLogoButton } from "./styles/layout.styles";
/** Header => header 컴포넌트 */
const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderLayout className="header">
      <HeaderLogoButton onClick={() => navigate("/")}>
        <p>Blog</p>
      </HeaderLogoButton>
      <div>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </div>
    </HeaderLayout>
  );
};

export default Header;
