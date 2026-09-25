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
      <span className={style.chinaCity}>机房节点</span>
      <span className={style.chinaCity}>重点机房</span>
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
      text: "核心机房TOP5·单位：在线设备",
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
      data: ["01 上海SH-A", "02 北京BJ-A", "03 深圳GZ-A", "04 成都CD-A", "05 武汉WH-A"].reverse(),
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
        data: [1286, 1642, 2486, 2968, 3842],
      },
    ],
  };
  return (
    <div className={style.chinaWrapper}>
      <div className={style.head}>
        <CustomTitle title="机房地图·全国节点分布" subTitle={<SubTitle/>} />
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
