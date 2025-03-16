<template>
    <div class="feedback-main">
        <div class="boxs">
            <div class="box">
                <img src="../../assets/Untitled.png" alt="">
                <div class="box-title">页面闪退</div>
            </div>
            <div class="box">
                <img src="../../assets/Arrow Down Contained 02.png" alt="">
                <div class="box-title">传输问题</div>
            </div>
            <div class="box">
                <img src="../../assets/Audio Settings 01.png" alt="">
                <div class="box-title">操作体验</div>
            </div>
            <div class="box">
                <img src="../../assets/Atom.png" alt="">
                <div class="box-title">界面审美</div>
            </div>
            <div class="box">
                <img src="../../assets/Box.png" alt="">
                <div class="box-title">功能建议</div>
            </div>
            <div class="box">
                <img src="../../assets/Color Swatch 01.png" alt="">
                <div class="box-title">其他反馈</div>
            </div>
        </div>
        <div class="title">我要反馈：</div>
        <div class="feed-upload">
            <textarea v-model="textarea" placeholder="请输入您的反馈"></textarea>
            <el-upload class="upload-box" drag action="#" v-model:file-list="fileList">
                <template #default>
                    <el-icon class="upload-icon">
                        <Plus />
                    </el-icon>
                </template>
            </el-upload>
            <el-button type="primary" round @click="dialog = true">提交</el-button>
        </div>
        <div class="dialog" v-if="dialog">
            <div class="text">
                <div>感谢您的反馈，</div>
                <div>我们一定会尽快改正！</div>
            </div>
            <el-button round @click="dialog = false">关闭</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const textarea = ref('')
const fileList = ref([]);
const dialog = ref(false)
</script>

<style lang="scss" scoped>
.feedback-main{
    width: 100%;
    height: 100%;
    padding-top: 3%;
    box-sizing: border-box;
    position: relative;
    .boxs{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        height: 70%;
        box-sizing: border-box;
        color: #2f4052;
        .box{
            display: flex;
            background-color: #fff;
            width: 32%;
            height: 45%;
            border-radius: 15% / 25%;
            box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4);
            padding: 3% 0 0 1%;
            box-sizing: border-box;
            &:hover{
                background-color: #3f7cc4;
                cursor: pointer;
            }
            img{
                width: 45%;
                height: 85%;
            }
            .box-title{
                font-size: 43px;
                font-weight: 700;
                letter-spacing: 5px;
                line-height: 300px;
            }
        }
        
    }

    .title{
        font-size: 42px;
        font-weight: 700;
        margin-left: 1%;
        letter-spacing: 10px;
    }

    .feed-upload{
        position: relative;
        background-color: #fff;
        width: 98%;
        height: 25%;
        margin: 1% 0 0 1%;
        border-radius: 4% / 25%;
        overflow: hidden;
        padding: 2% 2%;
        box-sizing: border-box;
        box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4);
        textarea{
            width: 100%;
            height: 35%;
            border: none;
            outline: none;
            font-size: 15px;
            letter-spacing: 3px;
            color: #716e6e;
            overflow-y: auto;
            resize: none;
            margin-bottom: 1%;
            &::placeholder{
                color: #716e6e;
            }
        }

        .upload-box {
            width: 12%;
            height: 23%;
            border-radius: 5px;
            ::v-deep .el-upload-dragger{
                padding: 16% 3%;
                box-sizing: border-box;
                background-color: #f4f3f3;
                opacity: 0.8;
            }
        }
        .upload-icon {
            font-size: 36px;
            color: #666;
        }

        .el-button{
            position: absolute;
            width: 15%;
            height: 23%;
            font-size: 20px;
            letter-spacing: 10px;
            top: 70%;
            left: 80%;
            border-radius: 15% / 45%;
        }
    }
    .dialog{
        position: absolute;
        top: 20%;
        left: 15%;
        background-color: #c2e1fa;
        width: 70%;
        height: 60%;
        border-radius: 15% / 25%;
        box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
        font-size: 60px;
        color: #fff;
        .text{
            margin: 18% 0 0 14%;
            width: 78%;
            letter-spacing:10px;
        }
        .el-button{
            width: 18%;
            height: 10%;
            margin-left: 40%;
            margin-top: 5%;
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 20px;
            &:hover{
                background-color: #409eff;
                color: #fff;
            }
        }
    }
}
</style>
