import { useState } from "react";
import Router from "components/router/Router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Loader from "components/view/Loader";

function App() {
  const auth = getAuth(app);
  /** firebase 로그인 여부를 관리하는 상태 값 */
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );
  /** auth를 체크하기 전에 띄어주는 loader 상태 */
  const [init, setInit] = useState<boolean>(false);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);
  return (
    <>
      <ToastContainer />

      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
}

export default App;
