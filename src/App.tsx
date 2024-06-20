import { useContext, useEffect, useState } from "react";
import Router from "components/router/Router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/view/Loader";
import ThemeContext from "context/ThemeContext";
import { useDispatch } from "react-redux";
import { blogSlice } from "../src/redux/slices/blogSlice";

const App = () => {
  const context = useContext(ThemeContext);
  const dispatch = useDispatch();
  const auth = getAuth(app);

  /** firebase 로그인 여부를 관리하는 상태 값 */
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );
  /** auth를 체크하기 전에 띄어주는 loader 상태 */
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        dispatch(blogSlice.actions.setIsAuthenticated(true));
      } else {
        setIsAuthenticated(false);
        dispatch(blogSlice.actions.setIsAuthenticated(false));
      }
      setInit(true);
    });
  }, [auth, dispatch]);

  console.log("context.theme", context.theme);
  return (
    <div className={context.theme === "light" ? "white" : "dark"}>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </div>
  );
};

export default App;
