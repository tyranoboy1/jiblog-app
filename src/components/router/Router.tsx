import { Route, Routes, Navigate } from "react-router-dom";

import Home from "components/home/Home";
import PostList from "components/post/PostList";
import PostDetail from "components/post/PostDetail";
import PostNew from "components/post/PostNew";
import PostEdit from "components/post/PostEdit";
import Profile from "components/profile/Profile";
import Login from "components/user/Login";
import SignUp from "components/user/SignUp";
import CommonLayOut from "layouts/CommonLayOut";
import LoginPage from "pages/user/LoginPage";
import SignUpPage from "pages/user/SignUpPage";
import { IRouterProps } from "components/router/interface/router.interface";

const Router = (props: IRouterProps) => {
  const { isAuthenticated } = props;

  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <Route element={<CommonLayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Router;
