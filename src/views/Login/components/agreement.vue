<template>
    <div class="agree-main">
        <div class="title">《用户隐私协议》</div>
        <div class="text">
            <div>尊敬的用户：</div>
            <div style="text-indent: 2em">我们非常重视您的隐私和数据安全。在此，我们承诺，慧影创安平台及其提供的服务将严格遵守以下隐私保护原则，确保您的个人信息得到充分保护：
            </div>
            <div>数据收集透明性：我们仅在您明确同意的情况下收集个人信息，并明确告知收集目的、范围和方式。</div>
            <div>1.数据最小化：我们仅收集提供服务所必需的最少数据量，不进行无关的个人信息收集。</div>
            <div>2.数据安全：我们采取行业领先的安全措施，包括数据加密和安全存储，以防止数据泄露、非法访问或篡改。</div>
            <div>3.用户控制权：您有权访问、更正、删除我们持有的您的个人信息，并可随时撤回您的授权同意。</div>
            <div>4.法律遵从：我们保证遵守适用的隐私保护法律和规定，确保您的隐私权利得到法律保护。</div>
            <div>我们承诺，慧影创安平台将不断努力提升服务质量，同时确保您的隐私得到最大程度的尊重和保护。感谢您对我们的信任和支持。</div>
        </div>
        <div class="tip">慧影创安团队</div>
        <div class="btn" @click="agree">同意</div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['changeagree'])
const agree = () =>{
    emit('changeagree',true)
}
</script>

<style lang="scss" scoped>
.agree-main{
    position: relative;
    width: 70%;
    height: 70%;
    background: rgba($color: #c4e3f1, $alpha: 0.97);
    border-radius: 5% /10%;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4);
    padding: 2% 3%;
    box-sizing: border-box;
    .title{
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 5px;
    }
    .text{
        font-size: 20px;
        line-height: 40px;
        margin-top: 2%;
    }
    .btn{
        background-color: #dbd37c;
        width: 15%;
        height: 8%;
        border-radius: 15% / 50%;
        font-size: 25px;
        letter-spacing: 20px;
        color: #fff;
        line-height: 46px;
        padding-left: 4.2%;
        box-sizing: border-box;
        &:hover{
            cursor: pointer;
            background-color: #d8ce5d;
        }
        margin:5% 0 0 41%;
    }
    .tip{
        position: absolute;
        right: 8%;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 5px;
    }
}
</style>
