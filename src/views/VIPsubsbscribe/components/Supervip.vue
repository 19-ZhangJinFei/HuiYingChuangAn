<template>
    <div class="inner-main">
        <div class="card" @click="showdia = !showdia">
            <div class="card-title">连续包月</div>
            <div class="money">￥<span>19.9</span></div>
            <div class="text">限时优惠</div>
        </div>
        <div class="card" @click="showdia = !showdia">
            <div class="card-title">连续包季</div>
            <div class="money">￥<span>55.9</span></div>
            <div class="text">限时优惠</div>
        </div>
        <div class="card" @click="showdia = !showdia">
            <div class="card-title">连续包年</div>
            <div class="money">￥<span>219.9</span></div>
            <div class="text">限时优惠</div>
        </div>
        <div class="card" @click="showdia = !showdia">
            <div class="card-title">1个月</div>
            <div class="money">￥<span>25</span></div>
            <div class="text">限时优惠</div>
        </div>
        <div class="card" @click="showdia = !showdia">
            <div class="card-title">3个月</div>
            <div class="money">￥<span>75</span></div>
            <div class="text">限时优惠</div>
        </div>
        <div class="card" @click="showdia = !showdia">
            <div class="card-title">12个月</div>
            <div class="money">￥<span>300</span></div>
            <div class="text">限时优惠</div>
        </div>
        <Dialog v-if="showdia"></Dialog>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Dialog from './components/Paydialog.vue'
const showdia = ref(false)
</script>
<style lang="scss" scoped>
.inner-main {
    position: absolute;
    width: 90%;
    height: 90%;
    top: 4%;
    background-color: #fff;
    border-radius: 0 6% 6% 6%;
    display: flex;
    flex-wrap: wrap;
    padding: 8% 5%;
    box-sizing: border-box;
    justify-content: space-between;
    box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4);
    z-index: 3;
    .card {
        width: 25%;
        height: 43%;
        background-color: #fff;
        border-radius: 16% / 25%;
        border: 6px solid #f2e23b;
        overflow: hidden;
        margin-bottom: 5%;

        &:hover {
            background-color: #f7f9d5;
            cursor: pointer;
        }

        .card-title {
            text-align: center;
            margin-top: 5%;
            letter-spacing: 5px;
            color: #716e6e;
            font-size: 20px;
        }

        .money {
            text-align: center;
            font-size: 35px;

            span {
                font-size: 70px;
                font-weight: 700;
            }
        }

        .text {
            background-color: #f2e23b;
            width: 100%;
            height: 35%;
            margin-top: 5%;
            text-align: center;
            letter-spacing: 5px;
            color: #fff;
            font-size: 20px;
            line-height: 50px;
        }
    }
}
</style>
