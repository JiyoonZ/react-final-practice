import Router from "./routes/Router";
import GlobalStyle from "./GlobalStyle";
import {ReactQueryDevtools} from "react-query/devtools";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import Toggler from "./Toggles";
import {darktheme, lighttheme} from "./theme";
import {useRecoilValue} from "recoil";
import {isDarkAtom} from "./atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darktheme : lighttheme}>
        <GlobalStyle />

        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
