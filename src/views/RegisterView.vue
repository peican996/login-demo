<template>
  <div class="page">
    <h2>用户注册</h2>
    <div class="form-container">
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">用户名：</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">密码：</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="confirm-password">确认密码：</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required>
        </div>
        <div class="button-group">
          <button type="submit">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";
import router from "@/router/router";

const username = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = async () => {
  // 检查密码和确认密码是否一致
  if (password.value !== confirmPassword.value) {
    alert("密码和确认密码不一致");
    return;
  }
  // 后端Go代码接口的URL
  const apiUrl = 'http://localhost:8080/api/v1/user/add';

  // 构造注册请求的数据
  const registerData = {
    username: username.value,
    password: password.value,
    role: 2,
  };

  try {
    // 发送注册请求
    const response = await axios.post(apiUrl, registerData);
    const status = response.data.status;

    if (status === 200) {
      // 注册成功，进行页面跳转到登录界面或其他操作
      await router.push('/login');
    } else {
      // 注册失败，根据后端返回的错误信息进行相应处理
      alert("注册失败：" + response.data.message);
    }
  } catch (error) {
    // 发生错误，进行错误处理
    alert("注册失败：" + error.message);
  }
};
</script>

<style scoped>
.page {
  /* 设置背景样式等 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url("../../public/background/blackMap.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

h2 {
  /* 其他样式 */
  margin-bottom: 20px;
  color: white;
}

.form-container {
  width: 300px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
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
  margin-top: 10px;
}

button {
  padding: 8px;
  width: 200px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
