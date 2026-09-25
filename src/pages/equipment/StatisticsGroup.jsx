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
            <span className={style.walletLabel}>本月销售额</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            2.866
            <sub className={style.walletSub}>亿元</sub>
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
            <span className={style.statusValue}>+12.4%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={creditCardIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>客户客单价</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            428.6
            <sub className={style.walletSub}>元</sub>
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
              稳定
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingUpIcon} className={style.walletIcon} />
            <span className={style.statusValue}>+3.4%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={shoppingCartIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>订单总量</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            66842
            <sub className={style.walletSub}>单</sub>
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
            <span className={style.statusValue}>+9.1%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={rotateCcwIcon} className={style.walletIcon} />
            <span className={style.walletLabel}>退货率</span>
          </div>
          <div className={clsx(style.walletValue, style.statisticsContent)}>
            1.82
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
              优化
            </span>
          </div>
          <div className={clsx(style.statisticsContent)}>
            <img src={trendingDown} className={style.walletIcon} />
            <span className={style.statusValue}>-0.3%</span>
          </div>
        </div>
      </div>
      <div className={style.statisticsCard}>
        <div className={style.statisticsWrapper}>
          <div className={style.statisticsHead}>
            <img src={targetIocn} className={style.walletIcon} />
            <span className={style.walletLabel}>目标完成率</span>
          </div>
          <div
            className={clsx(
              style.walletValue,
              style.statisticsContent,
              style.warningLabel,
            )}
          >
            92.6
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
            <span className={style.statusValue}>+5.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatisticsGroup;
