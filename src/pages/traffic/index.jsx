import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Statistic } from "antd";
import ReactECharts from "echarts-for-react";
// import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";
import useOption from "./useOption";
import StatisticsGroup from "./components/StatisticsGroup/index";
import TransformationApp from "./components/transformation/index";
import HeatmapApp from "./components/heatmap/index";
import ChannelApp from "./components/channel/index";
import ChinaMapApp from "./components/ChinaMap/index";

function DashboardApp() {
  console.log("parent render");
  return (
    <>
      <div className={style.contentWrapper}>
        <StatisticsGroup />
        <ChinaMapApp />
        <ChannelApp />
        <TransformationApp />
        <HeatmapApp />
      </div>
    </>
  );
}

export default DashboardApp;
