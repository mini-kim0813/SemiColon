<template>
  <!-- @submit = v-on:submit -->
  <!-- prevent: 새로고침 방지 -->
  <form @submit.prevent="submitForm">
    <div>
      <label class="label_d" for="userNickName">nickname: </label>
      <!-- v-model: data 속성과 연결 -->
      <input id="userNickName" type="text" v-model="userNickName" />
    </div>
    <div>
      <label class="label_d" for="password">pw: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div>
      <label class="label_d" for="userEmail">email: </label>
      <input id="userEmail" type="email" v-model="userEmail" />
    </div>
    <button type="submit">회원 가입</button>
    <!-- 결과 메시지 출력 -->
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '../api/index';

export default {
  data() {
    return {
      // form
      userNickName: '',
      password: '',
      userEmail: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      // API 요청시 전달할 userData 객체
      console.log("1단계");
      const userData = {
        userNickName: this.userNickName,
        password: this.password,
        userEmail: this.userEmail,
      };
      console.log("2단계");
      const { data } = await registerUser(userData);
      console.log("3단계");
      this.logMessage = `회원가입이 정상적으로 처리되었습니다.`;
      console.log(data);
      // 가입 후 폼 초기화
      this.initForm();
      console.log("4단계");
    },
    initForm() {
      this.userNickName = '';
      this.password = '';
      this.userEmail = '';
    },
  },
};
</script>

<style scoped>
.label_d {
  font-weight: bold;
  font-size: 28px;
  color: black;
}

.label_d > #userNickName {
  font-weight: bold;
  font-size: 22px;
  color: black;
}

.label_d > #userEmail {
  font-weight: bold;
  font-size: 22px;
  color: black;
}

.label_d > #password {
  font-weight: bold;
  font-size: 22px;
  color: black;
}
</style>