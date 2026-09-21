import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import "./index.scss";
import router from "@/router.jsx";
//严格模式
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
