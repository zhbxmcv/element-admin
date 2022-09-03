<template>
  <article>
    <div class="tag">
        <div class="tag_1">HOT</div>
        <div class="tag_2">
            <div class="tag_2_1"></div>
            <div class="tag_2_2"></div>
        </div>
        <div class="tag_3">
            <div class="tag_3_1">新上好课</div>
            <div class="tag_3_2"></div>
        </div>
        <div class="tag_4"></div>
    </div>
    <div class="prod">
        <ul>
            <li v-for="product in products" :key="product.id">
            <product-vue v-bind="product"></product-vue>
            </li>
        </ul>
    </div>
  </article>
</template>

<script setup>
import { reactive } from 'vue';
import productVue from '../common/product.vue';
const products = reactive([
    {
        id:1,
        img:'../../assets/images/productsimg/1.png',
        name:'React实战入门',
        desc:'中级 · 2人报名',
        price:'￥99999.00'

    },
    {
        id:2,
        img:'../../assets/images/productsimg/2.png',
        name:'Vue2 + Vue3 入门到企业实战',
        desc:'中级 · 3人报名',
        price:'￥99999.00'

    },
    {
        id:3,
        img:'../../assets/images/productsimg/3.png',
        name:'23届/24届，春招和秋招【待开班】',
        desc:'中级 · 49人报名',
        price:'￥9000.00'

    },
    {
        id:4,
        img:'../../assets/images/productsimg/4.png',
        name:'2208实训室',
        desc:'中级 · 40人报名',
        price:'￥3090.00'

    },
    {
        id:5,
        img:'../../assets/images/productsimg/5.png',
        name:'TypeScript【2022年录制】',
        desc:'中级 · 25人报名',
        price:'￥99.00'

    },
    {
        id:6,
        img:'../../assets/images/productsimg/6.png',
        name:'ES13 部分新特性',
        desc:'初级 · 31人报名',
        price:'免费学习'

    },
    {
        id:7,
        img:'../../assets/images/productsimg/7.png',
        name:'Vue2 + Nuxt2 + Vue3 + 项目',
        desc:'中级 · 39人报名',
        price:'￥299.00'

    },
    {
        id:8,
        img:'../../assets/images/productsimg/8.png',
        name:'2207实训室',
        desc:'中级 · 90人报名',
        price:'￥9090.00'

    },
    {
        id:9,
        img:'../../assets/images/productsimg/9.jpg',
        name:'WEB前端高频面试题',
        desc:'高级 · 775人报名',
        price:'￥399.00'

    },
    {
        id:10,
        img:'../../assets/images/productsimg/10.png',
        name:'前端实训室-前5天课程',
        desc:'高级 · 341人报名',
        price:'￥3090.00'

    },
    {
        id:11,
        img:'../../assets/images/productsimg/11.jpg',
        name:'WEB前端零基础到就业全套课程',
        desc:'初级 · 109人报名',
        price:'￥499.00'

    },
    {
        id:12,
        img:'../../assets/images/productsimg/12.png',
        name:'Vue3',
        desc:'初级 · 370人报名',
        price:'￥9.90'

    },
    {
        id:13,
        img:'../../assets/images/productsimg/13.jpg',
        name:'uni-app商城实战项目',
        desc:'中级 · 195人报名',
        price:'￥299.00'

    },
    {
        id:14,
        img:'../../assets/images/productsimg/14.jpg',
        name:'uni-app + Vue后台管理系统',
        desc:'中级 · 2341人报名',
        price:'￥399.00'

    },
    {
        id:15,
        img:'../../assets/images/productsimg/2.png',
        name:'Vue2 + Vue3 入门到企业实战',
        desc:'中级 · 3人报名',
        price:'￥99999.00'

    },
    {
        id:16,
        img:'../../assets/images/productsimg/3.png',
        name:'23届/24届，春招和秋招【待开班】',
        desc:'中级 · 49人报名',
        price:'￥9000.00'

    }
])
</script>
<style scoped lang="less">
    article{
        width: 1140px;
        margin: 0 auto;
        .tag{
            height: 38px;
            display: flex;
            margin-bottom: 10px;
            .tag_1{
                width: 62px;
                background-color: #ee0000;
                border-radius: 5px 0 5px 5px;
                font-size: 20px;
                font-weight: 800;
                text-align: center;
                line-height: 38px;
                color: white;
            }
            .tag_2{
                width: 10px;
                display: flex;
                flex-direction: column;
                .tag_2_1{
                    width: 0px;
                    height: 0px;
                    border: 5px solid #ee0000;
                    border-bottom-color: transparent;
                    border-right-color: transparent;
                }
                .tag_2_2{
                    flex: 1;
                }
            }
            .tag_3{
                width: 106px;
                .tag_3_1{
                    height: 30px;
                    font-size: 20px;
                    font-weight: 800;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                }
                .tag_3_2{
                    height: 8px;
                    background-color: #fcd945;
                    border-radius: 4px;
                }
            }
            .tag_4{
                flex: 1;
            }
        }
        .prod{
            ul{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    margin-top: 10px;
                }
            }
        }
    }

</style>