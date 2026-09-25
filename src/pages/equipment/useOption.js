
import { useState } from 'react'


export const useOption = () => {
    const trendOptionDefault = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [
                {
                    name: "故障数",
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
                    name: "告警数",
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
            data: ['6-01', '6-02', '6-03', '6-04', '6-05', '6-06', '6-07'],
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
                formatter: '{value}'
            },
        },
        series: [
            {
                name: '告警数',
                smooth: true,
                type: 'line',
                stack: 'Total',
                data: [750, 1500, 1500, 1700, 1800, 2000, 1600, 1300, 1500, 1200, 1100, 1000, 750, 750, 1500, 1500, 1700, 1800, 2000, 1600, 1300, 1500, 1200, 1100, 1000, 750, 750, 1500, 1500, 1700, 1800, 2000, 1600, 1300, 1500, 1200, 1100, 1000, 750,],
                areaStyle: {
                    color: "rgba(168, 85, 247, 0.14)",
                },
                lineStyle: {
                    type: "dashed",
                    color: "#A855F7"
                }
            },
            {
                name: '故障数',
                smooth: true,
                type: 'line',
                stack: 'Total',
                data: [850, 1700, 1700, 2000, 2200, 1700, 1500, 1700, 1500, 1300, 1200, 850, 850, 1700, 1700, 2000, 2200, 1700, 1500, 1700, 1500, 1300, 1200, 850, 850, 1700, 1700, 2000, 2200, 1700, 1500, 1700, 1500, 1300, 1200, 850],
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
            const data = [];
            for (let i = 0; i < 30; i++) {
                data.push('06-' + (i + 1))
            }
            setTrendOption({
                ...trendOptionDefault,
                xAxis: {
                    ...trendOptionDefault.xAxis,
                    data: data
                }
            })
        }
        if (type === 3) {
            setTrendOption({
                ...trendOptionDefault,
                xAxis: {
                    ...trendOptionDefault.xAxis,
                    data: ['4月', '5月', '6月']
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