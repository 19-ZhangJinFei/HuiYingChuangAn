<template>
    <div class="home">
        <HomePage1 v-if="showPageone"></HomePage1>
        <HomePage2 v-else></HomePage2>
        <div class="tip">（以上内容由ALGC生成）</div>
        <div class="slip-to" v-if="showPageone" @click="changePage">
            <el-icon>
                <ArrowDown />
            </el-icon>
            <span>
                下滑查看更多
            </span>
        </div>
        <div class="slip-back" v-else @click="changePage">
            <el-icon>
                <ArrowUp />
            </el-icon>
            <span>
                上划返回
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import HomePage1 from './components/HomePage1.vue'
import HomePage2 from './components/HomePage2.vue'
import { ref } from 'vue';
const showPageone = ref(true)
const changePage = () =>{
    showPageone.value = !showPageone.value
}
</script>

<style lang="scss" scoped>
.home{
    position: relative;
    width: 100%;
    height: 100%;
    .tip{
        position: absolute;
        width: 35%;
        letter-spacing: 16px;
        font-size: 16px;
        top: 98%;
        left: 33%;
        color: #fff;
    }

    .slip-to{
        position: absolute;
        top: 95%;
        left: 81%;
        font-size: 80px;
        color: #46a1fa;
        display: flex;
        span{
            font-size: 15px;
            line-height: 80px;
            color: #fff;
            letter-spacing: 5px;
        }

        &:hover{
            top: 96%;
            cursor: pointer;
        }
    }

    .slip-back{
        position: absolute;
        left: 81%;
        top: -5%;
        font-size: 80px;
        color: #46a1fa;
        display: flex;
        span {
            font-size: 15px;
            line-height: 80px;
            color: #fff;
            letter-spacing: 5px;
        }
    
        &:hover {
            top: -6%;
            cursor: pointer;
        }
    }
}
</style>
