<template>
        <div class="title">
            <div class="dot"></div>
            人流情况：
        </div>
        <div class="top">
            <div class="left">
                <LineChart class="linechart"></LineChart>
            </div>
            <div class="right">
                <div class="card">
                    <el-icon>
                        <Avatar />
                    </el-icon>
                    <div class="words">
                        浏览人数
                    </div>
                    <div class="num">
                        <div class="number">123456</div>
                        <div class="change">
                            <div>较昨日 1259</div>
                            <el-icon>
                                <BottomRight />
                            </el-icon>
                        </div>

                    </div>
                </div>
                <div class="card">
                    <el-icon>
                        <Comment />
                    </el-icon>
                    <div class="words">
                        评论数量
                    </div>
                    <div class="num">
                        <div class="number">123456</div>
                        <div class="change">
                            <div>较昨日 1259</div>
                            <el-icon style="color:#b01c0f">
                                <TopRight />
                            </el-icon>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <LineChart2 class="linechart2"></LineChart2>
        </div>
</template>

<script setup lang="ts">
import LineChart from './components/LineChart.vue'
import LineChart2 from './components/LineChart2.vue'
import { Avatar, Comment, BottomRight, TopRight } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
    .title {
        width: 100%;
        height: 7%;
        display: flex;
        line-height: 40px;
        font-size: 25px;

        .dot {
            width: 40px;
            height: 40px;
            background-color: #5d8af4;
            border-radius: 50%;
            margin: 0 1%;
        }
    }

    .top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 40%;

        .left {
            width: 46%;
            height: 100%;
            background-color: #fff;
            border-radius: 10% / 15%;
            padding-top: 2%;
            box-sizing: border-box;

            .linechart {
                width: 95%;
                height: 95%;
            }
        }

        .right {
            width: 52%;
            height: 100%;
            background-color: #fff;
            border-radius: 10% / 20%;

            .card {
                width: 90%;
                height: 38%;
                margin: 4% auto;
                background-color: #afceee;
                border-radius: 8% / 30%;
                padding: 3% 5%;
                box-sizing: border-box;
                display: flex;

                .el-icon {
                    font-size: 90px;
                    color: #716e6e;
                    margin-right: 3%;
                }

                .words {
                    font-size: 60px;
                    color: #fff;
                    line-height: 90px;
                    margin-right: 3%;
                }

                .num {
                    margin-top: 6%;
                    font-size: 13px;
                    width: 25%;

                    .number {
                        font-size: 23px;
                        font-weight: 700;
                        margin-bottom: 3%;
                    }

                    .change {
                        display: flex;

                        span {
                            line-height: 20px;
                        }

                        .el-icon {
                            color: #45b84f;
                            font-size: 20px;
                            margin-left: 2%;
                        }
                    }

                }
            }
        }
    }

    .bottom {
        width: 100%;
        height: 45%;
        background-color: #fff;
        border-radius: 5% / 20%;
        margin-top: 2%;
        padding-top: 3%;
        box-sizing: border-box;

        .linechart2 {
            width: 98%;
            height: 90%;
        }
    }
</style>
