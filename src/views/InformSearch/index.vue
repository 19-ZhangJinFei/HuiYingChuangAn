<template>
    <div class="inform-main">
        <div class="top">
            <span class="title">域名：</span>
            <div class="search">
                <input class="input" v-model="input" type="text" placeholder="请输入域名" />
                <el-icon class="icon-search" @click="getData">
                    <Search />
                </el-icon>
            </div>
        </div>
        <div class="bottom">
            <div class="title">域名信息</div>
            <div class="info-container">
                <div class="info-item">
                    <span>以下信息更新时间：</span>
                    <el-input v-model="updateTime" placeholder="请输入更新时间" />
                </div>
                <div class="info-item">
                    <span>域名：</span>
                    <el-input v-model="domainName" placeholder="请输入域名" />
                </div>
                <div class="info-item">
                    <span>注册商：</span>
                    <el-input v-model="registrar" placeholder="请输入注册商" />
                </div>
                <div class="info-item">
                    <span>注册人邮箱：</span>
                    <el-input v-model="registrantEmail" placeholder="请输入注册人邮箱" />
                </div>
                <div class="info-item">
                    <span>注册日期：</span>
                    <el-input v-model="registrationDate" placeholder="请输入注册日期" />
                </div>
                <div class="info-item">
                    <span>到期时间：</span>
                    <el-input v-model="expirationDate" placeholder="请输入到期时间" />
                </div>
                <div class="info-item">
                    <span>更新日期：</span>
                    <el-input v-model="updateDate" placeholder="请输入更新日期" />
                </div>
                <div class="info-item">
                    <span>域名状态：</span>
                    <el-input v-model="domainStatus" placeholder="请输入域名状态" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
const input = ref('')
const updateTime = ref('')
const domainName = ref('')
const registrar = ref('')
const registrantEmail = ref('')
const registrationDate = ref('')
const expirationDate = ref('')
const updateDate = ref('')
const domainStatus = ref('')
const getData = () =>{
    ElMessage.success('获取成功')
    updateTime.value = '2023-10-05 14:30:00 (UTC+8)'
    domainName.value = input.value
    registrar.value = 'Namecheap'
    registrantEmail.value = 'privacy-protect@namecheap.com'
    registrationDate.value = '2020-03-18'
    expirationDate.value = '2025-03-18'
    updateDate.value = '2023-02-12'
    domainStatus.value = 'clientTransferProhibited'
    input.value = ''
}
</script>

<style lang="scss" scoped>
.inform-main{
    width: 100%;
    height: 100%;
    padding-top: 2%;
    box-sizing: border-box;
    .top{
        display: flex;
        width: 100%;
        height: 10%;
        .title{
            font-size: 30px;
            font-weight: 700;
        }
        .search{
            position: relative;
            width: 26%;
            height: 53%;
            overflow: hidden;
            background-color: #fff;
            border-radius: 7% / 50%;
            padding-left: 2%;
            box-sizing: border-box;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
            .input{
                width: 77%;
                height: 100%;
                border: none;
                outline: none;
                font-size: 18px;
                letter-spacing: 2px;
                color: #716e6e;
            }
            .icon-search{
                position: absolute;
                font-size: 27px;
                top: 20%;
                left: 85%;
                color: #0b77f8;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

    .bottom{
        width: 90%;
        height: 80%;
        margin: 3% auto 0;
        background-color: rgba(255,255,255,0.4);
        border-radius: 5% / 10%;
        padding-top: 1%;
        box-sizing: border-box;
        box-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
        .title{
            width: 25%;
            font-size: 50px;
            color: #0b77f8;
            font-weight: 700;
            letter-spacing: 20px;
            margin: 0 auto 2%;
            text-shadow: 2px 2px 4px #939393;
        }
        .info-container{
            width: 80%;
            height: 75%;
            justify-content: space-between;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }
        .info-item{
            display: flex;
            color: #716e6e;
            span{
                width: 22%;
                font-size: 18px;
                line-height: 35px;
                text-align:right;
            }
            .el-input{
                --el-input-focus-border-color:#716e6e;
                ::v-deep .el-input__wrapper{
                    background-color: transparent;
                    border: 1px solid #716e6e;
                    border-radius: 2% / 50%;
                    height: 100%;
                    &.is-focus{
                        border-color: none; /* 活动时（聚焦）的边框颜色，可按需修改 */
                    }
                }
            }
            
        }
    }
    
}

</style>
