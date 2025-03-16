<template>
    <div class="sub-menu">
        <div class="sub" v-for="item in props.submenuItems"  :key="n++" @click="router.push('/menu' + item.path)">
            {{ item.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router';
interface submenu {
    name:string,
    path:string
}
const props = defineProps<{ submenuItems: submenu[] }>()
const n = ref(0)
const emit = defineEmits(['sendData']);
const router = useRouter()
</script>

<style lang="scss" scoped>
.sub-menu{
    width: 10%;
    height: 13%;
    background-color: #fff;
    border-radius: 0px 15% 15% 0px;
    overflow: hidden;
    font-size: 17px;
    letter-spacing: 5px;
    text-align: center;
    line-height: 40px;
    color: #3f7cc4;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
    .sub{
        width: 100%;
        height: 33%;
        &:hover{
            background-color: #3f7cc4;
            color: #fff;
            cursor: pointer;
        }
        &:nth-child(3){
            width: 100%;
            height: 34%;
            &:hover{
                background-color: #3f7cc4;
                cursor: pointer;
                color: #fff;
            } 
        }
    }
}
</style>
