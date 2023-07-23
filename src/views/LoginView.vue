<template>
  <div>
    <h2>登录测试</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <button type="submit">登录</button>
      </div>
    </form>
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
</script>

<style scoped>
/* 样式可以根据自己的需求进行调整 */
h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  width: 300px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
