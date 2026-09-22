
import { useState } from 'react'


export const useOption = () => {
    const trendOptionDefault = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [
                {
                    name: "访问量",
                    icon: 'circle',
                    textStyle: {
                        color: "#8FAFD6",
                        fontSize: 11,
                    },
                },
                {
                    name: "订单量",
                    icon: 'circle',
                    textStyle: {
                        color: "#8FAFD6",
                        fontSize: 11,
                    },
                },
            ],
            top: '10%',
            right: '5%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            axisLine: {
                show: false,
            },
            axisLabel: {
                color: "#5C7CA8",
                fontSize: 11,
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: "#122A4C"
                },
            },
            axisLabel: {
                color: "#5C7CA8",
                fontSize: 11,
                formatter: '{value}k'
            },
        },
        series: [
            {
                name: '订单量',
                smooth: true,
                type: 'line',
                stack: 'Total',
                data: [1, 2, 1, 1, 9, 2, 2],
                areaStyle: {
                    color: "rgba(168, 85, 247, 0.14)",
                },
                lineStyle: {
                    type: "dashed",
                    color: "#A855F7"
                }
            },
            {
                name: '访问量',
                smooth: true,
                type: 'line',
                stack: 'Total',
                data: [2, 1, 9, 2, 3, 3, 3],
                areaStyle: {
                    color: "rgba(34, 211, 238, 0.14)",
                },
                lineStyle: {
                    color: "#22D3EE"
                }
            },
        ]
    };

    const [trendOption, setTrendOption] = useState(trendOptionDefault)

    const handleSwitchTrend = (type) => {
        if (type === 1) {
            setTrendOption({
                ...trendOptionDefault,
            })
        }
        if (type === 2) {
            setTrendOption({
                ...trendOptionDefault,
                xAxis: {
                    ...trendOptionDefault.xAxis,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            })
        }
        if (type === 3) {
            setTrendOption({
                ...trendOptionDefault,
                xAxis: {
                    ...trendOptionDefault.xAxis,
                    data: ['第一周', '第二周', '第三周', '第四周']
                }
            })
        }
    }

    return {
        trendOption,
        handleSwitchTrend,
    }
}
export default useOption