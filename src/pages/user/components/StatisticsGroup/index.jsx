import { useState, useRef, useEffect, useImperativeHandle } from "react";
import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";
import walletIcon from "@/assets/img/wallet.png";
import trendingUpIcon from "@/assets/img/trending-up.png";
import creditCardIcon from "@/assets/img/credit-card.png";
import shoppingCartIcon from "@/assets/img/shopping-cart.png";
import rotateCcwIcon from "@/assets/img/rotate-ccw.png";
import targetIocn from "@/assets/img/target.png";
import trendingDown from "@/assets/img/trending-down.png"

export const StatisticsGroup = () => {
  return (
    <div className={style.statisticsGroup}>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={walletIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>累计用户</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            1286
            <sub className={style.walletSub}>万人</sub>
          </div>
        </div>
        <div
          className={clsx(
            style.statisticsWrapper,
            style.statisticsWrapperRight,
          )}
        >
          <div className={clsx(style.statisticsHead)}>
            <span className={clsx(style.statusLabel)}>累计</span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+4.8%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={creditCardIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>今日新增</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            42860
            <sub className={style.walletSub}>人</sub>
          </div>
        </div>
        <div
          className={clsx(
            style.statisticsWrapper,
            style.statisticsWrapperRight,
          )}
        >
          <div className={clsx(style.statisticsHead)}>
            <span className={clsx(style.statusLabel, style.levelInfo)}>
              实时
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+12.6%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={shoppingCartIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>日活跃DAU</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            386420
            <sub className={style.walletSub}>人</sub>
          </div>
        </div>
        <div
          className={clsx(
            style.statisticsWrapper,
            style.statisticsWrapperRight,
          )}
        >
          <div className={clsx(style.statisticsHead)}>
            <span className={clsx(style.statusLabel)}>实时</span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+3.2%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={rotateCcwIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>用户平均年龄</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            28.6
            <sub className={style.walletSub}>岁</sub>
          </div>
        </div>
        <div
          className={clsx(
            style.statisticsWrapper,
            style.statisticsWrapperRight,
          )}
        >
          <div className={clsx(style.statisticsHead)}>
            <span className={clsx(style.statusLabel, style.levelSuccess)}>
              平稳
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingDown} className={style.walletIcon} />
            <span className={style.statusValue}>-持平</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={targetIocn} className={style.walletIcon} />
            <span className={style.walletLabel}>7日留存率</span>
          </div>
          <div
            className={clsx(
              style.walletValue,
              style.statisticsContent,
              style.warningLabel,
            )}
          >
            46.2
            <sub className={style.walletSub}>%</sub>
          </div>
        </div>
        <div
          className={clsx(
            style.statisticsWrapper,
            style.statisticsWrapperRight,
          )}
        >
          <div className={clsx(style.statisticsHead)}>
            <span className={clsx(style.statusLabel, style.levelWarning)}>
              达标
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+1.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatisticsGroup;
