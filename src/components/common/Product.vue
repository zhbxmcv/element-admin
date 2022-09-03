<template>
  <div class="product" :class="style" @mouseenter="MourseEnter" @mouseleave="MourseLeave">
    <div class="product_img">
        <img :src="getImgUrl(product.img)" alt="">
    </div>
    <div class="product_name">{{product.name}}</div>
    <div class="product_des">{{product.desc}}</div>
    <div class="product_price">{{product.price}}</div>
  </div>
</template>

<script setup>
import 'animate.css'
import { ref } from 'vue';
let style = ref('')
const MourseEnter = ()=>{
    style.value="animate__animated animate__bounce"
}
const MourseLeave = ()=>{
    style.value = ''
}
const product = defineProps({
    id:Number,
    img:String,
    name:String,
    desc: String,
    price: String
})
const getImgUrl = (imgrul) => new URL(imgrul, import.meta.url).href
</script>
<style scoped lang="less">
    .product{
        width: 270px;
        height: 275px;
        border: 1px solid #eee;
        border-radius: 5px;
        box-shadow: 0 5px 10px 10px #eee;
        cursor: pointer;
        .product_img{
            height: 165px;
            img{
                height: 165px;
                width: 270px;
                border-radius: 5px 5px 0 0;
            }
        }
        .product_name{
            height: 40px;
            text-align: left;
            line-height: 40px;
            font-size: 18px;
            font-weight: 800;
            margin-left: 5px;
            overflow: hidden;
        }
        .product_des{
            height: 30px;
            text-align: left;
            line-height: 30px;
            font-size: 13px;
            color: #808080;
            margin-left: 5px;
        }
        .product_price{
            height: 40px;
            text-align: left;
            line-height: 40px;
            color: red;
            font-size: 18px;
            font-weight: 800;
            margin-left: 5px;
        }
    }

</style>