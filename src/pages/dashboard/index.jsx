import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button } from "antd";
import ReactECharts from "echarts-for-react";
import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";
import walletIcon from "@/assets/img/wallet.png";
import trendingUpIcon from "@/assets/img/trending-up.png";
import ChinaMapChart from "@/components/ChinaMapChart/index";
import useOption from './useOption'
import CitySalesTop from './CitySalesTop'
import RealTimeAlarm from './RealTimeAlarm'

function DashboardApp() {
  console.log("parent render");
  const [active, setActive] = useState(1);
  const {trendOption,handleSwitchTrend} = useOption()
  const option = {  
    grid: {
      left: 0,
      right: 0,
    },
    xAxis: {
      type: "category",
      show: false,
      boundaryGap: false,
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
    yAxis: {
      type: "value",
      show: false,
      // name: 8642.3,
      // nameLocation:'end'
    },
    series: [
      {
        data: [100, 150, 300, 350, 500, 550, 700, 750, 900, 1000],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          color: "#22D3EE",
          width: 2,
        },
      },
    ],
  };
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
    handleSwitchTrend(id)
  };
  return (
    <>
      <div className={style.dashboardWrapper}>
        <div className={style.totalRevenue}>
          <div className={style.head}>
            <span>
              <img src={walletIcon} className={style.walletIcon} />
              <span className={style.walletLabel}>今日总营收</span>
              <span className={style.walletValue}>
                8642.3
                <sub className={style.walletSub}>万元</sub>
              </span>
            </span>
            <span>
              <img src={trendingUpIcon} className={style.walletIcon} />
              <span className={style.statusValue}>+12.4%</span>
              <span className={style.statusLabel}>实时</span>
            </span>
          </div>
          <div className={style.content}>
            <ReactECharts
              option={option}
              style={{ width: "100%", height: 100 }}
              notMerge
            />
          </div>
        </div>
        <div className={style.chinaWrapper}>
          <div className={style.chinaHead}>
            <span className={style.titleWrapper}>
              <span className={style.titleIcon}></span>
              <span className={style.title}>区域经营分布 · 中国地图</span>
            </span>
            <span>
              <span className={style.chinaCity}>营收流入</span>
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
                实时趋势 · 访问量与订单量（24 小时）
              </span>
            </span>
            <span>
              <Button
                className={clsx(style.tabButton, {
                  [style.buttonActive]: active === 1,
                })}
                onClick={() => handleSwitch(1)}
              >
                今日
              </Button>
              <Button
                className={clsx(style.tabButton, {
                  [style.buttonActive]: active === 2,
                })}
                onClick={() => handleSwitch(2)}
              >
                近7日
              </Button>
              <Button
                className={clsx(style.tabButton, {
                  [style.buttonActive]: active === 3,
                })}
                onClick={() => handleSwitch(3)}
              >
                近30日
              </Button>
            </span>
          </div>
          <div className={style.trendContent}>
            <ReactECharts
              option={trendOption}
              style={{ width: "100%", height: 400 }}
              notMerge
            />
          </div>
        </div>
        <CitySalesTop/>
        <RealTimeAlarm/>
      </div>
    </>
  );
}

export default DashboardApp;
