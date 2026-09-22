import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
// 1. 导入 GeoJSON 数据
import chinaGeoJson from "@/assets/100000.json";

const ChinaMapChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // 2. 注册地图数据
    echarts.registerMap("china", chinaGeoJson);

    // 3. 初始化图表实例
    chartInstance.current = echarts.init(chartRef.current);

    // 4. 定义配置项 (Option)
    const option = {
      backgroundColor: "transparent", // 整体深色背景
      geo: {
        // ... 底层阴影图层配置 (可叠加多个)
        map: "china",
        roam: false, // 禁止缩放平移
        silent: true, // 不响应鼠标事件
        itemStyle: {
          areaColor: "transparent", // 阴影色
          borderColor: "transparent",
        },
        zlevel: -1, // 层级最低
        // left: '10%',
        // right: '10%',
        // top:'1%',
        // bottom:'1%',
      },
      series: [
        {
          // 主地图图层
          type: "map",
          map: "china",
          zoom: 1.3,
          // aspectScale: 1, // 稍微拉宽
          label: { show: true, color: "#fff" },
          layoutCenter: ["50%", "50%"],
          layoutSize: "90%", // 撑满 110%
          itemStyle: {
            areaColor: "#0B2540", // 地图区域底色
            borderColor: "#1F4E7E", // 省份边框
            borderWidth: 1,
          },
          emphasis: {
            itemStyle: { areaColor: "#0B2540" }, // hover高亮色
          },
        },
        {
          // 重点城市散点图层
          type: "effectScatter",
          coordinateSystem: "geo",
          symbolSize: 12,
          rippleEffect: { brushType: "stroke", scale: 4, period: 3 }, // 涟漪动画
          itemStyle: {
            color: "#4CC9F0",
            shadowBlur: 10,
            shadowColor: "#4CC9F0",
          },
          data: [
            { name: "北京", value: [116.46, 39.92] },
            { name: "上海", value: [121.48, 31.22] },
            // ... 其他城市
          ],
        },
        {
          // 飞线图层
          type: "lines",
          coordinateSystem: "geo",
          effect: {
            show: true,
            period: 4, // 动画周期
            trailLength: 0.7, // 尾迹长度
            symbol: "arrow", // 箭头符号
            symbolSize: 3,
          },
          lineStyle: { color: "rgba(59, 130, 246, 0.18)", width: 1, curveness: 0.2 }, // 线条样式，curveness控制弧度
          data: [
            {
              coords: [
                [116.46, 39.92],
                [121.48, 31.22],
              ],
            }, // 北京 -> 上海
            // ... 其他飞线路径
          ],
        },
      ],
    };

    // 5. 设置配置项并渲染
    chartInstance.current.setOption(option);

    // 6. 监听窗口大小变化，自适应图表
    const handleResize = () => chartInstance.current?.resize();
    window.addEventListener("resize", handleResize);

    // 7. 组件卸载时清理
    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default ChinaMapChart;
