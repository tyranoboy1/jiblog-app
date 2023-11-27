import React, { useContext, useState } from "react";
import "components/post/styles/comment.css";
import {
  ICommentDataProps,
  ICommentProps,
} from "components/post/interface/post.interface";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";
import { useModal } from "context/ModalContext";
import Modal from "components/modal/Modal";

/** PostComment => 게시글 댓글 컴포넌트 */
const PostComment = ({ post, getPost }: ICommentProps) => {
  /** 댓글 정보를 담을 상태 변수추가 */
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);
  const { showModal, isModalShow, modalMessage, onConfirm, hideModal } =
    useModal();
  /** 댓글 내용이 변경될때 호출되는 함수 */
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "comment") {
      setComment(value);
    }
  };
  /** 댓글을 삭제하는 함수 */
  const handleDeleteComment = async (data: ICommentDataProps) => {
    /**  showModal 함수를 사용하여 모달 표시 */
    showModal("해당 댓글을 삭제하시겠습니까?", async () => {
      if (post.id) {
        const postRef = doc(db, "posts", post.id);
        await updateDoc(postRef, {
          comments: arrayRemove(data),
        });
        toast.success("댓글을 삭제하였습니다.");
        getPost(post.id);
      }
    });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (post && post?.id) {
        const postRef = doc(db, "posts", post.id);
        if (user?.uid) {
          const commentObj = {
            content: comment,
            uid: user.uid,
            email: user.email,
            createAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          };

          await updateDoc(postRef, {
            comments: arrayUnion(commentObj),
            updateAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          });
          await getPost(
            post.id
          ); /** 데이터를 가져오는 함수 다시가져와서 업데이트해줌 */
        }
      }
      toast.success("댓글을 생성했습니다.");
      setComment("");
    } catch (e: any) {
      console.log(e);
      toast.error(e?.code);
    }
  };
  return (
    <>
      <div className="comments">
        <form className="comments__form" onSubmit={onSubmit}>
          <div className="form__block">
            <label htmlFor="comment">댓글 입력</label>
            <textarea
              name="comment"
              id="comment"
              required
              value={comment}
              onChange={onChange}
            />
          </div>
          <div className="form__block form__block-reverse">
            <input type="submit" value="입력" className="form__btn-submit" />
          </div>
        </form>
        <div className="comments__list">
          {post?.comments
            ?.slice(0)
            ?.reverse()
            .map((comment) => (
              <div key={comment.createAt} className="comment__box">
                <div className="comment__profile-box">
                  <div className="comment__email">{comment?.email}</div>
                  <div className="comment__date">{comment?.createAt}</div>
                  {comment.uid === user?.uid && (
                    <div
                      className="comment__delete"
                      onClick={() => handleDeleteComment(comment)}
                    >
                      삭제
                    </div>
                  )}
                </div>
                <div className="comment__text">{comment?.content}</div>
              </div>
            ))}
        </div>
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

export default PostComment;
