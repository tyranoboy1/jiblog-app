import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "firebaseApp";
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
import { useDispatch } from "react-redux";
import blogSlice from "store/slices/blogSlice";
import ToastModal from "components/modal/ToastModal";

/** Login => 로그인 화면 컴포넌트 */
export const Login = () => {
  /** 에러 여부를 관리하는 상태변수 */
  const [emailError, setEmailError] = useState<string>("");
  const [pwdError, setPwdError] = useState<string>("");
  /** 이메일 관리하는 상태변수 */
  const [email, setEmail] = useState<string>("");
  /** 패스워드 관리하는 상태변수 */
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** 로그인 버튼 클릭 함수 */
  const loginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      /** Firebase 인증 객체를 가져옴 */
      const auth = getAuth(app);
      /** 이메일과 비밀번호를 사용하여 사용자를 로그인 */
      await signInWithEmailAndPassword(auth, email, password);

      dispatch(blogSlice.actions.setIsShowModal(true));
      navigate("/");
    } catch (error: any) {
      dispatch(blogSlice.actions.setIsShowModal(true));
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
        setPwdError("비밀번호는 8자리 이상 입력해주세요");
      } else {
        setPwdError("");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <FormCard>
          <p>로그인</p>
          <SubFormContainer>
            <FormBox>
              <FormLabel htmlFor="email">이메일</FormLabel>
              <FormInput
                type="email"
                name="email"
                id="email"
                required
                onChange={onChange}
                value={email}
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
                value={password}
              />
            </FormBox>
            {pwdError && pwdError?.length > 0 && (
              <FormBox>
                <ErrorBox>{pwdError}</ErrorBox>
              </FormBox>
            )}
            <FormBox>
              계정이 없으신가요?
              <LinkButton onClick={() => navigate("/signup")}>
                회원가입하기
              </LinkButton>
            </FormBox>
            <FormButton
              type="button"
              disabled={pwdError?.length > 0 || emailError?.length > 0}
              onClick={loginClick}
            >
              로그인
            </FormButton>
          </SubFormContainer>
        </FormCard>
      </FormContainer>
      <ToastModal text="로그인에 실패하였습니다. 다시 시도해주세요" />
    </>
  );
};
