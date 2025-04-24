import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { darkTheme } from "./styles/theme/dark";

export function App() {
  console.log("aaaa");
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
