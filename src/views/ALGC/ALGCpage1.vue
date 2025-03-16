<template>
    <div style="height: 15%; width: 100%;"></div>
    <Search></Search>
    <div class="bottom">
        <div class="title">以下是根据您的需求写出的文案：</div>
        <div class="show">
            <el-scrollbar>
                <p>{{ text }}</p>
            </el-scrollbar>
        </div>
    </div>
    <div class="btn">再多写几个</div>
    <div class="maxlength">字数为{{ text.length }}字</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Search from './components/ALGCsaerch.vue'
const text = ref(``)
</script>

<style lang="scss" scoped>
.bottom {
    width: 100%;
    height: 40%;
    .title {
        margin: 3% 0 0 10%;
        font-size: 22px;
        letter-spacing: 5px;
    }
    .show {
        width: 80%;
        height: 100%;
        margin: 2% auto 0;
        background-color: #fff;
        border-radius: 5% / 20%;
        padding: 1% 2%;
        box-sizing: border-box;
        .el-scrollbar {
            width: 100%;
            background-color: #fff;
            color: #716e6e;
            font-size: 28px;
            letter-spacing: 9px;
        }
    }
}
.btn {
    position: absolute;
    background-color: #fff;
    padding: 11px 1%;
    box-sizing: border-box;
    color: #1a7ff9;
    font-size: 20px;
    top: 76%;
    left: 11%;
    border-radius: 20% / 50%;
    &:hover {
        color: #fff;
        cursor: pointer;
        background-color: #1a7ff9;
    }
}
.maxlength {
    position: absolute;
    background-color: #fff;
    padding: 11px 1%;
    box-sizing: border-box;
    color: #1a7ff9;
    font-size: 20px;
    top: 76%;
    left: 23%;
    border-radius: 18% / 50%;
}
</style>