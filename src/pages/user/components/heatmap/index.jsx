import { useState, useRef, useEffect, useImperativeHandle } from "react";
// import clsx from "clsx";
import { Button, Flex, Progress } from "antd";
import ReactECharts from "echarts-for-react";
//内部依赖
import style from "./index.module.scss";
import CustomTitle from "@/components/CustomTitle/index";

export const HeatmapAPP = () => {
  const heatmapOption = {
    tooltip: {
      trigger: "axis",
    },
    // legend: {
    //     data: [
    //         {
    //             name: "男性",
    //             icon: 'rect',
    //             textStyle: {
    //                 color: "#8FAFD6",
    //                 fontSize: 11,
    //             },
    //             itemStyle: {
    //                 color: "#22D3EE"
    //             },
    //         },
    //     ],
    // },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "5%",
      top: "5%",
    },
    xAxis: {
      type: "category",
      data: ["00:00", "08:00", "16:00", "24:00"],
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#5C7CA8",
        fontSize: 11,
      },
    },
    yAxis: {
      type: "value",
      name: "",
      min: 0,
      // max: 250,
      // interval: 50,
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: "#5C7CA8",
        fontSize: 11,
      },
    },
    series: [
      {
        name: "男性",
        type: "bar",
        data: [80, 70, 60, 50, 30, 20],
        itemStyle: {
          color: "#22D3EE",
        },
        barWidth: 9,
      },
    ],
  };
  return (
    <div className={style.contentWrapper}>
      <div className={style.head}>
        <CustomTitle
          title="用户活跃度·24小时分布（万人）"
          subTitle="DAU 386,420"
        />
      </div>
      <div className={style.content}>
        <div className={style.echartsWrapper}>
          <ReactECharts
            option={heatmapOption}
            style={{ width: "100%", height: 286 }}
            notMerge
          />
        </div>
      </div>
    </div>
  );
};
export default HeatmapAPP;
