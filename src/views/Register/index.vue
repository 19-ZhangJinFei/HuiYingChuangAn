<template>
    <div class="login">
        <div class="login-main">
            <div class="left">
                <img src="../../assets/login.png" alt="">
            </div>
            <div class="right">
                <div class="title">欢迎来到慧影创安</div>
                <div class="username">
                    <img src="../../assets/people.png" alt="">
                    <input v-model="username" placeholder="请输入用户名" />
                </div>
                <div class="password">
                    <img src="../../assets/password.png" alt="">
                    <input v-model="password" type="password" placeholder="请输入密码" />
                </div>
                <div class="recertify">
                    <img src="../../assets/3.png" alt="">
                    <input v-model="recertify" type="password" placeholder="请重新输入密码" />
                </div>
                <div class="login-btn" @click="register">注册</div>
                <div class="bottom">
                    <div class="register-btn">立即注册</div>
                    <div class="find-pass" @click="router.push('/login')">返回登陆</div>
                </div>
            </div>
        </div>
        <registerDialog class="renew-dia" v-if="ifregidter"></registerDialog>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { getRegister } from '../../apis/login'
import { ElMessage } from 'element-plus'
import registerDialog from './components/registerDialog.vue'
const router = useRouter()
const username = ref('')
const password = ref('')
const recertify = ref('')
const ifregidter = ref(false)
const register = async () => {
    if(password.value !== recertify.value){
        ElMessage({
            message: '两次密码输入不一致！',
            type: 'warning',
        })
    }else{
        try {
            await getRegister({ username: username.value, base_password: password.value })
            ifregidter.value = true
            ElMessage.success('注册成功')
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 6%;
    box-sizing: border-box;

    .login-main {
        width: 80%;
        height: 90%;
        background-color: #fff;
        margin: auto;
        border-radius: 3% / 5%;
        display: flex;
        overflow: hidden;

        .left {
            width: 55%;
            height: 100%;
            background-color: #eef8ff;

            img {
                width: 80%;
                margin: 10% 0 0 9%;
            }
        }

        .right {
            width: 45%;
            height: 100%;

            .title {
                color: #218ef9;
                width: 100%;
                text-align: center;
                font-size: 45px;
                font-weight: 700;
                letter-spacing: 5px;
                margin-top: 15%;
                margin-bottom: 13%;
            }

            .username {
                position: relative;
                height: 10%;
                width: 100%;
                img {
                    width: 7%;
                    position: absolute;
                    bottom: 40%;
                    left: 13%;
                }

                input {
                    width: 55%;
                    height: 60%;
                    margin-left: 26%;
                    outline: none;
                    border: none;
                    border-bottom: 1px solid #bbb;
                    font-size: 15px;
                    letter-spacing: 2px;

                    &::placeholder {
                        color: #bbb;
                        font-size: 15px;
                        letter-spacing: 5px;
                    }
                }

            }

            .password {
                position: relative;
                height: 10%;
                width: 100%;
                margin-top: 1%;

                img {
                    width: 6%;
                    position: absolute;
                    bottom: 40%;
                    left: 13%;
                }

                input {
                    width: 55%;
                    height: 60%;
                    margin-left: 26%;
                    outline: none;
                    border: none;
                    border-bottom: 1px solid #bbb;
                    font-size: 15px;
                    letter-spacing: 2px;

                    &::placeholder {
                        color: #bbb;
                        font-size: 15px;
                        letter-spacing: 5px;
                    }
                }
            }

            .recertify{
                position: relative;
                height: 10%;
                width: 100%;
                margin-top: 1%;
            
                img {
                    width: 6%;
                    position: absolute;
                    bottom: 40%;
                    left: 13%;
                }
            
                input {
                    width: 55%;
                    height: 60%;
                    margin-left: 26%;
                    outline: none;
                    border: none;
                    border-bottom: 1px solid #bbb;
                    font-size: 15px;
                    letter-spacing: 2px;
            
                    &::placeholder {
                        color: #bbb;
                        font-size: 15px;
                        letter-spacing: 5px;
                    }
                }
            }

            .login-btn {
                width: 25%;
                height: 7%;
                background-color: #0b77f8;
                margin: auto;
                margin-top: 5%;
                border-radius: 20% / 50%;
                text-align: center;
                color: #fff;
                font-size: 23px;
                letter-spacing: 5px;
                line-height: 50px;

                &:hover {
                    cursor: pointer;
                    background-color: #0b69dc;
                }
            }

            .bottom {
                width: 100%;
                height: 5%;
                display: flex;
                justify-content: space-between;
                padding: 0 5%;
                box-sizing: border-box;
                margin-top: 18%;

                .register-btn {
                    width: 25%;
                    height: 100%;
                    background-color: #c2e1fa;
                    border-radius: 15% / 50%;
                    color: #fff;
                    text-align: center;
                    font-size: 15px;
                    letter-spacing: 5px;
                    line-height: 35px;

                    &:hover {
                        cursor: pointer;
                    }
                }

                .find-pass {
                    width: 25%;
                    height: 100%;
                    background-color: #3f7cc4;
                    border-radius: 15% / 50%;
                    color: #fff;
                    text-align: center;
                    font-size: 15px;
                    letter-spacing: 5px;
                    line-height: 35px;

                    &:hover {
                        cursor: pointer;
                        background-color: #246dc1;
                    }
                }
            }
        }
    }

    .dialog {
        position: absolute;
        top: 15%;
        left: 15%;
    }

    .renew-dia{
        position: absolute;
        top: 37%;
        left: 62%;
    }
}
</style>
