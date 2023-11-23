import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "components/user/styles/login.css";
import { app } from "firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  /** 에러 여부를 관리하는 상태변수 */
  const [error, setError] = useState<string>("");
  /** 이메일 관리하는 상태변수 */
  const [email, setEmail] = useState<string>("");
  /** 패스워드 관리하는 상태변수 */
  const [password, setPassword] = useState<string>("");
  /** 패스워드 확인 관리하는 상태변수 */
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("회원가입에 성공했습니다.");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /** input의 name과 value 관리 */
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
      /** 이메일 형식 검사 정규식 표현 */
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      /** value값 정규식 표현과 비교 */
      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }

    if (name === "password") {
      setPassword(value);
      /** 비밀번호 길이 제한 */
      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        /** 비밀번호와 비밀번호 확인 값 비교 */
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }

    if (name === "password_confirm") {
      setPasswordConfirm(value);
      /** 비밀번호 길이 제한 */
      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
        /** 비밀번호와 비밀번호 확인 값 비교 */
      } else if (value !== password) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }
  };
  return (
    <form onSubmit={onSubmit} className="form form--lg">
      <h1 className="form__title">회원가입</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={onChange}
        />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={onChange}
        />
      </div>
      <div className="form__block">
        <label htmlFor="password_confirm">비밀번호 확인</label>
        <input
          type="password"
          name="password_confirm"
          id="password_confirm"
          required
          onChange={onChange}
        />
      </div>
      {error && error?.length > 0 && (
        <div className="form__block">
          <div className="form__error">{error}</div>
        </div>
      )}
      <div className="form__block">
        계정이 이미 있으신가요?
        <Link to="/login" className="form__link">
          로그인하기
        </Link>
      </div>
      <div className="form__block">
        <input
          type="submit"
          value="회원가입"
          className="form__btn--submit"
          disabled={error?.length > 0}
        />
      </div>
    </form>
  );
};

export default SignUp;
