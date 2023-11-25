import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  IPostListProps,
  IPostType,
  TabType,
} from "components/post/interface/post.interface";
import "components/post/styles/post.css";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";

/**
 * PostList  => 게시물 리스트 컴포넌트
 */
const PostList = (props: IPostListProps) => {
  const { Navigation } = props;
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [posts, setPosts] = useState<IPostType[]>([]);
  const { user } = useContext(AuthContext);

  /** Firebase에서 posts 컬렉션의 모든 데이터를 가져옴 */
  const getPost = async () => {
    const data = await getDocs(collection(db, "posts"));
    data?.forEach((doc) => {
      /** 데이터를 가져와 id 필드를 추가 */
      const dataAddId = { ...doc.data(), id: doc.id };
      /** 새로운 데이터를 기존 상태 배열에 추가*/
      setPosts((prev) => [...prev, dataAddId as IPostType]);
    });
  };
  /** Mount 시 실행 */
  React.useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {Navigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}
      <div className="post__list">
        {posts?.length > 0 ? (
          posts?.map((post, index) => (
            <div key={post?.id} className="post__box">
              <Link to={`/posts/${post?.id}`}>
                <div className="post__profile-box">
                  <div className="post__profile" />
                  <div className="post__author-name">{post?.email}</div>
                  <div className="post__date">{post?.createAt}</div>
                </div>
                <div className="post__title">{post?.title}</div>
                <div className="post__text">{post?.summary}</div>
              </Link>
              {post?.email === user?.email && (
                <div className="post__utils-box">
                  <div className="post__delete">삭제</div>
                  <Link to={`/posts/edit/${post?.id}`} className="post__edit">
                    수정
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="post__no-post">게시글이 없습니다.</div>
        )}
      </div>
    </>
  );
};

export default PostList;
