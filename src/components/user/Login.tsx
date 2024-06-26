import { Link, useNavigate } from "react-router-dom";
import "components/user/styles/login.css";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "firebaseApp";
import {
  ErrorBox,
  LinkButton,
  LoginButton,
  LoginCard,
  LoginContainer,
  LoginFormBox,
  LoginFormContainer,
  LoginInput,
  LoginLabel,
} from "./styles/user.styles";

/** Login => 로그인 화면 컴포넌트 */
const Login = () => {
  /** 에러 여부를 관리하는 상태변수 */
  const [error, setError] = useState<string>("");
  /** 이메일 관리하는 상태변수 */
  const [email, setEmail] = useState<string>("");
  /** 패스워드 관리하는 상태변수 */
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const loginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      /** Firebase 인증 객체를 가져옴 */
      const auth = getAuth(app);
      /** 이메일과 비밀번호를 사용하여 사용자를 로그인 */
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("로그인에 성공했습니다.");
      navigate("/");
    } catch (error: any) {
      toast.error(error?.code);
      console.log(error);
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
        setError("비밀번호는 8자리 이상 입력해주세요");
      } else {
        setError("");
      }
    }
  };
  return (
    <LoginContainer>
      <LoginCard>
        <p>로그인</p>
        <LoginFormContainer>
          <LoginFormBox>
            <LoginLabel htmlFor="email">이메일</LoginLabel>
            <LoginInput
              type="email"
              name="email"
              id="email"
              required
              onChange={onChange}
              value={email}
            />
          </LoginFormBox>
          <LoginFormBox>
            <LoginLabel htmlFor="password">비밀번호</LoginLabel>
            <LoginInput
              type="password"
              name="password"
              id="password"
              required
              onChange={onChange}
              value={password}
            />
          </LoginFormBox>
          {error && error?.length > 0 && (
            <LoginFormBox>
              <ErrorBox>{error}</ErrorBox>
            </LoginFormBox>
          )}
          <LoginFormBox>
            계정이 없으신가요?
            <LinkButton onClick={() => navigate("/signup")}>
              회원가입하기
            </LinkButton>
          </LoginFormBox>
          <LoginButton
            type="button"
            disabled={error?.length > 0}
            onClick={loginClick}
          >
            로그인
          </LoginButton>
        </LoginFormContainer>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
