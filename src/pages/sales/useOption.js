
import { useState } from 'react'


export const useOption = () => {
    const trendOptionDefault = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [
                {
                    name: "今年",
                    icon: 'circle',
                    textStyle: {
                        color: "#8FAFD6",
                        fontSize: 11,
                    },
                    itemStyle: {
                        color: "#22D3EE"
                    },
                },
                {
                    name: "去年",
                    icon: 'circle',
                    textStyle: {
                        color: "#8FAFD6",
                        fontSize: 11,
                    },
                    itemStyle: {
                        color: "#A855F7"
                    },
                },
            ],
            top: '2%',
            right: '2%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['近1月', '近2月', '近3月'],
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
                name: '去年',
                smooth: true,
                type: 'line',
                stack: 'Total',
                data: [750, 1500, 1500, 1700, 1800, 2000, 1600, 1300, 1500, 1200, 1100, 1000, 750],
                areaStyle: {
                    color: "rgba(168, 85, 247, 0.14)",
                },
                lineStyle: {
                    type: "dashed",
                    color: "#A855F7"
                }
            },
            {
                name: '今年',
                smooth: true,
                type: 'line',
                stack: 'Total',
                data: [850, 1700, 1700, 2000, 2200, 1700, 1500, 1700, 1500, 1300, 1200, 850],
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
                    data: ['近1月', '近2月', '近3月', '近4月', '近5月', '近6月']
                }
            })
        }
        if (type === 3) {
            setTrendOption({
                ...trendOptionDefault,
                xAxis: {
                    ...trendOptionDefault.xAxis,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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