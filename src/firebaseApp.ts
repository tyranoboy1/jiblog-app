import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";

/** FirebaseApp 타입의 전역 변수 app 선언 */
export let app: FirebaseApp;

/** Firebase 프로젝트의 구성 객체
 * 환경 변수를 통해 관리
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APP_ID,
};

try {
  /** 이미 생성된 firebase 인스턴스가 있는지 확인하고 있으면 해당 인스턴스 사용 */
  app = getApp("app");
} catch (e) {
  /** 없으면 새로 생성 */
  app = initializeApp(firebaseConfig, "app");
}

/** Firebase 애플리케이션 초기화 */
const firebase = initializeApp(firebaseConfig);

/** Firebase Firestore 인스턴스를 가져와서 내보냄 */
export const db = getFirestore(app);

export default firebase;
