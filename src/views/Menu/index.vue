<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="aside">
                <div class="person">
                    <img class="avatar"
                        src="https://q8.itc.cn/q_70/images03/20241030/7e4e379bf5b84b6c9fb4a9fec3102d5d.jpeg" alt=""
                        @click="router.push('/menu/person')">
                    <div class="logo">s v i p</div>
                    <div style="width: 86%; padding: 8% 0 0 10%;">
                        <div class="username" @click=""> {{ username }}
                            <div style=" margin: 2% 0 0 3%;">
                                <el-icon>
                                    <HomeFilled color="#218ef9" />
                                </el-icon>
                            </div>
                        </div>
                        <div class="account">
                            <span>账号：</span>
                            <span>15582478706</span>
                        </div>
                    </div>
                </div>
                <el-menu class="el-menu-vertical-demo" :default-active="activeMenuIndex" @select="pushRouetr">
                    <el-menu-item index="home">
                        <img src="../../assets/1.png" alt="">
                        <span>数据面板</span>
                    </el-menu-item>
                    <el-menu-item index="leak" @click="getleaksub" @mouseenter="getleaksub"
                        @mouseleave="leaksub = false">
                        <img src="../../assets/2.png" alt="">
                        <span>泄露情况</span>
                        <el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="inform">
                        <img src="../../assets/3.png" alt="">
                        <span>网站信息查询</span>
                    </el-menu-item>
                    <el-menu-item index="dialog">
                        <img src="../../assets/4.png" alt="" style="width: 13%;">
                        <span>检测日志管理</span>
                    </el-menu-item>
                    <el-menu-item index="algc" @click="getalgcsub" @mouseenter="getalgcsub"
                        @mouseleave="algcsub = false">
                        <img src="../../assets/5.png" alt="">
                        <span>ALGC辅助创作中心</span>
                        <el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="feedback">
                        <img src="../../assets/6.png" alt="">
                        <span>反馈信息</span>
                    </el-menu-item>
                    <el-menu-item index="bug">
                        <img src="../../assets/7.png" alt="" style="width: 13%;">
                        <span>bug日志</span>
                    </el-menu-item>
                    <el-menu-item index="media">
                        <img src="../../assets/8.png" alt="" style="width: 17%;">
                        <span>媒体创作社区</span>
                    </el-menu-item>
                    <el-menu-item index="vip" @click="getvipsub" @mouseenter="getvipsub" @mouseleave="vipsub = false">
                        <img src="../../assets/vip.png" alt="">
                        <span>会员订阅中心</span>
                        <el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="safe">
                        <img src="../../assets/10.png" alt="" style="width: 13%;">
                        <span>安全测试和评估</span>
                        <el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
        <Submenu class="submenu1" v-if="leaksub" :submenuItems="menulist" @click="Closesubone"
            @mouseenter="leaksub = true" @mouseleave="leaksub = false">
        </Submenu>
        <Submenu class="submenu2" v-if="algcsub" :submenuItems="menulist" @click="Closesubtwo"
            @mouseenter="algcsub = true" @mouseleave="algcsub = false">
        </Submenu>
        <Submenu class="submenu3" v-if="vipsub" :submenuItems="menulist" @click="Closesubthree"
            @mouseenter="vipsub = true" @mouseleave="vipsub = false">
        </Submenu>
    </div>
</template>

<script setup lang="ts">
import { HomeFilled, ArrowRightBold } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import Submenu from '../../components/Menulist.vue'
import { ref } from 'vue'
interface submenu {
    name: string,
    path: string
}
const activeMenuIndex = ref(localStorage.getItem('menu') || "home")
const router = useRouter()
const pushRouetr = (key: string) => {
    router.push('/menu/' + key);
    localStorage.setItem('menu',key)
}
const leaksub = ref(false)
const menulist = ref<submenu[]>([])
const getleaksub = () => {
    leaksub.value = !leaksub.value
    if(leaksub.value){
        menulist.value = [{
            name: '泄露查询',
            path: '/leak/search'
        },
        {
            name: '泄露监控',
            path: '/leak/monitor'
        }, {
            name: '泄露防护',
            path: '/leak/defend'
        }]
    }
}
const Closesubone = () => {
    leaksub.value = false
    activeMenuIndex.value = 'leak'
    localStorage.setItem('menu', activeMenuIndex.value)
}
const algcsub = ref(false)
const getalgcsub = () => {
    algcsub.value = !algcsub.value
    if(algcsub.value){
        menulist.value = [{
            name: '服务需求',
            path: '/algc/service'
        },
        {
            name: '创作资源共享库',
            path: '/algc/data'
        }, {
            name: '智能文案生成',
            path: '/algc/create'
        }]
    }
    
}
const Closesubtwo = () => {
    algcsub.value = false
    activeMenuIndex.value = 'algc'
    localStorage.setItem('menu', activeMenuIndex.value)
}
const vipsub = ref(false)
const getvipsub = () => {
    vipsub.value = !vipsub.value
    if(vipsub.value){
        menulist.value = [{
            name: '会员购买',
            path: '/vip/buy'
        },
        {
            name: '安全咨询',
            path: '/vip/ask'
        }, {
            name: '网络安全订阅',
            path: '/vip/subsbscribe'
        }]
    }
}
const Closesubthree = () => {
    vipsub.value = false
    activeMenuIndex.value = 'vip'
    localStorage.setItem('menu', activeMenuIndex.value)
}
const username = ref(localStorage.getItem('username'))
</script>

<style lang="scss" scoped>
.common-layout {
    height: 100%;
    position: relative;

    .el-container {
        height: 100%;

        .aside::v-deep {
            height: 100%;
            color: var(--el-text-color-primary);
            background: rgba($color: #fff, $alpha: 0.4);
            border-radius: 0 5% 5% 0;
            box-shadow: 1px 0px 10px rgba(69, 69, 69, 0.3);

            .person {
                position: relative;
                display: flex;
                width: 100%;
                height: 16%;
                background: linear-gradient(to bottom, rgba($color: #fff, $alpha: 0.6), transparent);

                .avatar {
                    width: 25%;
                    height: 50%;
                    border-radius: 50%;
                    margin: 10% 0 0 5%;

                    &:hover {
                        cursor: pointer;
                    }
                }

                .logo {
                    position: absolute;
                    padding: 0 2%;
                    box-sizing: border-box;
                    top: 63%;
                    left: 22%;
                    width: 14%;
                    height: 10%;
                    background-color: #f2e23b;
                    font-size: 10px;
                    font-weight: 700;
                    border-radius: 20% / 50%;
                    color: #fff;
                }

                .username {
                    display: flex;
                    font-size: 27px;
                    margin: 10% 0 5% 0;

                    .el-icon {
                        font-size: 30px;
                        color: #716e6e;

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }

                .account {
                    font-size: 13px;
                    color: #817e7f;
                }
            }

            .el-menu {
                background: linear-gradient(to right, #bddefa, transparent);

                .el-menu-item {
                    position: relative;
                    font-size: 20px;
                    color: #7b8fa3;

                    &.is-active {
                        background: linear-gradient(to right, #bddefa, #3297f9);
                    }

                    &:hover {
                        background: linear-gradient(to right, #bddefa, #3297f9);
                    }

                    .el-icon {
                        position: absolute;
                        left: 86%;
                        color: #716e6e;
                    }

                    img {
                        width: 15%;
                        margin-right: 5%;
                    }
                }

                .leak:hover .submenu1 {
                    display: block;
                }
            }

        }

        .main {
            padding: 3%;
        }
    }

    .submenu1 {
        position: absolute;
        top: 22%;
        left: 17.6%;
        z-index: 5;
    }

    .submenu2 {
        position: absolute;
        top: 40%;
        left: 17.6%;
        z-index: 5;
    }

    .submenu3 {
        position: absolute;
        top: 63.5%;
        left: 17.6%;
        z-index: 5;
    }
}
</style>
