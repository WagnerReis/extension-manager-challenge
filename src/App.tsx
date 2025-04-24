import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "./contexts/ThemeContext";
export function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
