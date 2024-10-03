import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nProvider } from "./i18n/i18n-context.tsx";
import { detectLanguage } from "./i18n/server.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
const lng = await detectLanguage();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider language={lng}>
      <RouterProvider router={router} />
    </I18nProvider>
  </StrictMode>,
);
