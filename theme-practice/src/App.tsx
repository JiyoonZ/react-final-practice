import Router from "./routes/Router";
import GlobalStyle from "./GlobalStyle";
import {ReactQueryDevtools} from "react-query/devtools";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import Toggler from "./Toggles";

const dark = {
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  accentColor: "#8c7ae6",
};
const light = {
  bgColor: "#f5f6fa",
  textColor: "#2f3640",
  accentColor: "#8c7ae6",
};
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? dark : light}>
        <GlobalStyle />
        <Toggler onClick={toggleTheme}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </Toggler>
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
