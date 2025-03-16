<template>
    <div class="data-main">
        <div class="card">
            <img src="../../assets/book.png" alt="" style="margin-top: 8%;">
            <div class="card-title">书籍</div>
        </div>
        <div class="card">
            <img src="../../assets/space.png" alt="" style="width: 80%; margin-left: 15%;">
            <div class="card-title">打卡点</div>
        </div>
        <div class="card">
            <img src="../../assets/travel.png" alt="" style="width: 90%; margin-left: 3%;">
            <div class="card-title">旅游攻略</div>
        </div>
        <div class="card">
            <img src="../../assets/goods.png" alt="" style="margin-top: 5%;">
            <div class="card-title">推荐好物</div>
        </div>
        <div class="card">
            <img src="../../assets/people.png" alt="" style="width: 90%;">
            <div class="card-title">名人名言</div>
        </div>
        <div class="card">
            <img src="../../assets/img.png" alt="" style="height: 68%;">
            <div class="card-title">图片</div>
        </div>
        <div class="card">
            <img src="../../assets/text.png" alt="" style="height: 68%;">
            <div class="card-title">文章</div>
        </div>
        <div class="card">
            <img src="../../assets/other.png" alt="" style="width: 90%; margin-left: 3%;">
            <div class="card-title">其他</div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.data-main {
    width: 90%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    padding-top: 8%;
    box-sizing: border-box;
    .card{
        width: 20%;
        height: 34%;
        background-color: #fff;
        border-radius: 10% / 10%;
        margin-right: 5%;
        padding: 2% 4% 0 4%;
        box-sizing: border-box;
        &:hover{
            cursor: pointer;
        }
        img{
            width: 95%;
            margin: auto;
        }
        .card-title{
            color: #716e6e;
            font-size: 28px;
            letter-spacing: 5px;
            text-align: center;
            margin-top: 6%;
        }
    }
}
</style>