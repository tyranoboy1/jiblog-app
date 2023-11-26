import { createContext, useState } from "react";
import { IThemeContextProps } from "context/interface/context.interface";
/** 테마 Context 객체 생성 */
const ThemeContext = createContext({
  theme: "light",
  toggleMode: () => {},
});
/** 테마 Context Provider 생성 */
export const ThemeContextProvider = ({ children }: IThemeContextProps) => {
  /** state값으로 담아서 새로고침시 light 속성으로 초기화되기 때문에 로컬 스토리지로 관리 */
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );

  const toggleMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
