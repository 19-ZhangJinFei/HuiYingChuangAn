<template>
    <div class="person">
        <div class="person-main">
            <div class="top">
                <div class="left">
                    <div class="user">
                        {{ username }}
                    </div>
                    <div class="time">{{ time }}</div>
                    <div class="temper">
                        <div class="left">
                            <div class="left-top">
                                <div class="province">山西省</div>
                                <div class="pro-temper">-8°</div>
                            </div>
                            <div class="left-bottom">
                                <div class="max">最高</div>0°
                                <div class="min">最低</div>-8°
                            </div>
                        </div>
                        <div class="rightt">
                            <div class="tom">明日</div>
                            <div class="right-top">
                                <div class="tomtem">最高</div>1°
                            </div>
                            <div class="right-bottom">
                                <div class="tomtem">最低</div>-9°
                            </div>
                        </div>
                    </div>
                    <img class="view"
                        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.StrDRqennoZNbzSPZapKZwAAAA?w=314&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        alt="">
                    <div class="word">精选照片</div>
                    <img class="avatar"
                        src="https://q8.itc.cn/q_70/images03/20241030/7e4e379bf5b84b6c9fb4a9fec3102d5d.jpeg"
                        alt=""></img>
                    <img class="vip" src="../../assets/vip.png" alt="">
                </div>
                <div class="right">
                    <div style="width: 20%; height: 100%;">
                        <div class="week">{{ week }}</div>
                        <div class="day">{{ day }}</div>
                    </div>
                    <Calemdar class="calemdar"></Calemdar>
                </div>
            </div>
            <div class="bottom">
                <img src="../../assets/1.png" alt="">
                <img src="../../assets/2.png" alt="" style="width: 7%;">
                <img src="../../assets/3.png" alt="" style="width: 6%;">
                <img src="../../assets/4.png" alt="" style="width: 5%;">
                <img src="../../assets/5.png" alt="">
                <img src="../../assets/6.png" alt="" style="width: 7%;">
                <img src="../../assets/7.png" alt="" style="width: 5%;">
                <img src="../../assets/8.png" alt="" style="width: 7%;">
                <img src="../../assets/set.png" alt="">
                <img src="../../assets/vip.png" alt="">
                <img src="../../assets/10.png" alt="" style="width: 6%;">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Calemdar from './components/Calendar.vue'
const time = ref()
const week = computed(() => {
    const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return days[new Date().getDay()];
});
const day = ref(new Date().getDay().toString())
const updateClock = () =>{
    const date = ref(new Date())
    const hours = ref(date.value.getHours().toString())
    const minutes = ref(date.value.getMinutes().toString().padStart(2, '0'))
    time.value = `${hours.value}:${minutes.value}`
}
const username = ref(localStorage.getItem('username'))
onMounted(() => {
    updateClock()
})
setInterval(updateClock, 1000);
</script>

<style lang="scss" scoped>
.person{
    width: 100%;
    height: 100%;
    padding: 8% 3% 6%;
    box-sizing: border-box;
    .person-main{
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 5% / 10%;
        padding: 4% 4%;
        box-sizing: border-box;
        .top{
            display: flex;
            width: 100%;
            height: 47%;
            .left{
                position: relative;
                display: flex;
                flex-wrap: wrap;
                width: 60%;
                height: 100%;
                .user{
                    width: 55%;
                    height: 35%;
                    background-color: rgba(255, 255, 255, 0.65);
                    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
                    border-radius: 5% / 25%;
                    padding-left: 18%;
                    box-sizing: border-box;
                    font-size: 35px;
                    line-height: 90px;
                    letter-spacing: 3px;
                }
                .time{
                    width: 30%;
                    height: 35%;
                    margin-left: 8%;
                    background-color: rgba(255, 255, 255, 0.65);
                    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
                    border-radius: 10% / 25%;
                    font-size: 50px;
                    letter-spacing: 5px;
                    font-weight: 700;
                    text-align: center;
                    line-height: 95px;
                    &:hover{
                        cursor: pointer;
                    }
                }

                .temper{
                    display: flex;
                    height: 60%;
                    width: 35%;
                    margin-top: 4%;
                    background-color: rgba(255, 255, 255, 0.65);
                    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
                    border-radius: 10% / 15%;
                    overflow: hidden;
                    .left{
                        width: 55%;
                        height: 100%;
                        .left-top{
                            width: 100%;
                            height: 70%;
                            padding-top: 10%;
                            box-sizing: border-box;
                            .province{
                                width: 100%;
                                font-size: 23px;
                                text-align: center;
                                color: #716e6e;
                                letter-spacing: 2px;
                            }
                            .pro-temper{
                                font-weight: 700;
                                font-size: 40px;
                                text-align: center;
                            }
                        }
                        .left-bottom{
                            width: 100%;
                            height: 30%;
                            display: flex;
                            padding: 0 0 0 13% ;
                            box-sizing: border-box;
                            font-weight: 700;
                            font-size: 21px;
                            line-height: 32px;
                            .max{
                                width: 8%;
                                font-size: 14px;
                                color: #716e6e;   
                                font-weight: 400;   
                                margin:0 10% 0 0;
                                line-height: 16px;
                            }
                            .min{
                                width: 8%;
                                font-size: 14px;
                                color: #716e6e;   
                                font-weight: 400;   
                                margin: 0 10% 0 5%;
                                line-height: 16px;
                            }

                        }
                    }
                    .rightt{
                        position: relative;
                        width: 45%;
                        height: 100%;
                        font-size: 30px;
                        .tom{
                            position: absolute;
                            color: #d9d9d9;
                            font-size: 14px;
                            left: 20%;
                            top: 21%;
                        }
                        .right-top{
                            display: flex;
                            height: 60%;
                            width: 100%;
                            padding: 40% 0 0 20%;
                            box-sizing:border-box;
                            .tomtem{
                                font-size: 14px;
                                color: #716e6e;
                                line-height: 45px;
                                margin-right: 17%;
                            }
                        }
                        .right-bottom{
                            display: flex;
                            height: 40%;
                            width: 100%;
                            padding: 0 0 0 20%;
                            box-sizing: border-box;
                            .tomtem{
                                font-size: 14px;
                                color: #716e6e;
                                line-height: 45px;
                                margin-right: 5%;  
                            }
                        }
                    }
                    &:hover{
                        cursor: pointer;
                    }
                }
                .view{
                    margin-top: 4%;
                    margin-left: 8%;
                    width: 50%;
                    height: 60%;
                    border-radius: 6% / 15%;
                    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
                    &:hover{
                        cursor: pointer;
                    }
                }
                .word{
                    position: absolute;
                    letter-spacing: 2px;
                    right: 9%;
                    top: 47%;
                }
                .avatar{
                    position: absolute;
                    width: 14%;
                    height: 35%;
                    background-color: orange;
                    top: -10%;
                    left: 3%;
                    border-radius: 50%;
                }
                .vip{
                    position: absolute;
                    width: 50px;
                    top:8%;
                    left: 40%;
                }
            }

            .right{
                width: 40%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.65);
                box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
                border-radius: 5% / 10%;
                padding: 1% 2% 0;
                box-sizing: border-box;
                display: flex;
                .week{
                    font-size: 25px;
                    line-height: 55px;
                    text-align: center;
                    color:#d00508;
                    letter-spacing: 3px;
                }
                .day{
                    font-size: 50px;
                    font-weight: 700;
                    text-align: center;
                }
                .calemdar{
                    width: 80%;
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }

        .bottom{
            width: 100%;
            height: 45%;
            background-color: rgba(255, 255, 255, 0.65);
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
            margin-top: 4%;
            border-radius: 3% / 15%;
            padding: 3% 0 3% 6%;
            box-sizing: border-box;
            img{
                width: 7%;
                margin-right: 4%;
                margin-bottom: 4%;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
