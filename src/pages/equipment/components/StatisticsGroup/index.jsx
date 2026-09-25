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
            <span className={style.walletLabel}>设备在线率</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            96.8
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
            <span className={clsx(style.statusLabel)}>健康</span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+1.2%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={creditCardIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>在线设备</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            12078
            <sub className={style.walletSub}>台</sub>
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
              全量
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+1.2%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={shoppingCartIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>离线设备</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            402
            <sub className={style.walletSub}>台</sub>
          </div>
        </div>
        <div
          className={clsx(
            style.statisticsWrapper,
            style.statisticsWrapperRight,
          )}
        >
          <div className={clsx(style.statisticsHead)}>
            <span className={clsx(style.statusLabel)}>收缴</span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>-38台</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={rotateCcwIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>故障设备</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
           86
            <sub className={style.walletSub}>台</sub>
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
              告警
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingDown} className={style.walletIcon} />
            <span className={style.statusValue}>+12台</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={targetIocn} className={style.walletIcon} />
            <span className={style.walletLabel}>待处理告警</span>
          </div>
          <div
            className={clsx(
              style.walletValue,
              style.statisticsContent,
              style.warningLabel,
            )}
          >
            24
            <sub className={style.walletSub}>条</sub>
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
              跟进
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+5条</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatisticsGroup;
