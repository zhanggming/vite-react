import { useState, useRef, useEffect, useImperativeHandle } from "react";
import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";

export const CitySalesTop = () => {
  return (
    <div className={style.citySalesTopWrapper}>
      <div className={style.head}>
        <span className={style.titleWrapper}>
          <span className={style.titleIcon}></span>
          <span className={style.title}>城市营收排行榜 · TOP5</span>
        </span>
        <span className={style.rightTitle}>每5分钟轮播更新</span>
      </div>
      <div className={style.content}>
        <div className={style.topItem}>
          <span className={style.serialNumber}>1</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>上海·南京西路旗舰店</span>
            <span className={style.subAdress}>华东大区·直营门店</span>
          </span>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥862.4万</span>
            <span className={style.salesRatio}>▲18.6%</span>
          </span>
        </div>
        <div className={style.topItem}>
          <span className={style.serialNumber}>2</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>北京·国贸CBD店</span>
            <span className={style.subAdress}>华北大区·直营门店</span>
          </span>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥748.6万</span>
            <span className={style.salesRatio}>▲12.4%</span>
          </span>
        </div>
        <div className={style.topItem}>
          <span className={style.serialNumber}>3</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>深圳·福田中心店</span>
            <span className={style.subAdress}>华南大区·加盟门店</span>
          </span>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥623.2万</span>
            <span className={style.salesRatio}>▲18.6%</span>
          </span>
        </div>
        <div className={style.topItem}>
          <span className={style.serialNumber}>4</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>成都·太古里店</span>
            <span className={style.subAdress}>西南大区·直营门店</span>
          </span>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥512.8万</span>
            <span className={style.salesRatio}>▲18.6%</span>
          </span>
        </div>
        <div className={style.topItem}>
          <span className={style.serialNumber}>5</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>杭州·湖滨银泰店</span>
            <span className={style.subAdress}>华东大区·加盟门店</span>
          </span>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥428.4万</span>
            <span className={clsx(style.salesRatio, style.salesRatioDown)}>
              ▼2.4%
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CitySalesTop;
