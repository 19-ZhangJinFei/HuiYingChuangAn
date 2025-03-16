<template>
    <div style="height: 5%;"></div>
    <div class="main">
        <div class="left">
            <LineChart class="linechart"></LineChart>
        </div>
        <div class="right">
            <pieChart class="piechart"></pieChart> 
        </div>
    </div>
</template>

<script setup lang="ts">
import LineChart from './components/LineChart3.vue'
import pieChart from './components/pieChart.vue'


</script>

<style lang="scss" scoped>
.main{
    display: flex;
    width: 100%;
    height: 90%;
    background-color: #fff;
    border-radius: 5% / 8%;
    padding-top: 2%;
    box-sizing: border-box;
    .left{
        width: 50%;
        height: 100%;
        .linechart{
            width: 97%;
            height: 97%;
        }
    }

    .right{
        width: 50%;
        height: 100%;
        .piechart{
            width: 97%;
            height: 97%;
        }
    }
}
</style>
