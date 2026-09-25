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
        近7天
      </Button>
      <Button
        className={clsx(style.tabButton, {
          [style.buttonActive]: active === 2,
        })}
        onClick={() => handleSwitch(2)}
      >
        近30天
      </Button>
      <Button
        className={clsx(style.tabButton, {
          [style.buttonActive]: active === 3,
        })}
        onClick={() => handleSwitch(3)}
      >
        本季度
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
          title="故障趋势·近30天（起）"
          subTitle={<SubTitle handleSwitch={handleSwitch}/>}
        />
      </div>
      <div className={style.content}>
        <div className={style.trendStatistics}>
          <div className={style.statisticsCard}>
            <div className={style.statisticsWrapper}>
              <div className={style.statisticsHead}>
                <span className={style.walletLabel}>累计故障</span>
              </div>
              <div className={clsx(style.walletValue, style.statisticsContent)}>
                268
                <sub className={style.walletSub}>起</sub>
              </div>
            </div>
          </div>
          <div className={style.statisticsCard}>
            <div className={style.statisticsWrapper}>
              <div className={style.statisticsHead}>
                <span className={clsx(style.walletLabel)}>平均修复</span>
              </div>
              <div className={clsx(style.walletValue, style.statisticsContent,style.successLabel)}>
                42
                <sub className={style.walletSub}>分钟</sub>
              </div>
            </div>
          </div>
          <div className={style.statisticsCard}>
            <div className={style.statisticsWrapper}>
              <div className={style.statisticsHead}>
                <span className={clsx(style.walletLabel)}>环比变化</span>
              </div>
              <div className={clsx(style.walletValue, style.statisticsContent,style.warningLabel)}>
                -12.4
                <sub className={style.walletSub}>%</sub>
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
