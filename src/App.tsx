import { useContext, useEffect, useState } from "react";
import Router from "components/router/Router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/view/Loader";
import ThemeContext from "context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { blogSlice } from "../src/redux/slices/blogSlice";
import { RootState } from "redux/slices";

const App = () => {
  const context = useContext(ThemeContext);
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const isAuthenticated = useSelector(
    (state: RootState) => state.blog.isAuthenticated
  );
  /** auth를 체크하기 전에 띄어주는 loader 상태 */
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(blogSlice.actions.setIsAuthenticated(true));
      } else {
        dispatch(blogSlice.actions.setIsAuthenticated(false));
      }
      setInit(true);
    });
  }, [auth, dispatch]);

  return (
    <div className={context.theme === "light" ? "white" : "dark"}>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </div>
  );
};

export default App;
