import { Route, Routes, Navigate } from "react-router-dom";

import PostList from "components/post/PostList";
import PostDetail from "components/post/PostDetail";
import PostNew from "components/post/PostNew";
import PostEdit from "components/post/PostEdit";
import LoginPage from "pages/user/LoginPage";
import SignUpPage from "pages/user/SignUpPage";
import { IRouterProps } from "components/router/interface/router.interface";
import HomePage from "pages/home/HomePage";
import ProfilePage from "pages/profile/ProfilePage";
import CommonLayout from "layouts/CommonLayout";

/** Router => 라우팅 컴포넌트 */
const Router = (props: IRouterProps) => {
  /** 로그인 유무를 통해 컴포넌트 접근 */
  const { isAuthenticated } = props;

  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <Route element={<CommonLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        ) : (
          <Route element={<CommonLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<LoginPage />} />
          </Route>
        )}
      </Routes>
    </>
  );
};

export default Router;
