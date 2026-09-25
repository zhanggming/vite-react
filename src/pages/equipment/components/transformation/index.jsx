import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Progress, Statistic, Flex } from "antd";
// import clsx from "clsx";
import ReactECharts from "echarts-for-react";

//内部依赖
import style from "./index.module.scss";
import useOption from "../../useOption";
import CustomTitle from "@/components/CustomTitle/index";
import CustomProgress from "@/components/CustomProgress/index";

const StatisticTitle = (props) => {
  const { title, style } = props;
  return <span style={style}>{title}</span>;
};

export const TransformationApp = () => {
  const ratioOption = {
    tooltip: {
      trigger: "item",
    },
    // legend: {
    //   top: "5%",
    //   left: "center",
    // },
    series: [
      {
        name: "设备状态",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 90.7, name: "正常运行", itemStyle: { color: "#22D3EE" } },
          { value: 5.4, name: "待机休眠", itemStyle: { color: "#3B82F6" } },
          { value: 3.2, name: "离线失联", itemStyle: { color: "#F59E0B" } },
          { value: 0.7, name: "故障待修", itemStyle: { color: "#FF4D6D" } },
        ],
      },
    ],
    //是原生图形元素组件。自定义图形，不依赖数据系列坐标系 添加水印、饼图中心文字、暂无数据提示或装饰性元素
    graphic: [
      {
        type: "group",
        left: "center",
        top: "center",
        children: [
          {
            type: "text",
            z: 100,
            // 相对于 group 中心向下偏移
            top: -10,
            style: {
              text: "12480",
              fontSize: 15, // 数值字体更大
              fontWeight: "bold",
              fill: "#E8F4FF", // 数值颜色突出
              textAlign: "center",
            },
          },
          {
            type: "text",
            z: 100,
            // 相对于 group 中心向上偏移
            top: 10,
            style: {
              text: "总设备",
              fontSize: 12,
              fill: "#5C7CA8",
              textAlign: "center",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className={style.contentWrapper}>
      <div className={style.head}>
        <CustomTitle title="设备状态分布·实时" subTitle="总设备12,480台" />
      </div>
      <div className={style.content}>
        <div className={style.echartsWrapper}>
          <ReactECharts
            option={ratioOption}
            style={{ width: "100%", height: 200 }}
            notMerge
          />
        </div>
        <div className={style.ratioWrapper}>
          <CustomProgress
            label="正常运行"
            value="90.7"
            strokeColor="#22D3EE"
            number="11318台"
            style={{ height: 44, marginBottom: 20 }}
          />
          <CustomProgress
            label="待机休眠"
            value="5.4"
            strokeColor="#3B82F6"
            number="674台"
            style={{ height: 44, marginBottom: 20 }}
          />
          <CustomProgress
            label="离线失联"
            value="3.2"
            strokeColor="#F59E0B"
            number="402台"
            style={{ height: 44, marginBottom: 20 }}
          />
          <CustomProgress
            label="故障待修"
            value="0.7"
            strokeColor="#FF4D6D"
            number="86台"
            style={{ height: 44, marginBottom: 20 }}
          />
        </div>
      </div>
    </div>
  );
};
export default TransformationApp;
