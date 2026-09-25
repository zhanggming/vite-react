import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Statistic } from "antd";
import ReactECharts from "echarts-for-react";
// import clsx from "clsx";
//内部依赖
import style from "./index.module.scss";
import CustomProgress from "@/components/CustomProgress/index";
import CustomTitle from '@/components/CustomTitle/index'
export function ChannelApp() {
  return (
    <div className={style.trendWrapper}>
      <div className={style.head}>
        <CustomTitle title='来源渠道分布·今日累计' subTitle='总访问量4506260'/>
      </div>
      <div className={style.content}>
        <CustomProgress
          label="自然搜索"
          value="28.6"
          strokeColor="#22D3EE"
          number="1286420"
          style={{ height: 44, marginBottom: 20 }}
        />
        <CustomProgress
          label="社交媒体"
          value="20.9"
          strokeColor="#3B82F6"
          number="942860"
          style={{ height: 44, marginBottom: 20 }}
        />
        <CustomProgress
          label="直接访问"
          value="17.9"
          strokeColor="#A855F7"
          number="806240"
          style={{ height: 44, marginBottom: 20 }}
        />
        <CustomProgress
          label="内容推荐"
          value="14.4"
          strokeColor="#F59E0B"
          number="648320"
          style={{ height: 44, marginBottom: 20 }}
        />
        <CustomProgress
          label="外链跳转"
          value="10.8"
          strokeColor="#22E3A5"
          number="486180"
          style={{ height: 44, marginBottom: 20 }}
        />
        <CustomProgress
          label="付费广告"
          value="7.4"
          strokeColor="#5C7CA8"
          number="336240"
          style={{ height: 44, marginBottom: 20 }}
        />
      </div>
    </div>
  );
}

export default ChannelApp;
