import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Progress, Statistic, Flex } from "antd";
// import clsx from "clsx";
import ReactECharts from "echarts-for-react";

//内部依赖
import style from "./index.module.scss";
import useOption from "../../useOption";
import CustomTitle from "@/components/CustomTitle/index";

const StatisticTitle = (props) => {
  const { title, style } = props;
  return <span style={style}>{title}</span>;
};

export const TransformationApp = () => {
  const { ageAndGenderoption } = useOption();

  return (
    <div className={style.contentWrapper}>
      <div className={style.head}>
        <CustomTitle title="年龄与性别分布（万人）" subTitle="整体转化率3.68%" />
      </div>
      <div className={style.content}>
        <div className={style.echartsWrapper}>
          <ReactECharts
            option={ageAndGenderoption}
            style={{ width: "100%", height: 286 }}
            notMerge
          />
        </div>
      </div>
    </div>
  );
};
export default TransformationApp;
