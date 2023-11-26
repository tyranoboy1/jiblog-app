import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  CATEGORIES,
  CategoryType,
  IPostListProps,
  IPostType,
  TabType,
} from "components/post/interface/post.interface";
import "components/post/styles/post.css";
import React from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

/**
 * PostList  => 게시물 리스트 컴포넌트
 */
const PostList = ({
  hasNavigation = true,
  defaultTab = "all",
}: IPostListProps) => {
  const [activeTab, setActiveTab] = useState<TabType | CategoryType>(
    defaultTab
  );
  const [posts, setPosts] = useState<IPostType[]>([]);
  const { user } = useContext(AuthContext);

  /** Firebase에서 posts 컬렉션의 모든 데이터를 가져옴 */
  const getPost = async () => {
    /** 두번 호출되므로 계속 새로운 데이터를 추가해주기때문에 문제가 발생 => 초기화 */
    setPosts([]);
    /** 게시글 리스트가 작성한 시간순서대로 구분하기위해 쿼리로 정렬 */
    let postsRef = collection(db, "posts");
    let postsQuery;

    /** 모든글과 내가 쓴 글만 볼수 있는 필터링 조건 */
    if (activeTab === "my" && user) {
      postsQuery = query(
        postsRef,
        where("uid", "==", user?.uid),
        orderBy("createAt", "asc")
      );
    } else if (activeTab === "all") {
      postsQuery = query(postsRef, orderBy("createAt", "asc"));
    } else {
      postsQuery = query(
        postsRef,
        where("category", "==", activeTab),
        orderBy("createAt", "asc")
      );
    }
    const data = await getDocs(postsQuery);
    data?.forEach((doc) => {
      /** 데이터를 가져와 id 필드를 추가 */
      const dataAddId = { ...doc.data(), id: doc.id };
      /** 새로운 데이터를 기존 상태 배열에 추가*/
      setPosts((prev) => [...prev, dataAddId as IPostType]);
    });
  };
  /** 게시글 삭제하는 함수 */
  const handleDelete = async (id: string) => {
    const confirm = window.confirm("해당 게시물을 삭제하시겠습니까?");
    if (confirm && id) {
      await deleteDoc(doc(db, "posts", id));
      toast.success("게시글을 삭제하였습니다.");
      getPost(); /** Mount시에만 getPost를 실행하기 때문에 삭제후에 한번 더 호출 */
    }
  };
  /** Mount 시 실행 */
  React.useEffect(() => {
    getPost();
  }, [activeTab]);

  return (
    <>
      {hasNavigation && (
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
          {CATEGORIES?.map((category) => (
            <div
              role="presentation"
              onClick={() => setActiveTab(category)}
              className={
                activeTab === category ? "post__navigation--active" : ""
              }
              key={category}
            >
              {category}
            </div>
          ))}
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
                  <div
                    className="post__delete"
                    role="presentation"
                    onClick={() => handleDelete(post.id as string)}
                  >
                    삭제
                  </div>
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
