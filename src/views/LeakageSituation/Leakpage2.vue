<template>
    <div class="monitor-main">
        <div class="table">
            <div class="tr">
                <div class="th">电话号码</div>
                <div class="text">123***456</div>
            </div>
            <div class="tr">
                <div class="th">邮箱地址</div>
                <div class="text">132****@163.com</div>
            </div>
            <div class="tr">
                <div class="th">身份证号</div>
                <div class="text">1408**********9889</div>
            </div>
            <div class="tr">
                <div class="th">银行卡号</div>
                <div class="text">13*********2435</div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <RandaChart class="left-randachart"></RandaChart>
            </div>
            <div class="right">
                <RandaChart2 class="right-randachart"></RandaChart2>
            </div>
        </div>
        <div class="tip">（以上内容由ALGC生成）</div>
    </div>
</template>

<script setup lang="ts">
import RandaChart from './components/RandaChart.vue'
import RandaChart2 from './components/RandaChart2.vue'
</script>

<style lang="scss" scoped>
.monitor-main {
    position: relative;
    width: 100%;
    height: 100%;
    .table{
        width: 85%;
        height: 16%;
        background-color: #fff;
        margin-left: 15%;
        border-radius: 5% / 35%;
        display: flex;
        overflow: hidden;
        .tr{
            width: 34%;
            border-right: 1px solid #716e6e;
            height: 100%;
            &:nth-child(4){
                border: none;
            }
            .th{
                width: 100%;
                height: 50%;
                font-size: 25px;
                letter-spacing: 15px;
                color: #716e6e;
                text-align: center;
                padding: 6% 5%;
                box-sizing: border-box;
            }
            .text{
                width: 100%;
                height: 50%;
                background-color: #3f7cc4;
                font-style: italic;
                color: #fff;
                font-size: clamp(8px, 1vw, 17px);
                letter-spacing: 5px;
                font-weight: 400;
                padding: 6% 5%;
                box-sizing: border-box;
                text-align: center;
            }
        }
    }
    .bottom{
        width: 100%;
        height: 82%;
        padding-top: 3%;
        box-sizing: border-box;
        display: flex;
        .left{
            height: 100%;
            width: 50%;
            .left-randachart{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            height: 100%;
            width: 50%;
            .right-randachart{
                width: 100%;
                height: 100%;
            }
        }
    }
    .tip{
        position: absolute;
        width: 37%;
        letter-spacing: 16px;
        font-size: 22px;
        top: 98%;
        left: 30%;
        color: #fff;
    }
}
</style>
