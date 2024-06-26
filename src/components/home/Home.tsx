import ToastModal from "components/modal/ToastModal";
import PostList from "components/post/PostList";
import Carousel from "components/view/Carousel";

/** Home => 홈 화면 컴포넌트 */
const Home = () => {
  return (
    <>
      <Carousel />
      <PostList />
      <ToastModal text="로그인에 성공하셨습니다." />
    </>
  );
};

export default Home;
