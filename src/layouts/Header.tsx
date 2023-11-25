import { Link } from "react-router-dom";

/** Header => header 컴포넌트 */
const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Ji Blog
      </Link>
      <div>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </div>
    </header>
  );
};

export default Header;
