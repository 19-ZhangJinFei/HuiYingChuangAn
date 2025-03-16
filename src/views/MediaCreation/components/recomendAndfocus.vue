<template>
    <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="推荐" name="first">
            <div class="bottom">
                <div class="box" v-for="(item,index) in boxesOne" :key="index">
                    <img :src="item.src" alt="">
                    <div class="text">
                        <div class="title">{{ item.title }}</div>
                        <div class="article">{{ item.text }}</div>
                    </div>
                    <div class="icons">
                        <div>
                            <StartIcon class="starIcon" color="black" @click="item.collection++"></StartIcon>{{
                            item.collection }}
                        </div>
                        <div>
                            <el-icon>
                                <ChatDotSquare @click="item.comments++" />
                            </el-icon>{{ item.comments }}
                        </div>
                        <div>
                            <HeartIcon class="heartIcon" color="black" @click="item.heart++"></HeartIcon>{{
                            item.heart }}
                        </div>
                    </div>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="关注" name="second">
            <div class="bottom2">
                <div class="box" v-for="(item, index) in boxesTwo" :key="index">
                    <img :src="item.src" alt="">
                    <div class="text">
                        <div class="title">{{ item.title }}</div>
                        <div class="article">{{ item.text }}</div>
                    </div>
                    <div class="icons">
                        <div>
                            <HeartIcon class="heartIcon" color="#f92125"></HeartIcon>{{
                            item.heart }}
                        </div>
                        <div>
                            <el-icon>
                                <ChatDotSquare />
                            </el-icon>{{ item.comments }}
                        </div>
                        <div>
                            <StartIcon class="starIcon" color="black"></StartIcon>{{
                            item.collection }}
                        </div>
                    </div>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChatDotSquare } from '@element-plus/icons-vue'
import HeartIcon from '../../../components/icons/SvgIcon2.vue'
import StartIcon from '../../../components/icons/SvgIcon4.vue'
const boxesOne = ref([
    {
        src:'https://img0.baidu.com/it/u=120116929,1222315674&fm=253&fmt=auto&app=120&f=JPEG?w=569&h=353',
        title:'现在心梗为什么变多了?医生强调:早起少做这4件事',
        text:'随着现代生活节奏的加快，心脏病、尤其是心肌梗死(心梗)的发病率逐年上升，很多人会问，为什么心梗的发生越来越频繁了?我们每天都在接触各种各样的健康信息，然而生活方式的改变、压力的增大，往往是最容易被忽视却又直接影响心脏健康的因素。',
        heart:1325,
        comments:268,
        collection:543
    },
    {
        src: 'https://img2.baidu.com/it/u=4102046781,3823297239&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        title: '高中生成功将《毁灭战士》移植到PDF文件:浏览器打开就能玩',
        text: '快科技1月16日消息，一位国外的高中生近日成功将1993年发布的射击名作《毁灭战士》移植到了PDF文件中。玩家只需通过基于Chromium的浏览器打开名为“doom.pdf"的文件，即可体验这款游戏，用手机或阅读器打开该PDF文件，画面会一片空白，无法正常运行游戏。',
        heart: 1123,
        comments: 345,
        collection: 353
    },
    {
        src: 'https://img1.baidu.com/it/u=2723072949,1593464461&fm=253&fmt=auto&app=120&f=JPEG?w=881&h=800',
        title: '小米yu7新款车型，外观设计风格非常好看',
        text: '虽然小米SU7上市还不到一年时间，但它的销量数据充分地展示出了什么叫“初生生犊不怕虎"。小米汽车2024年原定销量目标7万辆，而实际上交付超过13.5万辆车，在2024年的造车新势力销量排行榜中位列第7位。得注意的是，销量比小米高的新势力品牌至少都有5款车在售，而小米仅靠SU7一款车就达成了13.5万辆的成绩。',
        heart: 1562,
        comments: 233,
        collection: 785
    }
])
const activeName = ref('first')
const boxesTwo = ref([
    {
        src: 'https://img1.baidu.com/it/u=4257846990,3640108696&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641',
        title: 'DeepSeek爆火，究竟是啥...',
        text: "近日，国产AIDeepSeek在中国、美国的科技圈受到广泛关注...",
        heart: '14.2w',
        comments: 3142,
        collection: 4415
    },
    {
        src: 'https://img0.baidu.com/it/u=126085170,2261949151&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=603',
        title: '台湾唯一称谓就是中国台湾省...',
        text: "十四届全国人大三次会议3月7日上午举行记者会，中共中央政治局委员...",
        heart: '48.4w',
        comments: '4.1w',
        collection: '2.4w'
    },
    {
        src: 'https://img1.baidu.com/it/u=3977917399,260803801&fm=253&fmt=auto&app=120&f=JPEG?w=1201&h=500',
        title: '又有新纪录!《哪吒之魔童闹海》票房超...',
        text: "刚刚，《哪吒之魔童闹海》全球票房(含预售及海外)超过148亿。一路向前，吒儿加油!",
        heart: '27.8w',
        comments: '1.2w',
        collection: 7745
    },
    {
        src: 'https://img2.baidu.com/it/u=1574676664,1609384233&fm=253&fmt=auto&app=120&f=JPEG?w=749&h=500',
        title: 'NBA球星詹姆斯达成五万分成就...',
        text: "直播吧3月6日讯 在昨日湖人主场136-115大胜鹈鹕的比赛中，湖人前锋詹姆斯得到34分",
        heart: '33.7w',
        comments: '1.1w',
        collection: '1.2w'
    },
    {
        src: 'https://img2.baidu.com/it/u=2119887838,826324120&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        title: '小米SU7 Ultra全面解析..',
        text: "在当今电子产品迅速更新迭代的时代，小米再次以其最新推出的SU7Ultra电动轿车",
        heart: '40.7w',
        comments: '2.1w',
        collection: '3.6w'
    },
    {
        src: 'https://img2.baidu.com/it/u=2359968963,2368315279&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500',
        title: '外交部长王毅答记者问..',
        text: "3月7日，十四届全国人大三次会议在北京梅地亚中心新闻发布厅举行记者会。",
        heart: '27.3w',
        comments: '4.8w',
        collection: 7489
    }
])
</script>

<style lang="scss" scoped>
.el-tabs::v-deep {
    width: 95%;
    height: 90%;
    margin: 1% auto;
    --el-menu-hover-text-color: black;

    .el-tabs__item {
        font-size: 25px;
    }

    .el-tab-pane {
        width: 100%;
        height: 100%;
    }
}

.bottom {
    width: 100%;
    height: 100%;
    .box {
        display: flex;
        position: relative;
        width: 95%;
        height: 32%;
        margin: 0 auto;
        background: rgba($color: #fff, $alpha: 0.4);
        border-radius: 3% / 15%;
        margin-bottom: 1%;

        img {
            width: 20%;
            height: 80%;
            margin: 2% 3% 0 2%;
            border-radius: 25% / 25%;
        }

        .text {
            margin-top: 2%;
            width: 68%;

            .title {
                width: 100%;
                font-size: 30px;
                font-weight: 700;
                word-wrap: break-word;
                letter-spacing: 4px;
            }

            .article {
                color: #716e6e;
                word-wrap: break-word;
                letter-spacing: 2px;
                margin-top: 1%;
                line-height: 25px;
            }
        }

        .icons {
            position: absolute;
            display: flex;
            width: 16%;
            justify-content: space-between;
            top: 80%;
            left: 80%;
            font-size: 11px;

            .el-icon {
                font-size: 30px;

                &:hover {
                    cursor: pointer;
                }
            }

            .heartIcon {
                width: 30px;
                height: 30px;

                &:hover {
                    cursor: pointer;
                }
            }

            .starIcon {
                width: 30px;
                height: 30px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}

.bottom2 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 0 1%;
    box-sizing: border-box;
    justify-content: space-between;
    .box {
        display: flex;
        position: relative;
        width: 47%;
        height: 32%;
        background: rgba($color: #fff, $alpha: 0.4);
        border-radius: 40px;
        margin-bottom: 1%;

        img {
            width: 50%;
            height: 80%;
            margin: 4% 4% 0 3%;
            border-radius: 35px;
        }

        .text {
            margin-top: 4%;
            width: 40%;

            .title {
                width: 100%;
                font-size: 20px;
                font-weight: 700;
                word-wrap: break-word;
                letter-spacing: 2px;
            }

            .article {
                color: #716e6e;
                word-wrap: break-word;
                letter-spacing: 4px;
                margin-top: 2%;
                line-height: 22px;
            }
        }

        .icons {
            position: absolute;
            display: flex;
            width: 27%;
            justify-content: space-between;
            top: 82%;
            left: 70%;
            font-size: 11px;

            .el-icon {
                font-size: 20px;

                &:hover {
                    cursor: pointer;
                }
            }

            .heartIcon {
                width: 20px;
                height: 20px;

                &:hover {
                    cursor: pointer;
                }
            }

            .starIcon {
                width: 20px;
                height: 20px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
