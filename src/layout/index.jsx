import { StrictMode, useState } from "react";
import { RouterProvider,Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import clsx from "clsx";
import style from "./index.module.scss";
export const LayoutApp = () => {
  console.log("LayoutApp render");
   const navigate = useNavigate();
  const [active, setActive] = useState(1);

  /**
   * 切换屏幕
   * @param {*} id 
   */
  const handleSwitch = (id,path)=>{
    setActive(id)
    navigate(path || '/dashboard');
  }

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
            <div className={clsx(style.navItem, {[style.navActive]: active===1,})} onClick={()=>handleSwitch(1,'/dashboard')}>总览</div>
            <div className={clsx(style.navItem, {[style.navActive]: active===2,})} onClick={()=>handleSwitch(2,'/sales')}>销售</div>
            <div className={clsx(style.navItem, {[style.navActive]: active===3,})} onClick={()=>handleSwitch(3,'/traffic')}>流量</div>
            <div className={clsx(style.navItem, {[style.navActive]: active===4,})} onClick={()=>handleSwitch(4,'/user')}>用户</div>
            <div className={clsx(style.navItem, {[style.navActive]: active===5,})} onClick={()=>handleSwitch(5,'/equipment')}>设备</div>
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
      </div>
    </>
  );
};

export default LayoutApp;
