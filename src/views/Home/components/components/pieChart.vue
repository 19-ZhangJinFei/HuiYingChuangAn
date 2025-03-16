<template>
    <div ref="pieChart"></div>
</template>

<script setup lang="ts">
import {ref , onMounted } from 'vue'
import * as echarts from 'echarts';
const pieChart = ref()
const drawchart = () =>{
    var myChart = echarts.init(pieChart.value)
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        data: [
        '正常检查',
        '出现报错',
        '请求失败',
        ]
    },
    color: ["#9fe0e7", "#f0c66d", "#f77064"],
    series: [
        {
        name: 'Access From',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '25%'],
        center: ['50%', '50%'],
        label: {
            position: 'inner',
            fontSize: 14
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 1548, name: '正常检查' },
            { value: 775, name: '出现报错' },
            { value: 679, name: '请求失败', selected: true }
        ]
        },
        {
        name: '算法出错情况',
        type: 'pie',
        radius: ['45%', '55%'],
        center: ['50%', '50%'],
        labelLine: {
            length: 30
        },
        label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
            a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
            },
            hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
            },
            b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
            },
            per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
            }
            }
        },
        data: [
            { value: 1048, name: '请求失败' },
            { value: 335, name: '正常检测' },
            { value: 310, name: '出现报错' }
        ]
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

