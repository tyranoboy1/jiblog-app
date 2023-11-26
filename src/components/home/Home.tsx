import PostList from "components/post/PostList";
import Carousel from "components/view/Carousel";

/** Home => 홈 화면 컴포넌트 */
const Home = () => {
  return (
    <>
      <Carousel />
      <PostList />
    </>
  );
};

export default Home;
