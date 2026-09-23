import { StrictMode, useEffect, useState, useRef } from "react";
import { RouterProvider, Outlet, NavLink,useLocation } from "react-router-dom";
import { useNavigate, } from "react-router";
import clsx from "clsx";
import style from "./index.module.scss";
export const LayoutApp = () => {
  console.log("LayoutApp render");
  const messageList = [
    "最新播报·华东区订单量环比+12.4% ｜ 华东仓设备在线率98.2% ｜ 14:28 已完成全量数据刷新",
    "最新播报·本月销售额2.86亿元，目标完成率 92.6% ｜ 华东区贡献 34.8% ｜ 14:30 已完成数据刷新",
    "最新播报·实时访问量 4,286 次/分，转化率 3.68% ｜ 社媒渠道环比 +20.9% ｜ 14:31 已完成数据刷新",
    "最新播报·累计用户1,286 万，7日留存 46.2% ｜ 25-30 岁人群占比 22.4% ｜ 14:29 已完成数据刷新",
    "最新播报·设备在线率 96.8%，故障设备 86 台 ｜ 华东机房 A 区温控已恢复 ｜ 14:30 已完成数据刷新",
  ];
  const navigate = useNavigate();
  const [active, setActive] = useState('/dashboard');
  const [message, setMessage] = useState(messageList[0]);
  const intervalStance = useRef(null);
  const location = useLocation();

  useEffect(() => {
    intervalStance.current = setInterval(() => {
      handleSwitchMessage();
    }, 2000);
    return () => {
      intervalStance.current && clearInterval(intervalStance.current);
    };
  }, []);
  useEffect(()=>{
    const pathname = location.pathname
    console.log(pathname,'pathname')
    setActive(pathname)
  },[])

  const handleSwitchMessage = () => {
    const index = Math.floor(Math.random() * messageList.length);
    setMessage(messageList[index]);
  };
  /**
   * 切换屏幕
   * @param {*} path
   */
  const handleSwitch = (path) => {
    setActive(path);
    navigate(path || "/dashboard");
  };

  return (
    <>
      <div className={style.layoutWrapper}>
        <div className={style.layoutHeader}>
          <div className={style.titleWrapper}>
            <span className={style.title}>智慧运营数据中心 · 总览大屏</span>
            <span className={style.subTitle}>
              SMART OPS DATA WALL / SCENE OVERVIEW
            </span>
          </div>
          <div className={style.navWrapper}>
            <div
              className={clsx(style.navItem, {
                [style.navActive]: active === '/dashboard',
              })}
              onClick={() => handleSwitch("/dashboard")}
            >
              总览
            </div>
            <div
              className={clsx(style.navItem, {
                [style.navActive]: active === '/sales',
              })}
              onClick={() => handleSwitch("/sales")}
            >
              销售
            </div>
            <div
              className={clsx(style.navItem, {
                [style.navActive]: active === '/traffic',
              })}
              onClick={() => handleSwitch("/traffic")}
            >
              流量
            </div>
            <div
              className={clsx(style.navItem, {
                [style.navActive]: active === '/user',
              })}
              onClick={() => handleSwitch("/user")}
            >
              用户
            </div>
            <div
              className={clsx(style.navItem, {
                [style.navActive]: active === '/equipment',
              })}
              onClick={() => handleSwitch(5, "/equipment")}
            >
              设备
            </div>
          </div>
          <div className={style.statusWrapper}>
            <div className={style.statusContent}>
              <span className={style.statusIcon}></span>
              <span className={style.statusText}>数据实时刷新中</span>
            </div>
            <div className={style.statusTime}>2025-06-18 14:32:08</div>
          </div>
        </div>
        <div className={style.layoutContent}>
          <Outlet />
        </div>
        <div className={style.layoutFooter}>
          <span className={style.systemHealf}>
            系统运行正常·数据源8/8已连接
          </span>
          <span className={style.systemMessage}>{message}</span>
          <span className={style.systemUpdateTime}>最近更新14:32:08</span>
        </div>
      </div>
    </>
  );
};

export default LayoutApp;
