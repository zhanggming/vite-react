import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Statistic } from "antd";
import ReactECharts from "echarts-for-react";
// import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";


export function CustomTitle(props) {
  const { title, subTitle } = props;

  return (
    <div className={style.customTitle}>
      <span className={style.titleWrapper}>
        <span className={style.titleIcon}></span>
        <span className={style.title}>{title}</span>
      </span>
      <span className={style.subTitle}>{subTitle}</span>
    </div>
  );
}

export default CustomTitle;
