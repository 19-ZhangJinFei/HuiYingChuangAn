<template>
    <div ref="randaChart"></div>
</template>

<script setup lang="ts">
import { ref , onMounted } from 'vue'
import * as echarts from 'echarts';
const randaChart = ref()
const drawchart = () =>{
  var myChart = echarts.init(randaChart.value)
  var option = {
    color: ['#b01c0f'],
    radar: [
      {
        indicator: [
          { text: '电话号码' , color:'#b01c0f' },
          { text: '邮箱地址' , color:'#b01c0f' },
          { text: '身份证号' , color:'#b01c0f' },
          { text: '银行卡号' , color:'#b01c0f' },
          { text: '其他' , color:'#b01c0f' },
          { text: '未知', color:'#b01c0f' }
        ],
        center: ['45%', '45%'],
        radius: 200,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '{value}',
          color: '#428BD4',
          fontSize:'15px'
        },
        splitArea: {
          areaStyle: {
            color: ['transparent'],
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: '#b01c0f'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(176, 28, 15, 0.3)'
          }
        }
      }
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: '北京'
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: '上海',
            areaStyle: {
              color: 'rgba(176, 28, 15, 0.3)'
            }
          }
        ]
      },
      {
        type: 'radar',
        radarIndex: 1,
        data: [
          {
            value: [120, 118, 130, 100, 99, 70],
            name: '广州',
            symbol: 'none',
            symbolSize: 12,
            lineStyle: {
              type: 'dashed'
            },
            label: {
              show: true,
              formatter: function (params:any) {
                return params.value;
              }
            }
          },
          {
            value: [100, 93, 50, 90, 70, 60],
            name: '深圳',
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: '#b01c0f',
                  offset: 0
                },
                {
                  color: 'rgba(255, 145, 124, 0.9)',
                  offset: 1
                }
              ])
            }
          }
        ]
      }
    ],
    legend: {
      // 图例的位置，这里设置在图表下方
      bottom: 55,
      // 水平方向居中
      left: 'center',
      // 图例的数据，与 series 中的 name 对应
      data: ['北京', '上海', '广州', '深圳'],
      // 图例的文本样式
      textStyle: {
        color: '#000',
        fontSize: 18,
        fontWeight:700
      },
      // 图例图标样式，这里使用圆形
      icon: 'circle'
    }
  };

  option && myChart.setOption(option);
}

onMounted(()=>{
    drawchart()
})
</script>

<style lang="scss">


</style>

