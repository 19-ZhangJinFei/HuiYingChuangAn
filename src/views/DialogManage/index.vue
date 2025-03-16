<template>
    <div class="dialog-main">
        <el-table :data="tableData">
            <el-table-column prop="id" label="序号" width="180" align="center" />
            <el-table-column prop="source_url" label="历史检测网址" align="center" />
            <el-table-column prop="logtime" label="检测时间" width="180" align="center" />
        </el-table>
        <div class="btn">
            <a :href="src" download="CSV报告.pdf">导出CSV报告</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getLogInfo } from '../../apis/dialog';
import { getCsv } from '../../apis/export';
interface table {
    id: number,
    username: string,
    detection_time: string,
    source_url: string,
    detected_phonenumbers: number,
    detected_emails: number,
    detected_idcards: number,
    detected_bankcards: number
}
const tableData = ref<table[]>([])
const src = ref('')
const getLog = async () =>{
    try {
        const res = await getLogInfo({username:'qx'})
        console.log(res)
        tableData.value = res.data.data
    } catch (error) {
        
    }
}
const getCsvInfo = async () => {
    try {
        const res = await getCsv({ username: 'qx' })
        const response = await fetch(res.data.csv_url);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        src.value = url
    } catch (error) {

    }
}
onMounted(async() => {
    await getLog()
    await getCsvInfo()
})
</script>

<style lang="scss" scoped>
.dialog-main{
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 10%;
    box-sizing: border-box;
    ::v-deep .el-table{
        width: 100%;
        --el-table-bg-color: rgba(255,255,255,0.4);
        --el-table-tr-bg-color: transparent;
        --el-table-header-bg-color: #429ffa;
        /* 添加以下规则来覆盖边框颜色 */
        .el-table__header-wrapper th,
        .el-table__body-wrapper td {
            font-size: 15px;
            padding: 15px;
            height: 20%;
            border: 1px solid #a19f9f;
                /* 将这里的颜色替换为你想要的边框颜色 */
            &:first-child{
                border-left: none;
            }
            &:last-child{
                border-right: none;
            }
        }

        .el-table__header-wrapper th{
            font-size: 20px;
            color: #fff;
        }
    }

    .btn{
        position: absolute;
        top: 90%;
        left: 82%;
        width: 16%;
        height: 6%;
        border-radius: 13% / 50%;
        background-color: #2477d1;
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        padding: 1% 0 0 2.5%;
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
