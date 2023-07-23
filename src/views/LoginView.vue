<template>
  <div class="page">
    <h2>认证登录</h2>
    <div>
      <form @submit.prevent="login">
        <div>
          <label for="username">用户名：</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">密码：</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="button-group">
          <button type="submit">登录</button>
          <button type="button" @click="goToRegister">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {post} from "@/net";
import router from "@/router/router";

const username = ref('');
const password = ref('');
const login = () => {
  // 后端Go代码接口的URL
  const apiUrl = 'http://127.0.0.1:8080/api/v1/login';
  // 构造登录请求的数据
  const loginData = {
    username: username.value,
    password: password.value,
  };
  post(apiUrl, loginData).then((message) => {
    if (message) {
      router.push("/home/" + username.value);
    } else {
      alert("账号或者密码错误！！！")
    }
  });
}

const goToRegister = () => {
  router.push("/register");
}
</script>

<style scoped>
.page {
  /* 设置背景图片 */
  background-image: url("../../public/background/blackMap.jpg");
  /* 设置背景平铺方式 */
  background-repeat: no-repeat;
  background-size: cover;
  /* 其他样式 */
  width: 100%;
  height: 100vh;
  /* 其他样式 */
}

/* 新增样式 */
h2 {
  position: absolute; /* 设置为绝对定位 */
  top: 27%; /* 位于账号输入框上方，可以根据需要调整距离 */
  left: 50%;
  transform: translateX(-50%); /* 水平居中 */
  color: white;
}

form {
  width: 300px;
  margin: 0 auto;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
  color: white;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 5px; /* 设置按钮和输入框之间的垂直间距 */
}

button {
  width: 100px;
  padding: 8px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px; /* 设置按钮之间的间距 */
}
</style>
