<template>
    <div class="buy-main">
        <div class="inner">
            <div class="title-top">
                <div :class="['title',`${isactive ? '' : 'bg-change'}`]" @click="changepage">
                    <VipIcon class="vipicon" :color="vipcolor" />
                    豪华会员
                </div>
                <div :class="['title2', `${!isactive ? '' : 'bg-change'}`]" @click="changepage">
                    <SuperVipIcon class="supervipicon" :color="supercolor"></SuperVipIcon> 
                    超级会员 
                </div>
            </div>
                <EXvip v-if="showex"></EXvip>
                <Supervip v-else></Supervip>
            </div>
        </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import EXvip from './components/EXvip.vue';
import Supervip from './components/Supervip.vue';
import VipIcon from '../../components/icons/SvgIcon5.vue'
import SuperVipIcon from '../../components/icons/SvgIcon6.vue'
const showex = ref(true)
const isactive = ref(true)
const changepage = () =>{
    showex.value = !showex.value
    isactive.value = ! isactive.value
    vipcolor.value = (isactive.value ? '#12bb39' : '#333')
    supercolor.value = (!isactive.value ? '#e5ee51' : '#333' )
}
const vipcolor = ref('#12bb39')
const supercolor = ref('#e5ee51')
</script>
<style lang="scss" scoped>
.buy-main {
    width: 100%;
    height: 100%;
    padding-top: 6%;
    box-sizing: border-box;
    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        .title-top{
            position: relative;
            width: 100%;
            height: 12%;
            display: flex;
            .title {
                position: absolute;
                width: 12%;
                height: 100%;
                text-align: center;
                font-size: 14px;
                color: #12bb39;
                letter-spacing: 3px;
                background-color: #fff;
                border-radius: 35% 35% 50% 50%;
                line-height: 40px;
                z-index: 2;
                padding-left: 1%;
                box-sizing: border-box;
                &:hover {
                    cursor: pointer;
                }
                .vipicon{
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    left: 13%;
                    top: 8%;
                }
                
            }
            .title2 {
                position: absolute;
                width: 12%;
                height: 100%;
                text-align: center;
                font-size: 14px;
                color: #e5ee51;
                left: 8%;
                letter-spacing: 3px;
                background-color: #fff;
                border-radius: 35% 35% 50% 50%;
                line-height: 40px;
                z-index: 2;
                padding-left: 1%;
                box-sizing: border-box;
                &:hover {
                    cursor: pointer;
                }
                .supervipicon{
                    position: absolute;
                    width: 22px;
                    height: 22px;
                    left: 14%;
                    top: 8%;
                }
            }
            .bg-change{
                background: rgba($color: #a9a9a9, $alpha: 1);
                z-index: 1;
                color: #333;
            }
        }
        
    }
}
</style>
