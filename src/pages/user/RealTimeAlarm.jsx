import { useState, useRef, useEffect, useImperativeHandle } from "react";
import clsx from "clsx";
import { Button, Flex, Progress } from "antd";
//内部依赖
import style from "./index.module.scss";

export const RealTimeAlarm = () => {
  return (
    <div className={style.citySalesTopWrapperTwo}>
      <div className={style.head}>
        <span className={style.titleWrapper}>
          <span className={style.titleIcon}></span>
          <span className={style.title}>TOP门店·销售额排行（万元）</span>
        </span>
        <span className={style.rightTitle}>数据截至14:30·每5分钟更新</span>
      </div>
      <div className={style.content}>
        <div className={style.topItem}>
          <span className={style.serialNumber}>1</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>上海·南京西路旗舰店</span>
            <span className={style.subAdress}>华东大区·直营门店</span>
          </span>
          <Flex style={{ width: 537, marginLeft: 10 }}>
            <Progress
              percent={22.4}
              size={[395, 8]}
              strokeColor="#22D3EE"
              showInfo={false}
            />
          </Flex>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥1286.4万</span>
            <span className={style.salesRatio}>▲22.4%</span>
          </span>
        </div>
        <div className={style.topItem}>
          <span className={style.serialNumber}>2</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>北京·国贸CBD店</span>
            <span className={style.subAdress}>华北大区·直营门店</span>
          </span>
          <Flex style={{ width: 537, marginLeft: 10 }}>
            <Progress
              percent={16.8}
              size={[395, 8]}
              strokeColor="#22D3EE"
              showInfo={false}
            />
          </Flex>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥1024.8万</span>
            <span className={style.salesRatio}>▲16.8%</span>
          </span>
        </div>
        <div className={style.topItem}>
          <span className={style.serialNumber}>3</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>深圳·福田中心店</span>
            <span className={style.subAdress}>华南大区·加盟门店</span>
          </span>
          <Flex style={{ width: 537, marginLeft: 10 }}>
            <Progress
              percent={11.2}
              size={[395, 8]}
              strokeColor="#22D3EE"
              showInfo={false}
            />
          </Flex>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥968.2万</span>
            <span className={style.salesRatio}>▲11.2%</span>
          </span>
        </div>
        <div className={style.topItem}>
          <span className={style.serialNumber}>4</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>成都·太古里店</span>
            <span className={style.subAdress}>西南大区·直营门店</span>
          </span>
          <Flex style={{ width: 537, marginLeft: 10 }}>
            <Progress
              percent={8.4}
              size={[395, 8]}
              strokeColor="#22D3EE"
              showInfo={false}
            />
          </Flex>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥862.6万</span>
            <span className={style.salesRatio}>▲8.4%</span>
          </span>
        </div>
        <div className={style.topItem}>
          <span className={style.serialNumber}>5</span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>杭州·湖滨银泰店</span>
            <span className={style.subAdress}>华东大区·加盟门店</span>
          </span>
          <Flex style={{ width: 537, marginLeft: 10 }}>
            <Progress
              percent={4.6}
              size={[395, 8]}
              strokeColor="#22D3EE"
              showInfo={false}
            />
          </Flex>
          <span className={style.salesWrapper}>
            <span className={style.salesValue}>¥748.2万</span>
            <span className={clsx(style.salesRatio)}>▲4.6%</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default RealTimeAlarm;
