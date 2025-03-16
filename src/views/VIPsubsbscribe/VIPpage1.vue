<template>
    <div class="sub-main">
        <div class="speak">
            <div v-for=" (item,i) in messages" :key="i" :class="[item.sender]">
                {{ item.text }}
            </div>
        </div>
        <div class="search">
            <input class="input" v-model="input" type="text" placeholder='输入您的安全问题' />
            <div :class="['btn', `${couldask ? '' : 'bg-change'}`]" @click="sendMessage">发送</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
const input = ref('')
const messages = reactive([
    { text: '您好 有什么可以帮助到您吗？', sender: 'robot', isActive: false }
])

let socket = new WebSocket('ws://127.0.0.1:3600/question')
const couldask = ref(true)
const sendMessage = () => {
    if (couldask.value){
        let userMsg = input.value
        if (userMsg.trim() === '') return;
        messages.push({ text: userMsg, sender: 'user' });
        socket.send(userMsg)
        input.value = ''
        couldask.value = false
    }
}

const messageHandler = (e:any) => {
    const resData = JSON.parse(e.data)
    // 添加内容
    const idx = messages.findIndex(item => item.isActive === true)
    if (!resData.isEnd) {
        if (idx === -1) {
            messages.push({ text: '', sender: 'robot', isActive: true })
        } else {
            if (resData.data !== '</think>'){
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

const closeHandler = function (event:any) {
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
        height: 7%;
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
            font-size: 15px;
            letter-spacing: 5px;
            color: #333;
        }

        .btn {
            margin-left: 5%;
            width: 15%;
            background-color: #137ef8;
            color: #fff;
            font-size: 25px;
            padding-left: 4%;
            padding-top: 1%;
            box-sizing: border-box;
            letter-spacing: 10px;

            &:hover {
                cursor: pointer;
                background-color: #69b2fc;
            }
        }

        .bg-change{
            background-color: #69b2fc;
        }
    }
}
</style>
