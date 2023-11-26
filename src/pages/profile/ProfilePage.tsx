import PostList from "components/post/PostList";
import Profile from "components/profile/Profile";

/** ProfilePage => 프로필 페이지 컴포넌트 */
const ProfilePage = () => {
  return (
    <>
      <Profile />
      <PostList defaultTab="my" hasNavigation={false} />
    </>
  );
};

export default ProfilePage;
