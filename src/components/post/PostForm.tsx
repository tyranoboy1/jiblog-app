import React, { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import "components/post/styles/form.css";
import AuthContext from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
/**
 * PostForm => 게시물 작성(제목, 요약, 내용)form 컴포넌트
 */
const PostForm = () => {
  /** 제목 요약 내용의 입력 정보를 담을 상태 변수 */
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  /** 전역컨텍스트로 선언된 user 정보 가져옴 */
  const { user } = useContext(AuthContext);
  /** 특정 작업 후 경로 이동 */
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      /** firebase posts 컬렉션에 새로운 데이터 추가 */
      await addDoc(collection(db, "posts"), {
        title: title,
        summary: summary,
        content: content,
        createAt: new Date()?.toLocaleDateString(),
        email: user?.email /** 현재 로그인한 사용자의 이메일 */,
      });
      toast?.success("게시글을 생성했습니다.");
      navigate("/");
    } catch (e: any) {
      console.log(e);
      toast?.error(e?.code);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    /** 이벤트 객체에서 변경된 필드의 이름과 값을 추출 */
    const {
      target: { name, value },
    } = e;
    /** 추출한 객체의 이름에 대한 조건 */
    if (name === "title") {
      setTitle(value);
    }
    if (name === "summary") {
      setSummary(value);
    }
    if (name === "content") {
      setContent(value);
    }
  };
  return (
    <form action="/post" method="POST" className="form" onSubmit={onSubmit}>
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          onChange={onChange}
          value={title}
        />
      </div>
      <div className="form__block">
        <label htmlFor="summary">요약</label>
        <input
          type="text"
          name="summary"
          id="summary"
          required
          onChange={onChange}
          value={summary}
        />
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          id="content"
          required
          onChange={onChange}
          value={content}
        />
      </div>
      <div className="form__block">
        <input type="submit" value="제출" className="form__btn--submit" />
      </div>
    </form>
  );
};

export default PostForm;
