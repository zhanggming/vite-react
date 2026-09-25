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
      <span className={style.chinaCity}>用户密度</span>
      <span className={style.chinaCity}>重点城市</span>
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
      text: "用户地域TOP5·单位：万人",
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
      data: ["01 广东", "02 江苏", "03 浙江", "04 山东", "05 河南"].reverse(),
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
        data: [88.4, 106.2, 128.6, 142.8, 186.4],
      },
    ],
  };
  return (
    <div className={style.chinaWrapper}>
      <div className={style.head}>
        <CustomTitle title="地域分布·用户覆盖热力" subTitle={<SubTitle/>} />
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
