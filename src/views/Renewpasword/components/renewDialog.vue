<template>
    <div class="renew">
        <div class="top">
            <img src="../../../assets/success.png" alt="">
            <div class="title">重置成功!返回登录</div>
        </div>
        <div class="text">我们已经根据您提供的数字/字母为您生成了加密密码来保护您的帐号安全！下次登录用刚刚自定义的简约密码即可安全登录！
        </div>
        <div class="btn" @click="router.push('/login')">确认返回</div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="scss" scoped>
.renew{
    background-color: #6ca9f1;
    width: 20%;
    height: 23%;
    border-radius: 35px;
    padding: 1% 2%;
    box-sizing: border-box;
    .top{
        width: 100%;
        height: 30%;
        display: flex;
        .title{
            font-size: 21px;
            line-height: 45px;
            letter-spacing: 2px;
            color: white;
            margin-left: 5%;
        }
    }
    .text{
        font-size: 15px;
        text-indent: 2em;
        line-height: 23px;
        color: #71767f;
    }
    .btn{
        width: 35%;
        height: 20%;
        background-color: #fff;
        border-radius: 20px;
        color: #0b77f8;
        text-align: center;
        font-size: 15px;
        letter-spacing: 2px;
        line-height: 35px;
        margin: 0 auto;
        &:hover {
            cursor: pointer;
            background-color: #0b77f8;
            color: white;
        }
    }
}
</style>
