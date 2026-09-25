import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Progress } from "antd";
import clsx from "clsx";
import ReactECharts from "echarts-for-react";
//内部依赖
import style from "./index.module.scss";

export const CitySalesTop = () => {
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
        name: "品类销售占比",
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
          { value: 34.4, name: "数码家电", itemStyle: { color: "#22D3EE" } },
          { value: 26.2, name: "服装美妆", itemStyle: { color: "#3B82F6" } },
          { value: 18.6, name: "家居百货", itemStyle: { color: "#A855F7" } },
          { value: 12.4, name: "食品生鲜", itemStyle: { color: "#F59E0B" } },
          { value: 8.4, name: "运动户外", itemStyle: { color: "#22E3A5" } },
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
              text: "¥2.86亿",
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
              text: "总销售额",
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
    <div className={style.citySalesTopWrapper}>
      <div className={style.head}>
        <span className={style.titleWrapper}>
          <span className={style.titleIcon}></span>
          <span className={style.title}>品类销售占比·近30天</span>
        </span>
        <span className={style.rightTitle}>共5个主力品类</span>
      </div>
      <div className={style.content}>
        <div className={style.ratioECharts}>
          <ReactECharts
            option={ratioOption}
            style={{ width: "100%", height: 240 }}
            notMerge
          />
        </div>
        <div className={style.ratioWrapper}>
          <div className={style.topItem}>
            <span className={style.serialNumber}></span>
            <span className={style.adressWrapper}>
              <span className={style.adressName}>数码家电</span>
            </span>
            <Progress percent={34.3} size={['100%', 8]} strokeColor="#22D3EE" />
            <span className={style.salesWrapper}>
              <span className={style.salesValue}>¥9842万</span>
            </span>
          </div>
          <div className={style.topItem}>
            <span
              className={clsx(style.serialNumber, style.clothingColor)}
            ></span>
            <span className={style.adressWrapper}>
              <span className={style.adressName}>服饰美妆</span>
            </span>
            <Progress percent={26.2} size={['100%', 8]} strokeColor="#3B82F6" />
            <span className={style.salesWrapper}>
              <span className={style.salesValue}>¥7496万</span>
            </span>
          </div>
          <div className={style.topItem}>
            <span
              className={clsx(style.serialNumber, style.furnitureColor)}
            ></span>
            <span className={style.adressWrapper}>
              <span className={style.adressName}>家居百货</span>
            </span>
            <Progress percent={18.6} size={['100%', 8]} strokeColor="#A855F7" />
            <span className={style.salesWrapper}>
              <span className={style.salesValue}>¥623.2万</span>
            </span>
          </div>
          <div className={style.topItem}>
            <span className={clsx(style.serialNumber, style.foodColor)}></span>
            <span className={style.adressWrapper}>
              <span className={style.adressName}>食品生鲜</span>
            </span>
            <Progress percent={12.4} size={['100%', 8]} strokeColor="#F59E0B" />
            <span className={style.salesWrapper}>
              <span className={style.salesValue}>¥512.8万</span>
            </span>
          </div>
          <div className={style.topItem}>
            <span
              className={clsx(style.serialNumber, style.exerciseColor)}
            ></span>
            <span className={style.adressWrapper}>
              <span className={style.adressName}>运动户外</span>
            </span>
            <Progress percent={8.4} size={['100%', 8]} strokeColor="#22E3A5" />
            <span className={style.salesWrapper}>
              <span className={style.salesValue}>¥428.4万</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CitySalesTop;
