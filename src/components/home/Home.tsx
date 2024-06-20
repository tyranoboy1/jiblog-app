import PostList from "components/post/PostList";
import Carousel from "components/view/Carousel";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

/** Home => 홈 화면 컴포넌트 */
const Home = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.blog.isAuthenticated
  );
  console.log("isAuthenticated", isAuthenticated);
  return (
    <>
      <Carousel />
      <PostList />
    </>
  );
};

export default Home;
