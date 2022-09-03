<template>
    <nav>
        <div class="nav_top"></div>
        <div class="nav_body">
            <div class="nav_body_t">
                <div class="nav_body_tleft">
                    <ul class="nav_ul">
                        <li v-for="cou in course" :key="cou"><p class="nav_sub_p">{{cou}}</p><p>▶</p></li>
                    </ul>
                </div>
                <div class="nav_body_tright">
                    <el-carousel height="400px">
                        <el-carousel-item v-for="item in nav_list" :key="item">
                            <img class="nav_img" :src="getImgUrl(item)" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="nav_body_f">
                <div class="nav_foot_sub" v-for="sub in subject_list" :key="sub.id">
                    <div><img :src="getImgUrl(sub.icon)" alt=""></div>
                    <div>
                        <div class="sub_name">{{ sub.name }}</div>
                        <div class="sub_des">{{ sub.des }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav_foot">

        </div>
    </nav>
</template>

<script setup>
// import 'animate.css'
// import { ref } from 'vue';
// let anim = ref('')
// const MouseIn = ()=>{
//     anim.value = 'animate__animated animate__rubberBand'
// }
// const MouseLe = ()=>{
//     anim.value = ''
// }
const nav_list = ['../../assets/images/navimg/8c6ee4cf7fb54425987871b9a2f52f2e.png', '../../assets/images/navimg/84f13f71af004296b14d7561a67df282.jpg', '../../assets/images/navimg/818bb516173241708b1389bd03cd68a7.jpg', '../../assets/images/navimg/1985d6893e044996bf54b0a2ee904981.jpg']
const subject_list = [
    {
        id: 1,
        name: '初级课程',
        des: "入门课，岗位多",
        icon: '../../assets/images/subimg/chuji.png'
    },
    {
        id: 2,
        name: '中级课程',
        des: "进阶与实战",
        icon: '../../assets/images/subimg/zhongji.png'
    },
    {
        id: 3,
        name: '高级课程',
        des: "轻松掌握核心技能",
        icon: '../../assets/images/subimg/gaoji.png'
    },
    {
        id: 4,
        name: '项目实战',
        des: "手把手实践",
        icon: '../../assets/images/subimg/xiangmu.png'
    },
    {
        id: 5,
        name: '前端算法',
        des: "笑傲前端技能",
        icon: '../../assets/images/subimg/suanfa.png'
    }
]
const course = ['HTML/CSS / html/css / css','JavaScript / jQuery / TypeScript / es6','Node.js / Node.js','前端框架 / Vue.js / NuxtJS / React.js','前端工具 / webpack / Git','跨平台开发 / uni-app / mui','求职面试 / 前端面试题 / 面试录音','小鹿线班级 / P5班 / 实训室 / 活动专题','其他课程 / 零基础到就业 / WEB前端算法']
//用:src动态引用图片地址时不能直接使用地址变量，以前vue2时可以require（url），但vite用不了，因为require是webpack的方法，vite只能用new RUL转换动态地址了：
const getImgUrl = (imgrul) => new URL(imgrul, import.meta.url).href
</script>
<style scoped lang="less">
nav {
    height: 590px;
    width: 100%;
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#c7f6d4), to(#fff));

    .nav_top {
        height: 30px;
    }

    .nav_body {
        height: 500px;
        width: 1140px;
        margin: 0 auto;
        border-radius: 10px;


        .nav_body_t {
            height: 400px;
            display: flex;

            .nav_body_tleft {
                width: 280px;
                background-color: black;
                border-radius: 10px 0 0 0;
                .nav_ul{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 100%;
                    li{
                        color: #fff;
                        font-size: 14px;
                        font-weight: 800;
                        text-align: left;
                        padding-left: 5px;
                        overflow: hidden;
                        white-space: nowrap;
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        cursor:pointer;
                        .nav_sub_p{
                            overflow: hidden;
                        }
                    }
                    li:hover{
                        background: -webkit-linear-gradient(left, #3fe1fa, #000);
                    }
                }
            }

            .nav_body_tright {
                width: 860px;
            }
        }

        .nav_body_f {
            height: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            box-shadow: 0px 20px 40px -15px skyblue;
            border-radius: 0 0 10px 10px;
            border: 1px solid #eee;

            .nav_foot_sub {
                width: 185px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }
            }
        }
    }

    .nav_foot {
        height: 60px;
    }
}

.nav_img {
    width: 860px;
    height: 400px;
    border-radius: 0 10px 0 0;
}

.sub_name {
    font-size: 18px;
    font-weight: 800;
}

.sub_des {
    font-size: 14px;
    color: #808080;
    margin-top: 5px;
}
</style>