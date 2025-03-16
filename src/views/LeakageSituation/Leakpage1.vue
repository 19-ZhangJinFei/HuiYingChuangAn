<template>
    <div class="search-main">
        <div class="title" style="width: 400px;">请输入查询网址：</div>
        <div class="search">
            <input class="input" v-model="input" type="text" placeholder="请输入http开头的网址" />
            <div class=" btn" @click="getData">
                <el-icon class="icon-search">
                    <Search />
                </el-icon>
                <el-icon class="icon-star">
                    <StarFilled />
                </el-icon>
            </div>
        </div>
        <div class="title2">检测结果：</div>
        <div class="info-container">
            <div class="info-item">
                <span>检测网址：</span>
                <el-input v-model="inform.source_url"  />
            </div>
            <div class="info-item">
                <span>检测到电话号码数量：</span>
                <el-input v-model="inform.phone"  />
            </div>
            <div class="info-item">
                <span>检测到邮箱数量：</span>
                <el-input v-model="inform.email"  />
            </div>
            <div class="info-item">
                <span>检测到身份证号数量：</span>
                <el-input v-model="inform.idcard"  />
            </div>
            <div class="info-item">
                <span>检测到银行卡号数量：</span>
                <el-input v-model="inform.bankcard" />
            </div>
        </div>
        <div class="pdf">
            <a :href="src" download="检测报告.pdf">导出PDF检测报告</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search, StarFilled } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';
import { getPDF } from '../../apis/export';
import { getInform } from '../../apis/inform'
import { ElMessage } from 'element-plus';
const src = ref('')
const input = ref('')
const inform = ref({
    source_url: null,
    phone: null,
    email: null,
    idcard: null,
    bankcard: null
})
const getData = async () => {
    try {
        const res = await getInform({ username: 'qx', url: input.value })
        ElMessage.success('获取成功')
        inform.value = res.data
        input.value = ''
    } catch (error) {
        console.log(error)
    }
}
const getPDFInfo = async () => {
    try {
        const res = await getPDF({ username: 'qx', source_url: 'https://get.qiaobuqiao.com/wp-content/uploads/2023/01/1_jkegMbXE-599266.png' })
        const pdfUrl = res.data.pdf_url;
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            src.value = url
        } catch (error) {
            console.error('下载失败:', error);
        }
    } catch (error) {

    }
}
onMounted(async () => {
    await getPDFInfo()
})
</script>

<style lang="scss" scoped>
.search-main {
    width: 100%;
    height: 100%;
    .title{
        font-size: 40px;
        color:#fff;
        width: 250px;
        margin:0 0 3% 0;
    }
    .search {
        display: flex;
        width: 72%;
        height: 6%;
        margin: 1% auto 0;
        overflow: hidden;
        background-color: #fff;
        border-radius: 3% / 50%;
        padding-left: 3%;
        box-sizing: border-box;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

        .input {
            width: 78%;
            height: 100%;
            border: none;
            outline: none;
            font-size: 18px;
            letter-spacing: 5px;
            color: #716e6e;

            &::placeholder {
                color: #d9d9d9;
            }
        }

        .btn {
            position: relative;
            width: 22%;
            height: 100%;
            background-color: #218ef9;

            &:hover {
                cursor: pointer;
                background-color: #007cf8;
            }

            .icon-search {
                position: absolute;
                font-size: 35px;
                top: 20%;
                left: 37%;
                color: #fff;
            }

            .icon-star {
                position: absolute;
                font-size: 18px;
                top: 35%;
                left: 41%;
                color: #fff;
            }
        }
    }

    .title2{
        font-size: 50px;
        color:#337ecc;
        font-weight: 700;
        margin: 0 auto;
        width: 250px;
        margin-top: 5%;
        margin-bottom: 4%;
    }

    .info-container{
        width: 80%;
        height: 40%;
        justify-content: space-between;
        margin-left: 5%;
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
            width: 80%;
            font-size: 17px;
            ::v-deep .el-input__wrapper{
                height: 100%;
            }
        }
        
    }

    .pdf{
        position: absolute;
        top: 85%;
        left: 82%;
        width: 14%;
        height: 6%;
        border-radius: 13% / 50%;
        background-color: #2477d1;
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        padding: 1% 0 0 1.6%;
        box-sizing: border-box;
        a{
            text-decoration: none;
            color: #fff;
            font-weight: 700;
            font-size: 20px;
            letter-spacing: 3px;
        }
        &:hover{
            background-color: #68a2e5;
            cursor: pointer;
        }
    }
}
</style>