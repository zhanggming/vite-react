import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Statistic } from "antd";
import ReactECharts from "echarts-for-react";
// import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";
import ChinaMapChart from "@/components/ChinaMapChart/index";
import CustomTitle from "@/components/CustomTitle/index";

const SubTitle = () => {
  return (
    <span>
      <span className={style.chinaCity}>访客密度</span>
      <span className={style.chinaCity}>高频城市</span>
    </span>
  );
};

function ChinaMapApp() {
  console.log("ChinaMapApp render");

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
    <div className={style.chinaWrapper}>
      <div className={style.head}>
        <CustomTitle title="访客地图·实时来源分布" subTitle={<SubTitle/>} />
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
  );
}

export default ChinaMapApp;
