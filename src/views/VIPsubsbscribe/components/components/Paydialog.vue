<template>
    <div class="dia-main">
        <div class="top">
            <div :class="['title', `${isactive == '1' ? 'active' : ''}`]" @click="isactive = '1'">微信支付</div>
            <div :class="['title', `${isactive == '2' ? 'active' : ''}`]" @click="isactive = '2'">支付宝支付</div>
            <div :class="['title', `${isactive == '3' ? 'active' : ''}`]" @click="isactive = '3'">其他方式</div>
        </div>
        <el-divider />
        <img class="QR" src="../../../../assets/QR code.png" alt="">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isactive = ref('1')
</script>

<style lang="scss" scoped>
.dia-main{
    position: absolute;
    top: 25%;
    left: 30%;
    width: 40%;
    height: 50%;
    background-color: #c2e1fa;
    border-radius: 15% / 25%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
    .top{
        display: flex;
        justify-content: space-between;
        padding: 7% 10% 0;
        box-sizing: border-box;
        width: 100%;
        height: 8%;
        font-size: 13px;
        letter-spacing: 3px;
        .title{
            color: #fff;
            &:hover{
                cursor: pointer;
                color: black;
            }
        }
        .active{
            color: black;
        }
    }
    .el-divider{
        width: 90%;
        margin-left: 5%;
        border-color: #fff;
    }
    .QR{
        width: 40%;
        margin: 5% 29%;
    }
}
</style>
