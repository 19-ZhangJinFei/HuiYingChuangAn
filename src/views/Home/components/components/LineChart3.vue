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
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        color:["#9fe0e7","#f0c66d","#f77064"],
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月',
                '八月', '九月', '十月', '十一月', '十二月'
            ]
        },
        series: [
            {
            name: '请求失败',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
                data: [320, 302, 301, 334, 390, 330, 320, 301, 334, 390, 330, 1320]
            },
            {
            name: '出现报错',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
                data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134,]
            },
            {
            name: '正常检测',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
                data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290,]
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

