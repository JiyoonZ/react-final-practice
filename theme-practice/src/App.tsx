import Router from "./routes/Router";
import GlobalStyle from "./GlobalStyle";
import {ReactQueryDevtools} from "react-query/devtools";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import Toggler from "./Toggles";
import {darktheme, lighttheme} from "./theme";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darktheme : lighttheme}>
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
