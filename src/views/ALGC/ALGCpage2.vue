<template>
    <div class="service-main">
        <div v-if="!ifask" class="main-bg">
            <div class="label">
                早上好！欢迎访问！
            </div>
            <div class="search">
                <input class="input" v-model="input" type="text" placeholder='"请输入您的媒体创作需求(例如内容所属领域，所需数量，需求概述等等)"' />
                <el-icon class="icon-pic">
                    <PictureFilled />
                </el-icon>
                <el-icon class="icon-upload" @click="send_one">
                    <UploadFilled />
                </el-icon>
            </div>
        </div>
        <div v-if="ifask" class="sub-main">
            <div class="speak">
                <div v-for=" (item, i) in messages" :key="i" :class="[item.sender]">
                    {{ item.text }}
                </div>
            </div>
            <div class="search">
                <input class="input" v-model="input" type="text" placeholder='"请输入您的媒体创作需求(例如内容所属领域，所需数量，需求概述等等)"' />
                <el-icon class="icon-pic">
                    <PictureFilled />
                </el-icon>
                <el-icon class="icon-upload" @click="sendMessage">
                    <UploadFilled />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { PictureFilled, UploadFilled } from '@element-plus/icons-vue'
const ifask = ref(false)
const input = ref('')
const messages = reactive([
    { text: '早上好欢迎访问！', sender: 'robot', isActive: false }
])

let socket = new WebSocket('ws://127.0.0.1:3600/question')
const couldask = ref(true)
const send_one = () =>{
    if(input.value){
        sendMessage()
        ifask.value = true
    }
}
const sendMessage = () => {
    if (couldask.value) {
        let userMsg = input.value
        if (userMsg.trim() === '') return;
        messages.push({ text: userMsg, sender: 'user' });
        socket.send(userMsg)
        input.value = ''
        couldask.value = false
    }
}

const messageHandler = (e: any) => {
    const resData = JSON.parse(e.data)
    // 添加内容
    const idx = messages.findIndex(item => item.isActive === true)
    if (!resData.isEnd) {
        if (idx === -1) {
            messages.push({ text: '', sender: 'robot', isActive: true })
        } else {
            if (resData.data !== '</think>') {
                messages[idx].text = messages[idx].text += resData.data
            }
        }
    } else {
        messages[idx].isActive = false
        couldask.value = true
    }
}

const openHandler = () => {
    console.log('open')
}
const errorHandler = () => {
    console.log('发生了错误，重连中...');
}

const closeHandler = function (event: any) {
    console.log('WebSocket connection closed with code: ' + event.code + ' and reason: ' + event.reason);
    setTimeout(initSocket, 1500)
}

const initSocket = () => {
    console.log(socket);
    // 接收到消息的回调
    socket.onmessage = messageHandler
    // 连接成功后的回调
    socket.onopen = openHandler
    // 连接发生错误的回调
    socket.onerror = errorHandler
    // 关闭的回调
    socket.onclose = closeHandler
}

onMounted(() => {
    initSocket()
})
</script>

<style lang="scss" scoped>
.service-main{
    width: 100%;
    height: 100%;
    padding-top: 4%;
    box-sizing: border-box;
    .main-bg{
        position: relative;
        width: 90%;
        height: 95%;
        border-radius: 6% / 10%;
        background-color: rgba(255,255,255,0.3);
        padding: 3% 4%;
        box-sizing: border-box;
        margin: 0 auto;
        .label{
            font-size: 80px;
            letter-spacing: 20px;
        }

        .search{
            position: absolute;
            top: 86%;
            left: 8%;
            display: flex;
            width: 85%;
            height: 8%;
            overflow: hidden;
            background-color: #fff;
            border-radius: 3% / 50%;
            padding-left: 2%;
            box-sizing: border-box;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

            .input {
                width: 80%;
                height: 100%;
                border: none;
                outline: none;
                font-size: 18px;
                letter-spacing: 5px;
                color: #333;
            }

            .icon-pic {
                position: absolute;
                color: #d9d9d9;
                font-size: 44px;
                top: 12%;
                left: 88%;

                &:hover {
                    color: #999696;
                }
            }

            .icon-upload {
                position: absolute;
                color: #c2e1fa;
                font-size: 45px;
                top: 10%;
                left: 93%;

                &:hover {
                    color: #2f94f8;
                }
            }

            .el-icon:hover {
                cursor: pointer;
            }
        }
    }

    .sub-main {
        width: 100%;
        height: 100%;
        .speak {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 87%;
            margin-bottom: 2%;
            overflow: auto;
            padding: 0 6%;
            box-sizing: border-box;
            scrollbar-width: none;
            .user {
                display: inline-block;
                padding: 1% 2%;
                font-size: 20px;
                border-radius: 15px;
                letter-spacing: 5px;
                color: #fff;
                box-sizing: border-box;
                background-color: #0b77f8;
                align-self: flex-end;
                text-align: center;
            }

            .robot {
                display: inline-block;
                padding: 1% 2%;
                font-size: 20px;
                border-radius: 15px;
                letter-spacing: 5px;
                color: #fff;
                color: black;
                box-sizing: border-box;
                background-color: #fff;
                align-self: start;
                margin-top: 3%;
                margin-bottom: 3%;
            }
        }

        .search {
            position: relative;
            display: flex;
            width: 85%;
            height: 8%;
            margin: 0 auto;
            overflow: hidden;
            background-color: #fff;
            border-radius: 3% / 50%;
            padding-left: 2%;
            box-sizing: border-box;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

            .input {
                width: 80%;
                height: 100%;
                border: none;
                outline: none;
                font-size: 18px;
                letter-spacing: 5px;
                color: #333;
            }

            .icon-pic {
                position: absolute;
                color: #d9d9d9;
                font-size: 44px;
                top: 12%;
                left: 88%;

                &:hover {
                    color: #999696;
                }
            }

            .icon-upload {
                position: absolute;
                color: #c2e1fa;
                font-size: 45px;
                top: 10%;
                left: 93%;

                &:hover {
                    color: #2f94f8;
                }
            }

            .el-icon:hover {
                cursor: pointer;
            }
        }
    }
}
</style>