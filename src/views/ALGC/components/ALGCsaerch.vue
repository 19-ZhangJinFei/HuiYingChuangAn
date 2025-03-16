<template>
    <div class="search">
        <input class="input" v-model="input" type="text" placeholder='"请输入您的媒体创作需求(例如内容所属领域，所需数量，需求概述等等)"' />
        <el-icon class="icon-pic">
            <PictureFilled />
        </el-icon>
        <el-icon class="icon-upload">
            <UploadFilled />
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { PictureFilled, UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue';
const input = ref('')

</script>

<style lang="scss" scoped>
.search {
    position: relative;
    display: flex;
    width: 85%;
    height: 8%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;
    border-radius: 3% / 50%;
    padding-left: 2%;
    box-sizing: border-box;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

    .input {
        width: 80%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 18px;
        letter-spacing: 5px;
        color: #716e6e;
    }

    .icon-pic {
        position: absolute;
        color: #d9d9d9;
        font-size: 44px;
        top: 12%;
        left: 88%;

        &:hover {
            color: #999696;
        }
    }

    .icon-upload {
        position: absolute;
        color: #c2e1fa;
        font-size: 45px;
        top: 10%;
        left: 93%;

        &:hover {
            color: #2f94f8;
        }
    }

    .el-icon:hover {
        cursor: pointer;
    }
}

</style>
