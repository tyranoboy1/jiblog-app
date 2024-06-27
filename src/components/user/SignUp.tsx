import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "components/user/styles/login.css";
import { app } from "firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {
  ErrorBox,
  FormBox,
  FormButton,
  FormCard,
  FormContainer,
  FormInput,
  FormLabel,
  LinkButton,
  SubFormContainer,
} from "./styles/user.styles";

/** SignUp => 회원가입 화면 컴포넌트 */
const SignUp = () => {
  /** 에러 여부를 관리하는 상태변수 */
  const [emailError, setEmailError] = useState<string>("");
  const [pwdError, setPwdError] = useState<string>("");
  const [pwdConfirmError, setPwdConfirmError] = useState<string>("");
  // const [emailError, setEmailError] = useState<string>("");

  /** 이메일 관리하는 상태변수 */
  const [email, setEmail] = useState<string>("");
  /** 패스워드 관리하는 상태변수 */
  const [password, setPassword] = useState<string>("");
  /** 패스워드 확인 관리하는 상태변수 */
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const navigate = useNavigate();

  /** 회원가입 버튼 클릭 함수 */
  const signUpClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      /** Firebase 인증 객체를 가져옴  */
      const auth = getAuth(app);
      /** 새로운 사용자 계정을 Firebase에 생성 */
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error: any) {
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
        setEmailError("이메일 형식이 올바르지 않습니다.");
      } else {
        setEmailError("");
      }
    }

    if (name === "password") {
      setPassword(value);
      /** 비밀번호 길이 제한 */
      if (value?.length < 8) {
        setPwdError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        /** 비밀번호와 비밀번호 확인 값 비교 */
        setPwdError(
          "비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요."
        );
      } else {
        setPwdError("");
      }
    }

    if (name === "password_confirm") {
      setPasswordConfirm(value);
      /** 비밀번호 길이 제한 */
      if (value?.length < 8) {
        setPwdConfirmError("비밀번호는 8자리 이상으로 입력해주세요");
        /** 비밀번호와 비밀번호 확인 값 비교 */
      } else if (value !== password) {
        setPwdConfirmError(
          "비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요."
        );
      } else {
        setPwdConfirmError("");
      }
    }
  };
  return (
    <FormContainer>
      <FormCard>
        <p>회원 가입</p>
        <SubFormContainer>
          <FormBox>
            <FormLabel htmlFor="email">이메일</FormLabel>
            <FormInput
              type="email"
              name="email"
              id="email"
              required
              onChange={onChange}
            />
          </FormBox>
          {emailError && emailError?.length > 0 && (
            <FormBox>
              <ErrorBox>{emailError}</ErrorBox>
            </FormBox>
          )}
          <FormBox>
            <FormLabel htmlFor="password">비밀번호</FormLabel>
            <FormInput
              type="password"
              name="password"
              id="password"
              required
              onChange={onChange}
            />
          </FormBox>
          {pwdError && pwdError?.length > 0 && (
            <FormBox>
              <ErrorBox>{pwdError}</ErrorBox>
            </FormBox>
          )}
          <FormBox>
            <FormLabel>비밀번호 확인</FormLabel>
            <FormInput
              type="password"
              name="password_confirm"
              id="password_confirm"
              required
              onChange={onChange}
            />
          </FormBox>
          {pwdConfirmError && pwdConfirmError?.length > 0 && (
            <FormBox>
              <ErrorBox>{pwdConfirmError}</ErrorBox>
            </FormBox>
          )}
          <FormBox>
            계정이 이미 있으신가요?
            <LinkButton onClick={() => navigate("/signin")}>
              로그인 하기
            </LinkButton>
          </FormBox>
          <FormButton
            type="button"
            disabled={
              pwdError?.length > 0 ||
              emailError?.length > 0 ||
              pwdConfirmError.length > 0
            }
            onClick={signUpClick}
          >
            회원가입
          </FormButton>
        </SubFormContainer>
      </FormCard>
    </FormContainer>
  );
};

export default SignUp;
