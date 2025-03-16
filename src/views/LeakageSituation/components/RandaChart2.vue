<template>
    <div ref="randaChart"></div>
</template>

<script setup lang="ts">
import { ref , onMounted } from 'vue'
import * as echarts from 'echarts';
const randaChart = ref()
const drawchart = () =>{
    var myChart = echarts.init(randaChart.value)
    var colors = [
      '#8B0000', // 对应2001的深红色
      '#d48115', // 对应2002的橙色
      '#FFFF00', // 对应2003的黄色
      '#5fe644', // 对应2004的绿色
      '#6edbe9', // 对应2005的青色
      '#5d8af4', // 对应2006的深蓝色
      '#8A2BE2', // 对应2007的紫色
      '#d716d1', // 对应2008的亮粉色
      '#D2B48C', // 对应2009的棕粉色
      '#6B8E23',  // 对应2010的棕色
      '#330000', '#663300', '#006600', '#004d00', '#003333',
      '#000066', '#330066', '#4d004d', '#333300', '#333333',
      '#fbdede','#fbe9d0','#f9fde1','#ebfde8'
    ];
    var option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        type: 'scroll',
        bottom: 55,
        itemWidth: 12,
        itemHeight: 12,
        data: (function () {
          var list = [];
          for (var i = 1; i <= 24; i++) {
            list.push(i + 2000 + '');
          }
          return list;
        })(),
        textStyle: {
          color: '#000',
          fontSize: 15,
          fontWeight: 700
        },
      },
      radar: {
        indicator: [
          { text: '电话号码', max: 400 , color:"black"},
          { text: '邮箱地址', max: 400 , color:"black"},
          { text: '身份证号', max: 400 , color:"black"},
          { text: '银行卡号', max: 400 , color:"black"},
          { text: '其他', max: 400, color: "black" }
        ],
        center: ['55%', '45%'],
        axisLine: {
          lineStyle: {
            color: "#999",
            width: 1
          }
        },
        splitLine: {
          lineStyle: {
            color: "#828f99",
            width: 1
          }
        },
        splitArea: {
          areaStyle: {
            color: ["rgba(255, 255, 255, 0.1)"]
          }
        }
      },
      series: (function () {
        var series = [];
        for (var i = 1; i <= 28; i++) {
          series.push({
            type: 'radar',
            symbol: 'none',
            lineStyle: {
              width: 1
            },
            emphasis: {
              areaStyle: {
                color: 'rgba(0,250,0,0.3)'
              }
            },
            itemStyle: {
                color: colors[i - 1] // 为每个系列设置不同颜色，从颜色数组中取值
            },
            data: [
              {
                value: [
                  (40 - i) * 10,
                  (38 - i) * 4 + 60,
                  i * 5 + 10,
                  i * 9,
                  (i * i) / 2
                ],
                name: i + 2000 + ''
              }
            ],
            
          });
        }
        return series;
      })()
};
    option && myChart.setOption(option);
}

onMounted(()=>{
    drawchart()
})
</script>

<style lang="scss">


</style>

