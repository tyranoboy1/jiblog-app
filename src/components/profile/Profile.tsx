import "components/profile/styles/profile.css";
import { app } from "firebaseApp";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

/** Profile => 프로필 화면 컴포넌트 */
const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  /** 사용자가 로그아웃 할때 호출 */
  const onSignOut = async () => {
    try {
      /** Firebase 인증 객체를 가져옴 */
      const auth = getAuth(app);
      /** signOut 함수를 호출하여 사용자 로그아웃 */
      await signOut(auth);
      toast.success("로그아웃 되었습니다.");
      /** 로그아웃 시 경로 설정 */
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{user?.email}</div>
          <div className="profile__name">{user?.displayName || "사용자"}</div>
        </div>
      </div>
      <div role="presentation" className="profile__logout" onClick={onSignOut}>
        로그아웃
      </div>
    </div>
  );
};

export default Profile;
