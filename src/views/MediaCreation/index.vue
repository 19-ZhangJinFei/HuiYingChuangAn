<template>
    <div class="media-main">
        <div class="top">
            <div class="search">
                <input class="input" v-model="input" type="text" placeholder="搜一下" />
                <div class=" btn">
                    <el-icon class="icon-search">
                        <Search />
                    </el-icon>
                    <el-icon class="icon-star">
                        <StarFilled />
                    </el-icon>
                </div>
            </div>
            <StartIcon class="star-icon" color="#218ef9"></StartIcon>
            <HeartIcon class="heart-icon" color="#218ef9">
            </HeartIcon>
            <TimeIcon class="time-icon" :color="timecolor"></TimeIcon>
            <FiletIcon class="file-icon" :color="filecolor"></FiletIcon>
            <el-button round @click="addfile">
                <el-icon>
                    <DocumentAdd />
                </el-icon>
                发布
            </el-button>
        </div>
        <RecomendAndfocus v-if="ifadd"></RecomendAndfocus>
        <Addfile v-else @goback="goback"></Addfile>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, StarFilled, DocumentAdd } from '@element-plus/icons-vue'
import TimeIcon from '../../components/icons/SvgIcon.vue'
import HeartIcon from '../../components/icons/SvgIcon2.vue'
import FiletIcon from '../../components/icons/SvgIcon3.vue'
import StartIcon from '../../components/icons/SvgIcon4.vue'
import RecomendAndfocus from './components/recomendAndfocus.vue'
import Addfile from './components/addfile.vue'
const input = ref('')
const timecolor = ref('#218ef9')
const filecolor = ref('#218ef9')
const ifadd = ref(true)
const addfile = ()=>{
    ifadd.value = false
}
const goback = ()=>{
    ifadd.value = true
}
</script>

<style lang="scss" scoped>
.media-main{
    width: 100%;
    height: 100%;
    .top{
        display: flex;
        width: 100%;
        height: 8%;
        padding-left: 5%;
        box-sizing: border-box;
        .search{
            display: flex;
            width: 45%;
            height: 70%;
            overflow: hidden;
            background-color: #fff;
            border-radius: 5% / 50%;
            padding-left: 2%;
            box-sizing: border-box;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
            margin-right: 4%;
            .input{
                width: 77%;
                height: 100%;
                border: none;
                outline: none;
                font-size: 20px;
                letter-spacing: 5px;
                color: #716e6e;
            }
            .btn{
                position: relative;
                width: 23%;
                height: 100%;
                background-color: #c2e1fa;
                &:hover{
                    cursor: pointer;
                    background-color: #007cf8;
                }
                .icon-search{
                    position: absolute;
                    font-size: 35px;
                    top: 8%;
                    left: 30%;
                    color: #fff;
                }
                .icon-star{
                    position: absolute;
                    font-size: 18px;
                    top: 25%;
                    left: 36%;
                    color: #fff;
                }
            }
        }
        .time-icon{
            width: 45px;
            height: 45px;
            margin-left: 2%;
            &:hover{
                cursor: pointer;
            }
        }
        .heart-icon{
            width: 47px;
            height: 47px;
            margin-left: 2%;
            &:hover{
                cursor: pointer;
            }
        }
        .file-icon{
            width: 45px;
            height: 45px;
            margin-left: 2%;
            &:hover{
                cursor: pointer;
            }
        }
        .star-icon{
            width: 50px;
            height: 50px;
            margin-left: 2%;
            &:hover{
                cursor: pointer;
            }
        }
        .el-button{
            width: 18%;
            height: 75%;
            font-size: 30px;
            letter-spacing: 8px;
            font-weight: 700;
            background-color: #c2e1fa;
            color: #fff;
            border: none;
            border-radius: 15% / 50%;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
            margin-left: 8%;
            .el-icon{
                font-size: 30px;
                margin-right: 8px;
            }
        }
    }
}

</style>
