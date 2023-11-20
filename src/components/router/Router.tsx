import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import PostList from "../../pages/post/PostList";
import PostDetail from "../../pages/post/PostDetail";
import PostNew from "../../pages/post/PostNew";
import PostEdit from "../../pages/post/PostEdit";
import Profile from "../../pages/profile/Profile";
import Login from "../../pages/user/Login";
import SignUp from "../../pages/user/SignUp";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<PostDetail />}></Route>
        <Route path="/posts/new" element={<PostNew />}></Route>
        <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </>
  );
};

export default Router;
