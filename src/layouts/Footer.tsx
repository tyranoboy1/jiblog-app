import { BsSun, BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

/** Footer => footer컴포넌트 */
const Footer = () => {
  const context = useContext(ThemeContext);
  return (
    <footer>
      <div>
        {context.theme === "light" ? (
          <BsSun onClick={context.toggleMode} className="footer__theme-btn" />
        ) : (
          <BsMoonFill
            onClick={context.toggleMode}
            className="footer__theme-btn"
          />
        )}
      </div>
    </footer>
  );
};

export default Footer;
