import { useState, useRef, useEffect, useImperativeHandle } from "react";
import { Button, Progress, Statistic, Flex } from "antd";
// import clsx from "clsx";
import ReactECharts from "echarts-for-react";

//内部依赖
import style from "./index.module.scss";
import useOption from "../../useOption";
import CustomTitle from "@/components/CustomTitle/index";

const StatisticTitle = (props) => {
  const { title, style } = props;
  return <span style={style}>{title}</span>;
};

export const TransformationApp = () => {
  const { transformationOption } = useOption();

  return (
    <div className={style.contentWrapper}>
      <div className={style.head}>
        <CustomTitle title="转化漏斗·访问到支付" subTitle="整体转化率3.68%" />
      </div>
      <div className={style.content}>
        <div className={style.echartsWrapper}>
          <ReactECharts
            option={transformationOption}
            style={{ width: "100%", height: 240 }}
            notMerge
          />
        </div>
        <div className={style.descWrapper}>
          <Flex style={{ marginBottom: 10 }}>
            <Statistic
              title={
                <StatisticTitle
                  title="访问落地"
                  style={{ color: "#E8F4FF", fontSize: "13px" }}
                />
              }
              value={4506260}
              valueStyle={{ color: "#22d3ee", fontSize: "11px" }}
              suffix="100%"
            />
          </Flex>
          <Flex style={{ marginBottom: 10 }}>
            <Statistic
              title={
                <StatisticTitle
                  title="商品浏览"
                  style={{ color: "#E8F4FF", fontSize: "13px" }}
                />
              }
              value={4506260}
              valueStyle={{ color: "#3B82F6", fontSize: "11px" }}
              suffix="62.4%"
            />
          </Flex>
          <Flex style={{ marginBottom: 10 }}>
            <Statistic
              title={
                <StatisticTitle
                  title="加入购物车"
                  style={{ color: "#E8F4FF", fontSize: "13px" }}
                />
              }
              value={4506260}
              valueStyle={{ color: "#A855F7", fontSize: "11px" }}
              suffix="28.6%"
            />
          </Flex>
          <Flex style={{ marginBottom: 10 }}>
            <Statistic
              title={
                <StatisticTitle
                  title="提交订单"
                  style={{ color: "#E8F4FF", fontSize: "13px" }}
                />
              }
              value={4506260}
              valueStyle={{ color: "#F59E0B", fontSize: "11px" }}
              suffix="12.8%"
            />
          </Flex>
          <Flex style={{ marginBottom: 10 }}>
            <Statistic
              title={
                <StatisticTitle
                  title="支付成功"
                  style={{ color: "#E8F4FF", fontSize: "13px" }}
                />
              }
              value={4506260}
              valueStyle={{ color: "#22E3A5", fontSize: "11px" }}
              suffix="3.68%"
            />
          </Flex>
        </div>
      </div>
    </div>
  );
};
export default TransformationApp;
