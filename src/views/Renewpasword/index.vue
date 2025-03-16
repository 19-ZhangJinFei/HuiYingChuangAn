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
                <div class="password">
                    <img src="../../assets/3.png" alt="">
                    <input v-model="password" type="password" placeholder="密码加密" />
                </div>
                <div class="login-btn" @click="renew">确认重置</div>
                <div class="agreemrnt">
                    <div v-if="ifagree" class="agree" @click="ifagree = false"></div>
                    <img v-else src="../../assets/success.png" alt="" @click="ifagree = true">
                    我已同意
                    <span href="" @click="ifdialog = true">《用户隐私协议》</span>
                </div>
                <div class="bottom">
                    <div class="register-btn" @click="router.push('/register')">注册</div>
                    <div class="find-pass" @click="router.push('/login')">返回登陆</div>
                </div>
            </div>
        </div>
        <Dialog v-if="ifdialog" class="dialog" @changeagree="getagree"></Dialog>
        <renewDialog class="renew-dia" v-if="ifrenew"></renewDialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Dialog from '../Login/components/agreement.vue'
import renewDialog from './components/renewDialog.vue'
import { getlogin } from '../../apis/login'
import { ElMessage } from 'element-plus'
const router = useRouter()
const username = ref('')
const password = ref('')
const ifagree = ref(true)
const ifdialog = ref(false)
const ifrenew = ref(false)
const getagree = (a: boolean) => {
    ifagree.value = !a
    ifdialog.value = !a
}
const renew = async () => {
    // if(!ifagree.value){
    //     try {
    //         const res = await getlogin({ username: username.value, base_password: password.value })
    //         localStorage.setItem('username', res.data.username)
    //         ElMessage.success('登陆成功')
    //         router.push('/menu/home')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }else{
    //     ElMessage({
    //         message: '请先同意《用户隐私协议》',
    //         type: 'warning',
    //     })
    // }
     ifrenew.value = true
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
                margin-bottom: 15%;
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
                font-size: 20px;
                letter-spacing: 5px;
                line-height: 50px;

                &:hover {
                    cursor: pointer;
                    background-color: #0b69dc;
                }
            }

            .agreemrnt {
                display: flex;
                font-size: 10px;
                // text-align: center;
                letter-spacing: 2px;
                margin-top: 1%;
                padding-left: 37%;
                box-sizing: border-box;

                &:hover {
                    cursor: pointer;
                }

                .agree {
                    width: 7px;
                    height: 7px;
                    // background-color: orange;
                    border-radius: 50%;
                    border: 1px solid #d9d9d9;
                    margin-right: 2%;
                    margin-top: 1%;

                    &:hover {
                        cursor: pointer;
                    }
                }

                img {
                    width: 9px;
                    height: 9px;
                    margin-right: 2%;
                    margin-top: 1%;

                    &:hover {
                        cursor: pointer;
                    }
                }

                span {
                    color: #5387c5;
                    text-decoration: underline;

                    &:hover {
                        color: #0b5cbf;
                        cursor: pointer;
                    }
                }
            }

            .bottom {
                width: 100%;
                height: 5%;
                display: flex;
                justify-content: space-between;
                padding: 0 5%;
                box-sizing: border-box;
                margin-top: 15%;

                .register-btn {
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
