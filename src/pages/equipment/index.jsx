import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Statistic } from "antd";
import ReactECharts from "echarts-for-react";
import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";
import ChinaMapChart from "@/components/ChinaMapChart/index";
import useOption from "./useOption";
import CitySalesTop from "./CitySalesTop";
import RealTimeAlarm from "./RealTimeAlarm";
import StatisticsGroup from "./StatisticsGroup";

function DashboardApp() {
  console.log("parent render");
  const [active, setActive] = useState(1);
  const { trendOption, handleSwitchTrend } = useOption();
  const top5Option = {
    grid: {
      top: "10%",
    },
    title: {
      text: "重点区域 TOP5 · 单位：万元",
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
      data: ["01 华东", "02 华南", "03 华北", "04 西南", "05 华中"].reverse(),
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
        data: [18203, 23489, 29034, 104970, 131744],
      },
    ],
  };
  /**
   * 切换屏幕
   * @param {*} id
   */
  const handleSwitch = (id) => {
    setActive(id);
    handleSwitchTrend(id);
  };
  return (
    <>
      <div className={style.contentWrapper}>
        <StatisticsGroup />
        <div className={style.chinaWrapper}>
          <div className={style.chinaHead}>
            <span className={style.titleWrapper}>
              <span className={style.titleIcon}></span>
              <span className={style.title}>区域销售分布 · 中国地图</span>
            </span>
            <span>
              <span className={style.chinaCity}>销售额分布</span>
              <span className={style.chinaCity}>重点城市</span>
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
              <span className={style.title}>
                月度销售趋势 · 近 12 个月（万元）
              </span>
            </span>
            <span>
              <Button
                className={clsx(style.tabButton, {
                  [style.buttonActive]: active === 1,
                })}
                onClick={() => handleSwitch(1)}
              >
                近3月
              </Button>
              <Button
                className={clsx(style.tabButton, {
                  [style.buttonActive]: active === 2,
                })}
                onClick={() => handleSwitch(2)}
              >
                近6月
              </Button>
              <Button
                className={clsx(style.tabButton, {
                  [style.buttonActive]: active === 3,
                })}
                onClick={() => handleSwitch(3)}
              >
                全年
              </Button>
            </span>
          </div>
          <div className={style.trendStatistics}>
            <div className={style.statisticsCard}>
              <div className={style.statisticsWrapper}>
                <div className={style.statisticsHead}>
                  <span className={style.walletLabel}>销售峰值</span>
                </div>
                <div
                  className={clsx(style.walletValue, style.statisticsContent)}
                >
                  3260
                  <sub className={style.walletSub}>万元</sub>
                </div>
              </div>
            </div>
            <div className={style.statisticsCard}>
              <div className={style.statisticsWrapper}>
                <div className={style.statisticsHead}>
                  <span className={style.walletLabel}>同比增长</span>
                </div>
                <div
                  className={clsx(style.walletValue, style.statisticsContent)}
                >
                  +21.4%
                  <sub className={style.walletSub}></sub>
                </div>
              </div>
            </div>
            <div className={style.statisticsCard}>
              <div className={style.statisticsWrapper}>
                <div className={style.statisticsHead}>
                  <span className={style.walletLabel}>目标完成</span>
                </div>
                <div
                  className={clsx(style.walletValue, style.statisticsContent)}
                >
                  92.6%
                  <sub className={style.walletSub}></sub>
                </div>
              </div>
            </div>
          </div>
          <div className={style.trendContent}>
            <ReactECharts
              option={trendOption}
              style={{ width: "100%", height: 322 }}
              notMerge
            />
          </div>
        </div>
        <CitySalesTop />
        <RealTimeAlarm />
      </div>
    </>
  );
}

export default DashboardApp;
