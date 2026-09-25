import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Statistic } from "antd";
import ReactECharts from "echarts-for-react";
// import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";
import ChinaMapChart from "@/components/ChinaMapChart/index";
import useOption from "./useOption";
import StatisticsGroup from "./components/StatisticsGroup/index";
import CustomProgress from "@/components/CustomProgress/index";
import TransformationApp from './components/transformation/index'
import HeatmapApp from './components/heatmap/index'

function DashboardApp() {
  console.log("parent render");
  // const [active, setActive] = useState(1);
  // const { trendOption, handleSwitchTrend } = useOption();
  const top5Option = {
    grid: {
      top: "10%",
    },
    title: {
      text: "热力城市TOP5·单位：千次访问",
      textStyle: {
        color: "#8FAFD6",
        fontStyle: 12,
      },
      left: 0,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "value",
      // boundaryGap: [0, 0.01],
      show: false,
    },
    yAxis: {
      type: "category",
      data: ["01 北京", "02 上海", "03 广州", "04 深圳", "05 成都"].reverse(),
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#E8F4FF",
      },
    },
    series: [
      {
        name: "2011",
        type: "bar",
        barWidth: 5,
        showBackground: true,
        backgroundStyle: {
          color: "#122A4C",
        },
        itemStyle: {
          // #122A4C
          color: "#22D3EE",
        },
        label: {
          show: true,
          position: "right",
          offset: [0, -15],
          valueAnimation: true,
          color: "#E8F4FF",
        },
        data: [198.4, 246.2, 268.6, 342.8, 386.4],
      },
    ],
  };
  return (
    <>
      <div className={style.contentWrapper}>
        <StatisticsGroup />
        <div className={style.chinaWrapper}>
          <div className={style.chinaHead}>
            <span className={style.titleWrapper}>
              <span className={style.titleIcon}></span>
              <span className={style.title}>访客地图·实时来源分布</span>
            </span>
            <span>
              <span className={style.chinaCity}>访客密度</span>
              <span className={style.chinaCity}>高频城市</span>
            </span>
          </div>
          <div className={style.mapWrapper}>
            <ChinaMapChart />
          </div>
          <div className={style.topWrapper}>
            <ReactECharts
              option={top5Option}
              style={{ width: "100%", height: 374 }}
              notMerge
            />
          </div>
        </div>
        <div className={style.trendWrapper}>
          <div className={style.trendHead}>
            <span className={style.titleWrapper}>
              <span className={style.titleIcon}></span>
              <span className={style.title}>来源渠道分布·今日累计</span>
            </span>
            <span className={style.rightTitle}>总访问量4506260</span>
          </div>
          <div className={style.trendContent}>
            <CustomProgress
              label="自然搜索"
              value="28.6"
              strokeColor="#22D3EE"
              number="1286420"
              style={{ height: 44,marginBottom:20 }}
            />
            <CustomProgress
              label="社交媒体"
              value="20.9"
              strokeColor="#3B82F6"
              number="942860"
              style={{ height: 44,marginBottom:20 }}
            />
            <CustomProgress
              label="直接访问"
              value="17.9"
              strokeColor="#A855F7"
              number="806240"
              style={{ height: 44,marginBottom:20 }}
            />
            <CustomProgress
              label="内容推荐"
              value="14.4"
              strokeColor="#F59E0B"
              number="648320"
              style={{ height: 44,marginBottom:20 }}
            />
            <CustomProgress
              label="外链跳转"
              value="10.8"
              strokeColor="#22E3A5"
              number="486180"
              style={{ height: 44,marginBottom:20 }}
            />
             <CustomProgress
              label="付费广告"
              value="7.4"
              strokeColor="#5C7CA8"
              number="336240"
              style={{ height: 44,marginBottom:20 }}
            />
          </div>
        </div>
        <TransformationApp />
        <HeatmapApp />
      </div>
    </>
  );
}

export default DashboardApp;
