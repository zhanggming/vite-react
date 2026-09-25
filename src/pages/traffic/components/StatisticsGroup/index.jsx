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
            <span className={style.walletLabel}>实时访问量</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            4286
            <sub className={style.walletSub}>次/分</sub>
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
            <span className={style.statusValue}>+6.2%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={creditCardIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>独立访客UV</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            182460
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
              累计
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+11.5%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={shoppingCartIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>平均停留时长</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            04:32
            <sub className={style.walletSub}>分:秒</sub>
          </div>
        </div>
        <div
          className={clsx(
            style.statisticsWrapper,
            style.statisticsWrapperRight,
          )}
        >
          <div className={clsx(style.statisticsHead)}>
            <span className={clsx(style.statusLabel)}>平稳</span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+0.8%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={rotateCcwIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>跳出率</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            38.4
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
            <span className={clsx(style.statusLabel, style.levelSuccess)}>
              改善
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingDown} className={style.walletIcon} />
            <span className={style.statusValue}>-2.1%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={targetIocn} className={style.walletIcon} />
            <span className={style.walletLabel}>整体转化率</span>
          </div>
          <div
            className={clsx(
              style.walletValue,
              style.statisticsContent,
              style.warningLabel,
            )}
          >
            3.68
            <sub className={style.walletSub}>0.42%</sub>
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
            <span className={style.statusValue}>+5.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatisticsGroup;
