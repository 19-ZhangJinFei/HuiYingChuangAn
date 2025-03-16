<template>
    <div class="add-main">
        <el-divider />
        <div class="addbox">
            <div class="top">
                <div>请输入标题：</div>
                <input type="text" class="input" v-model="title">
            </div>
            <el-divider />
            <div class="bottom">
                <textarea class="text" v-model="text" placeholder="请输入正文内容"></textarea>
                <div class="upload">
                    <el-upload class="upload-box" drag action="#" v-model:file-list="fileList"
                        @change="handleFileChange">
                        <template #default>
                            <el-icon class="upload-icon">
                                <Plus />
                            </el-icon>
                        </template>
                    </el-upload>
                    <el-button type="primary" @click="goback" round>发布</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
const fileList = ref([]);
const text = ref('')
const title = ref('')
const emits = defineEmits(['goback'])
const goback = () =>{
    ElMessage.success('发布成功')
    setTimeout(()=>{
        text.value = ''
        title.value = ''
        emits('goback')
    },2000)
}
const handleFileChange = (file, fileList) => {
    // 判断文件是否添加成功
    if (file.status === 'success') {
        ElMessage.success('添加成功');
    }
};
</script>

<style lang="scss" scoped>
.add-main{
    width: 100%;
    height: 90%;
    padding-top: 6%;
    box-sizing: border-box;
    .el-divider{
        border-top: 2px solid #d9d9d9;
        width: 90%;
        margin: auto;
    }
    .addbox{
        width: 85%;
        height: 90%;
        margin: auto;
        margin-top: 4%;
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
        padding: 2% 1%;
        box-sizing: border-box;
        .top{
            width: 100%;
            height: 15%;
            display: flex;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: 15px;
            margin-left: 2%;
            line-height: 80px;
            .input{
                width: 60%;
                height:80%;
                margin-top: 0.8%;
                outline: none;
                border: none;
                font-size: 35px;
                line-height: 50px;
            }
        }
        .el-divider{
            width: 100%;
            border-top: 1px solid #716e6e;
        }
        .bottom{
            width: 100%;
            height: 79%;
            margin-top: 1%;
            // background-color: black;
            padding: 0 1%;
            box-sizing: border-box;
            .text{
                width: 100%;
                height: 53%;
                border: none;
                outline: none;
                font-size: 18px;
                letter-spacing: 2px;
                color: #333;
                overflow-y: auto;
                resize: none;
                margin-bottom: 3%;
                &::placeholder{
                    color: #716e6e;
                }
            }
            .upload{
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 41%;
                .upload-box {
                    width: 20%;
                    height: 80%;
                    ::v-deep .el-upload-dragger{
                        padding: 30% 0%;
                        box-sizing: border-box;
                        background-color: #f4f3f3;
                        border:1px solid #5a5a5a;
                        opacity: 0.8;
                    }
                }
                .upload-icon {
                    font-size: 36px;
                    color: #666;
                }
                .el-button{
                    background-color: #45a9fa;
                    border-color:#45a9fa;
                    margin-right: 2%;
                    margin-top: 12%;
                    width: 14%;
                    height: 25%;
                    border-radius: 15% / 50%;
                    font-size: 20px;
                    letter-spacing: 5px;
                    text-align: center;
                    &:hover{
                        background-color: #c2e1fa;
                        border-color: #c2e1fa;
                    }
                }
            }
        }
    }
}
</style>
