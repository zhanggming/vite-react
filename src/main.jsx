import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import "./index.scss";
import router from "@/router.jsx";
//严格模式
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        // 全局 token
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 6,
          fontSize: 14,
          colorBgContainer: "#0B3D91",
          colorText:"#E8F4FF"
        },
        // 组件级 token
        components: {},
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  </StrictMode>,
);
