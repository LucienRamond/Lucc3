import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./index.scss";
import App from "./App.tsx";
import ThemeProvider from "./providers/ThemeProvider.tsx";
import ContentProvider from "./providers/ContentProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </ThemeProvider>
  </StrictMode>
);
