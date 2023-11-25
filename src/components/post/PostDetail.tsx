import { Link, useParams } from "react-router-dom";
import "components/post/styles/post.css";
import { IPostType } from "./interface/post.interface";
import { useState } from "react";
import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import Loader from "components/view/Loader";

/** PostDetail  => 게시글 상세화면 컴포넌트 */
const PostDetail = () => {
  /** URL에서 파라미터를 가져오는 hook */
  const params = useParams();
  const [posts, setPost] = useState<IPostType | null>(null);
  /** 특정 ID를 가진 게시물을 가져오는 함수 */
  const getPost = async (id: string) => {
    if (id) {
      /** id가 제공되면 해당 id로 firebase 데이터 조회
       * posts 컬렉션에서 특정 id를 가진 문서의 참조 생성
       * 참조된 데이터를 가져옴
       */

      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap.id, ...(docSnap.data() as IPostType) });
    }
  };
  React.useEffect(() => {
    if (params?.id) {
      /** 파라미터에 id가 있을 경우 id에 해당하는 게시물을 가져옴 마운트시 */
      getPost(params?.id);
    }
  }, []);
  return (
    <>
      <div className="post__detail">
        {posts ? (
          <div className="post__box">
            <div className="post__title">{posts.title}</div>
            <div className="post__profile-box">
              <div className="post__profile" />
              <div className="post__author-name">{posts.email}</div>
              <div className="post__date">{posts.createAt}</div>
            </div>
            <div className="post__utils-box">
              <div className="post__delete">삭제</div>
              <div className="post__edit">
                <Link to={`/posts/edit/1`}>수정</Link>
              </div>
            </div>
            <div className="post__text post__text-pre-wrap">
              {posts?.content}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default PostDetail;
