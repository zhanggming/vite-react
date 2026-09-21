import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button } from "antd";
import style from "./index.module.scss";
function DashboardApp() {
  console.log("parent render");

  return (
    <>
      <div className={style.contentWrapper}>
        销售
      </div>
    </>
  );
}

export default DashboardApp;
