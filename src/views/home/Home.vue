<template>
  <Header></Header>
  <NavSwiper></NavSwiper>
  <ArticleVue></ArticleVue>
  <Footer></Footer>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Header from '@/components/common/Header.vue'
import NavSwiper from '../../components/nav/NavSwiper.vue';
import ArticleVue from '../../components/product/Article.vue';
import Footer from '../../components/common/footer/Footer.vue'
</script>
<style scoped>
</style>