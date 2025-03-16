<template>
    <div ref="lineChart"></div>
</template>

<script setup lang="ts">
import { ref , onMounted } from 'vue'
import * as echarts from 'echarts';
const lineChart = ref()
const drawchart = () =>{
    var myChart = echarts.init(lineChart.value)
    var option = {
        width:"100%",
        color: ['#80FFA5', '#00DDFF', '#56e26e'],
        // title: {
        //     text: '人流情况',
        //     left: '2%'
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
            }
        },
        legend: {
            data: ['员工', '顾客', '注册用户']
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月',
                '八月', '九月', '十月', '十一月', '十二月'
            ]
            }
        ],
        yAxis: [
            {
            type: 'value'
            }
        ],
        series: [
            {
            name: '员工',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: 'rgb(128, 255, 165)'
                },
                {
                    offset: 1,
                    color: 'rgb(1, 191, 236)'
                }
                ])
            },
            emphasis: {
                focus: 'series'
            },
                data: [140, 232, 101, 264, 90, 340, 250, 101, 264, 90, 340, 250]
            },
            {
            name: '顾客',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: 'rgb(0, 221, 255)'
                },
                {
                    offset: 1,
                    color: 'rgb(77, 119, 255)'
                }
                ])
            },
            emphasis: {
                focus: 'series'
            },
                data: [120, 282, 111, 234, 220, 340, 310, 111, 234, 220, 340, 310]
            },
            {
            name: '注册用户',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#49e16b'
                },
                {
                    offset: 1,
                    color: '#e0f49b'
                }
                ])
            },
            emphasis: {
                focus: 'series'
            },
                data: [320, 132, 201, 334, 190, 130, 220,201, 334, 190, 130, 220]
            }
        ]
    };
    option && myChart.setOption(option);
}

onMounted(()=>{
    drawchart()
})
</script>

<style lang="scss">


</style>

