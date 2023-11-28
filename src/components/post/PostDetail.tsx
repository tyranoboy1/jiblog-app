import { Link, useNavigate, useParams } from "react-router-dom";
import "components/post/styles/post.css";
import { IPostType } from "./interface/post.interface";
import { useState } from "react";
import React from "react";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import Loader from "components/view/Loader";
import { toast } from "react-toastify";
import PostComment from "components/post/PostComment";
import { useModal } from "context/ModalContext";
import Modal from "components/modal/Modal";

/** PostDetail  => 게시글 상세화면 컴포넌트 */
const PostDetail = () => {
  /** URL에서 파라미터를 가져오는 hook */
  const params = useParams();
  const [posts, setPost] = useState<IPostType | null>(null);
  const { showModal, isModalShow, modalMessage, onConfirm, hideModal } =
    useModal();
  const navigate = useNavigate();
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
  /** 게시글 삭제하는 함수 */
  const handleDelete = async () => {
    showModal("해당 댓글을 삭제하시겠습니까?", async () => {
      if (posts && posts.id) {
        await deleteDoc(doc(db, "posts", posts?.id));
        toast.success("게시글을 삭제하였습니다.");
        navigate("/");
      }
    });
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
          <>
            <div className="post__box">
              <div className="post__title">{posts.title}</div>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">{posts.email}</div>
                <div className="post__date">{posts.createAt}</div>
              </div>
              <div className="post__utils-box">
                {posts?.category && (
                  <div className="post__category">{posts.category}</div>
                )}

                <div className="post__delete" onClick={handleDelete}>
                  삭제
                </div>
                <div className="post__edit">
                  <Link to={`/posts/edit/${posts.id}`}>수정</Link>
                </div>
              </div>
              <div className="post__text post__text-pre-wrap">
                {posts?.content}
              </div>
            </div>
            <PostComment post={posts} getPost={getPost} />
          </>
        ) : (
          <Loader />
        )}
      </div>
      {isModalShow && (
        <Modal
          message={modalMessage}
          onConfirm={() => {
            onConfirm();
            hideModal();
          }}
          onHideModal={() => {
            hideModal();
          }}
        />
      )}
    </>
  );
};

export default PostDetail;
