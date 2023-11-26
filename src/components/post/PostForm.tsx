import React, { useContext, useState } from "react";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import "components/post/styles/form.css";
import AuthContext from "context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  CATEGORIES,
  CategoryType,
  IPostType,
} from "components/post/interface/post.interface";
/**
 * PostForm => 게시물 작성(제목, 요약, 내용)form 컴포넌트
 */
const PostForm = () => {
  /** 제목 요약 내용 카테고리의 입력 정보를 담을 상태 변수 */
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<CategoryType>("Frontend");
  /** 전역컨텍스트로 선언된 user 정보 가져옴 */
  const { user } = useContext(AuthContext);
  /** 특정 작업 후 경로 이동 */
  const navigate = useNavigate();
  const params = useParams();
  const [posts, setPosts] = useState<IPostType | null>(null);

  /** 특정 ID를 가진 게시물을 가져오는 함수 */
  const getPost = async (id: string) => {
    if (id) {
      /** id가 제공되면 해당 id로 firebase 데이터 조회
       * posts 컬렉션에서 특정 id를 가진 문서의 참조 생성
       * 참조된 데이터를 가져옴
       */

      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setPosts({ id: docSnap.id, ...(docSnap.data() as IPostType) });
    }
  };
  React.useEffect(() => {
    if (params?.id) {
      /** 파라미터에 id가 있을 경우 id에 해당하는 게시물을 가져옴 마운트시 */
      getPost(params?.id);
    }
  }, []);

  React.useEffect(() => {
    if (posts) {
      setTitle(posts?.title);
      setSummary(posts?.summary);
      setContent(posts?.content);
      setCategory(posts?.category as CategoryType);
    }
  }, [posts]);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      /** posts 데이터가 있는 경우 */
      if (posts && posts.id) {
        const postRef = doc(db, "posts", posts?.id);
        await updateDoc(postRef, {
          title: title,
          summary: summary,
          content: content,
          updateAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          category: category,
        });
        toast?.success("게시글을 수정하였습니다.");
        navigate(`/posts/${posts.id}`);
      } else {
        /** firebase posts 컬렉션에 새로운 데이터 추가 */
        await addDoc(collection(db, "posts"), {
          title: title,
          summary: summary,
          content: content,
          createAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          email: user?.email /** 현재 로그인한 사용자의 이메일 */,
          uid: user?.uid,
          category: category,
        });
        toast?.success("게시글을 생성했습니다.");
        navigate("/");
      }
    } catch (e: any) {
      console.log(e);
      toast?.error(e?.code);
    }
  };

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    if (name === "category") {
      setCategory(value as CategoryType);
    }
  };
  return (
    <form action="/posts" method="POST" className="form" onSubmit={onSubmit}>
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
        <label htmlFor="category">카테고리</label>
        <select name="category" id="category" onChange={onChange}>
          <option value="">카테고리를 선택해주세요</option>
          {CATEGORIES?.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
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
        <input
          type="submit"
          value={posts ? "수정" : "제출"}
          className="form__btn--submit"
        />
      </div>
    </form>
  );
};

export default PostForm;
