import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>На Главную</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default App;
