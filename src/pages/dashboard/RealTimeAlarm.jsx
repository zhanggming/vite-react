import { useState, useRef, useEffect, useImperativeHandle } from "react";
import clsx from "clsx";
import { Button } from "antd";
//内部依赖
import style from "./index.module.scss";

export const RealTimeAlarm = () => {
  const [active, setActive] = useState(1);
  /**
   * 切换
   * @param {*} id
   */
  const handleSwitch = (id) => {
    setActive(id);
  };
  return (
    <div className={style.realTimeAlarm}>
      <div className={style.head}>
        <span className={style.titleWrapper}>
          <span className={style.titleIcon}></span>
          <span className={style.title}>实时告警列表 · 5 条待处理</span>
        </span>
        <span>
          <Button
            className={clsx(style.tabButton, {
              [style.buttonActive]: active === 1,
            })}
            onClick={() => handleSwitch(1)}
          >
            全部
          </Button>
          <Button
            className={clsx(style.tabButton, {
              [style.buttonActive]: active === 2,
            })}
            onClick={() => handleSwitch(2)}
          >
            严重
          </Button>
          <Button
            className={clsx(style.tabButton, {
              [style.buttonActive]: active === 3,
            })}
            onClick={() => handleSwitch(3)}
          >
            警告
          </Button>
        </span>
      </div>
      <div className={style.content}>
        <div className={style.topItem}>
          <span className={clsx(style.serialNumber,style.bgDanger)}></span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>华东仓A区温控传感器离线</span>
            <span className={style.subAdress}>
              设备SN-AH-2381·触发时间14:26:41·已持续6分钟
            </span>
          </span>
          <span className={clsx(style.salesWrapper, style.levelDanger)}>
            严重
          </span>
        </div>
        <div className={style.topItem}>
          <span className={clsx(style.serialNumber,style.bgDanger)}></span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>支付网关响应超时（P95{'>'}1.2s）</span>
            <span className={style.subAdress}>
              服务gateway-pay·触发时间14:21:08·影响订单128笔
            </span>
          </span>
          <span className={clsx(style.salesWrapper, style.levelDanger)}>
            严重
          </span>
        </div>
        <div className={style.topItem}>
          <span className={clsx(style.serialNumber,style.bgWarning)}></span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>华南区订单量低于预警阈值15%</span>
            <span className={style.subAdress}>
              指标orders_hn·触发时间14:12:33·当前值1,286单/小时
            </span>
          </span>
          <span className={clsx(style.salesWrapper, style.levelWarning)}>
            警告
          </span>
        </div>
        <div className={style.topItem}>
          <span className={clsx(style.serialNumber,style.bgWarning)}></span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>数据同步任务延迟6分钟</span>
            <span className={style.subAdress}>
              任务sync-dw-02·触发时间13:58:20·预计14:40追平
            </span>
          </span>
          <span className={clsx(style.salesWrapper, style.levelWarning)}>
            警告
          </span>
        </div>
        <div className={style.topItem}>
          <span className={clsx(style.serialNumber)}></span>
          <span className={style.adressWrapper}>
            <span className={style.adressName}>上海节点CPU使用率恢复正常</span>
            <span className={style.subAdress}>
              服务web-sh-03·恢复时间13:47:02· 前使用率42%
            </span>
          </span>
          <span className={clsx(style.salesWrapper)}>
            已恢复
          </span>
        </div>
      </div>
    </div>
  );
};
export default RealTimeAlarm;
