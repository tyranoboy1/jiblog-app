import PostList from "components/post/PostList";
import Carousel from "components/view/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <PostList Navigation={false} />
    </div>
  );
};

export default Home;
