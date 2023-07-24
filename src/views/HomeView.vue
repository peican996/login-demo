<template>
  <div class="home">
    <h2>Welcome, {{ username }}!</h2>
    <!-- 在这里放置登录后的页面内容 -->
    <button @click="helloMethod">hello-view</button>
    <h2>blog</h2>
    <!-- 在这里放置登录后的页面内容 -->
    <button @click="blog">blog</button>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();
const username = router.currentRoute.value.params.username;

function helloMethod() {
  // 使用Vue Router进行页面跳转
  router.push('/hello');
}

function blog() {
  // 使用Vue Router进行页面跳转
  router.push('/blog');
}
</script>

<style scoped>
/* 样式可以根据需求进行调整 */
.home {
  width: 300px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
