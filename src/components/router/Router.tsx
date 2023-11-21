import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../home/Home";
import PostList from "../post/PostList";
import PostDetail from "../post/PostDetail";
import PostNew from "../post/PostNew";
import PostEdit from "../post/PostEdit";
import Profile from "../profile/Profile";
import Login from "../user/Login";
import SignUp from "../user/SignUp";
import CommonLayOut from "../../layouts/CommonLayOut";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<CommonLayOut />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<PostList />}></Route>
          <Route path="/posts/:id" element={<PostDetail />}></Route>
          <Route path="/posts/new" element={<PostNew />}></Route>
          <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
