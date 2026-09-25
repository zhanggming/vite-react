import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Statistic } from "antd";
import ReactECharts from "echarts-for-react";
import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";
import CustomProgress from "@/components/CustomProgress/index";
import CustomTitle from "@/components/CustomTitle/index";
import useOption from "../../useOption";

const SubTitle = (props) => {
  const [active, setActive] = useState(1);
  /**
   * 切换屏幕
   * @param {*} id
   */
  const handleSwitch = (id) => {
    console.log(props.handleSwitch,'props.handleSwitch')
    setActive(id);
    props.handleSwitch && props.handleSwitch(id);
  };
  return (
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
  );
};

export function ChannelApp() {
  const { trendOption, handleSwitchTrend } = useOption();
  const handleSwitch = (id) => {
    console.log('handleSwitch')
    handleSwitchTrend(id);
  };

  return (
    <div className={style.trendWrapper}>
      <div className={style.head}>
        <CustomTitle
          title="用户增长曲线·近12个月（万人）"
          subTitle={<SubTitle handleSwitch={handleSwitch}/>}
        />
      </div>
      <div className={style.content}>
        <div className={style.trendStatistics}>
          <div className={style.statisticsCard}>
            <div className={style.statisticsWrapper}>
              <div className={style.statisticsHead}>
                <span className={style.walletLabel}>累计用户</span>
              </div>
              <div className={clsx(style.walletValue, style.statisticsContent)}>
                1286
                <sub className={style.walletSub}>万</sub>
              </div>
            </div>
          </div>
          <div className={style.statisticsCard}>
            <div className={style.statisticsWrapper}>
              <div className={style.statisticsHead}>
                <span className={clsx(style.walletLabel)}>月均新增</span>
              </div>
              <div className={clsx(style.walletValue, style.statisticsContent,style.successLabel)}>
                42.8
                <sub className={style.walletSub}>万</sub>
              </div>
            </div>
          </div>
          <div className={style.statisticsCard}>
            <div className={style.statisticsWrapper}>
              <div className={style.statisticsHead}>
                <span className={clsx(style.walletLabel)}>同比增长</span>
              </div>
              <div className={clsx(style.walletValue, style.statisticsContent,style.warningLabel)}>
                16.8%
                <sub className={style.walletSub}></sub>
              </div>
            </div>
          </div>
        </div>
        <ReactECharts
          option={trendOption}
          style={{ width: "100%", height: 322 }}
          notMerge
        />
      </div>
    </div>
  );
}

export default ChannelApp;
